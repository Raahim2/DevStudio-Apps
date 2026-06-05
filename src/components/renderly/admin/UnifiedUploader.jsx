import React, { useState } from 'react';

const REPO_OWNER = "Raahim2";
const REPO_NAME = "Renderly";
const BASE_PATH = "website/public";

export default function UnifiedUploader({ currentData, onComplete }) {
  const [queue, setQueue] = useState([]); // { file, type: 'pattern'|'mockup', categoryId, name, isPremium, preview }
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState([]);

  const addLog = (msg) => setLogs(prev => [...prev, `> ${msg}`]);

  const handleFileSelection = (e, type) => {
    const selected = Array.from(e.target.files).filter(f => f.name.endsWith('.webp'));
    const mapped = selected.map(f => ({
      file: f,
      type: type, // 'pattern' or 'mockup'
      categoryId: type === 'mockup' ? currentData.categories[0].id : null,
      name: type === 'mockup' ? f.name.replace('.webp', '') : '',
      isPremium: false,
      preview: URL.createObjectURL(f)
    }));
    setQueue([...queue, ...mapped]);
  };

  const updateQueueItem = (index, key, value) => {
    const newQueue = [...queue];
    newQueue[index][key] = value;
    setQueue(newQueue);
  };

  const readFileBase64 = (file) => new Promise((res) => {
    const r = new FileReader();
    r.onload = () => res(r.result.split(',')[1]);
    r.readAsDataURL(file);
  });

  const runUpload = async () => {
    if (!token) return alert("GitHub Token Required");
    setLoading(true);
    setLogs(["Initializing multi-asset commit..."]);

    try {
      const headers = { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github.v3+json' };
      
      // 1. Get Latest Commit Reference
      const mainRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/branches/main`, { headers });
      const mainData = await mainRes.json();
      const latestCommitSha = mainData.commit.sha;
      const baseTreeSha = mainData.commit.commit.tree.sha;

      // 2. Clone current data for modification
      let newData = JSON.parse(JSON.stringify(currentData));
      let currentTotalPatterns = parseInt(newData.patterns[0].total);
      let premiumIds = [...newData.patterns[1].premium_ids];
      
      const treeItems = [];
      const categoryCounters = {}; // Track multiple uploads to same category in one batch

      // 3. Process the Queue
      for (const item of queue) {
        const b64 = await readFileBase64(item.file);
        const blobRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/blobs`, {
          method: 'POST', headers, body: JSON.stringify({ content: b64, encoding: 'base64' })
        });
        const blobData = await blobRes.json();

        if (item.type === 'pattern') {
          currentTotalPatterns++;
          const fileName = `${currentTotalPatterns}.webp`;
          addLog(`Preparing Pattern: ${fileName}`);
          
          treeItems.push({
            path: `${BASE_PATH}/Patterns/${fileName}`,
            mode: '100644', type: 'blob', sha: blobData.sha
          });

          if (item.isPremium) premiumIds.push(currentTotalPatterns);

        } else {
          // It's a Mockup Asset
          const category = newData.categories.find(c => c.id === item.categoryId);
          
          // Local counter for this batch
          if (!categoryCounters[item.categoryId]) {
            categoryCounters[item.categoryId] = category.images.length;
          }
          categoryCounters[item.categoryId]++;
          
          const newNum = categoryCounters[item.categoryId];
          const fileName = `${newNum}.webp`;
          const folderName = category.title; // e.g. "Appreals", "Automobile"

          addLog(`Preparing Mockup for ${folderName}: ${fileName}`);

          treeItems.push({
            path: `${BASE_PATH}/${folderName}/${fileName}`,
            mode: '100644', type: 'blob', sha: blobData.sha
          });

          // Add to data.json structure
          category.images.push({
            id: `${item.categoryId}${newNum}`,
            name: item.name,
            url: `https://devstudio-apps.vercel.app/renderly/${folderName}/${fileName}`,
            isPremium: item.isPremium
          });
        }
      }

      // 4. Update data.json top-level
      newData.updatedAt = new Date().toISOString().split('T')[0];
      newData.patterns[0].total = currentTotalPatterns.toString();
      newData.patterns[1].premium_ids = premiumIds.sort((a,b) => a-b);

      addLog("Finalizing data.json update...");
      const jsonBlobRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/blobs`, {
        method: 'POST', headers, body: JSON.stringify({ content: JSON.stringify(newData, null, 2), encoding: 'utf-8' })
      });
      const jsonBlobData = await jsonBlobRes.json();
      treeItems.push({ path: `website/public/data.json`, mode: '100644', type: 'blob', sha: jsonBlobData.sha });

      // 5. Commit to GitHub
      const treeRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/trees`, {
        method: 'POST', headers, body: JSON.stringify({ base_tree: baseTreeSha, tree: treeItems })
      });
      const treeData = await treeRes.json();

      const commitRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/commits`, {
        method: 'POST', headers, body: JSON.stringify({
          message: `Admin: Batch upload ${queue.length} assets and sync data.json`,
          tree: treeData.sha,
          parents: [latestCommitSha]
        })
      });
      const commitData = await commitRes.json();

      await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/git/refs/heads/main`, {
        method: 'PATCH', headers, body: JSON.stringify({ sha: commitData.sha })
      });

      addLog("Successfully pushed all changes!");
      setTimeout(onComplete, 2000);
    } catch (err) {
      addLog(`FATAL: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="space-y-6">
        <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-4">Credentials</h3>
          <input type="password" placeholder="GitHub PAT" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none" value={token} onChange={e => setToken(e.target.value)} />
        </div>

        <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 space-y-3">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Add to Queue</h3>
          <label className="block w-full text-center py-4 bg-indigo-600/10 border border-indigo-500/30 rounded-xl cursor-pointer hover:bg-indigo-600/20 text-[10px] font-black text-indigo-400 transition-all">
            + ADD PATTERNS
            <input type="file" multiple accept=".webp" className="hidden" onChange={(e) => handleFileSelection(e, 'pattern')} />
          </label>
          <label className="block w-full text-center py-4 bg-emerald-600/10 border border-emerald-500/30 rounded-xl cursor-pointer hover:bg-emerald-600/20 text-[10px] font-black text-emerald-400 transition-all">
            + ADD MOCKUP ASSETS
            <input type="file" multiple accept=".webp" className="hidden" onChange={(e) => handleFileSelection(e, 'mockup')} />
          </label>
          
          <button disabled={loading || queue.length === 0} onClick={runUpload} className="w-full py-4 bg-white text-black rounded-xl font-black text-[10px] tracking-widest disabled:opacity-20 mt-4 uppercase">
            {loading ? "COMMITTING..." : "Push All to GitHub"}
          </button>
        </div>

        <div className="bg-black/80 p-4 rounded-xl font-mono text-[9px] text-emerald-500 h-40 overflow-y-auto border border-white/5">
          {logs.map((l, i) => <div key={i}>{l}</div>)}
        </div>
      </div>

      <div className="lg:col-span-2 bg-white/5 p-8 rounded-[3rem] border border-white/10">
        <h3 className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-6">Execution Queue ({queue.length})</h3>
        <div className="space-y-4">
          {queue.map((item, idx) => (
            <div key={idx} className="flex gap-6 bg-black/40 p-4 rounded-2xl border border-white/5 items-center">
              <img src={item.preview} className="w-16 h-16 object-cover rounded-lg" />
              
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[8px] font-black text-slate-500 uppercase">Type</label>
                  <div className={`text-[10px] font-bold ${item.type === 'pattern' ? 'text-indigo-400' : 'text-emerald-400'}`}>
                    {item.type.toUpperCase()}
                  </div>
                </div>

                {item.type === 'mockup' && (
                  <>
                    <div>
                      <label className="text-[8px] font-black text-slate-500 uppercase">Category</label>
                      <select 
                        value={item.categoryId}
                        onChange={(e) => updateQueueItem(idx, 'categoryId', e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-md text-[10px] text-white p-1 outline-none"
                      >
                        {currentData.categories.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="text-[8px] font-black text-slate-500 uppercase">Mockup Display Name</label>
                      <input 
                        type="text" 
                        value={item.name}
                        onChange={(e) => updateQueueItem(idx, 'name', e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-md text-[10px] text-white px-2 py-1 outline-none"
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => updateQueueItem(idx, 'isPremium', !item.isPremium)}
                  className={`px-3 py-1.5 rounded-md text-[8px] font-black border transition-all ${item.isPremium ? 'bg-amber-500/20 text-amber-500 border-amber-500/30' : 'bg-white/5 text-slate-500 border-white/10'}`}
                >
                  {item.isPremium ? '★ PRO' : 'FREE'}
                </button>
                <button onClick={() => setQueue(queue.filter((_, i) => i !== idx))} className="text-[8px] text-red-500 font-bold uppercase">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}