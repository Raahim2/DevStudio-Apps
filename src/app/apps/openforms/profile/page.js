"use client"; // Required for client-side hooks and redirects

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation'; // CORRECT IMPORT

function ProfileRedirectContent() {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId'); // Correctly reads ?userId= from the URL

  useEffect(() => {
    if (!userId) return;

    // 1. Construct your deep link
    const appDeepLink = `openforms://profile/${userId}`;

    // 2. Try to redirect the mobile browser to the app
    window.location.href = appDeepLink;

    // 3. Fallback: If the app doesn't open in 2.5 seconds
    const timer = setTimeout(() => {
      console.log("App not installed. User remains on browser fallback.");
    }, 2500);

    return () => clearTimeout(timer);
  }, [userId]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontWeight: 900, letterSpacing: -1 }}>OPENFORMS</h1>
        <p style={{ color: '#888', marginTop: 10 }}>Redirecting to app...</p>
        
        {userId ? (
          <a 
            href={`openforms://profile/${userId}`} 
            style={{ marginTop: 20, display: 'inline-block', backgroundColor: '#000', color: '#fff', padding: '12px 24px', textDecoration: 'none', fontWeight: 'bold' }}
          >
            OPEN IN APP
          </a>
        ) : (
          <p style={{ color: '#FF3B30', marginTop: 20, fontSize: 13, fontWeight: 'bold' }}>
            ERROR: MISSING USER ID
          </p>
        )}
      </div>
    </div>
  );
}

// Next.js App Router requires any component using useSearchParams to be wrapped in Suspense
export default function ProfileRedirect() {
  return (
    <Suspense fallback={
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>Loading...</p>
      </div>
    }>
      <ProfileRedirectContent />
    </Suspense>
  );
}