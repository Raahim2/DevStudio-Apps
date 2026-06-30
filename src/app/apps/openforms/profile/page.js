"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProfileRedirect() {
  const router = useRouter();
  const { userId } = router.query;

  useEffect(() => {
    if (!userId) return;

    // 1. Construct your deep link
    const appDeepLink = `openforms://profile/${userId}`;

    // 2. Try to redirect the mobile browser to the app
    window.location.href = appDeepLink;

    // 3. Fallback: If the app doesn't open in 2.5 seconds, redirect to play store or show fallback UI
    const timer = setTimeout(() => {
      // You can redirect to Google Play Store link here if they don't have the app
      console.log("App not installed. Stay on website or go to store.");
    }, 2500);

    return () => clearTimeout(timer);
  }, [userId]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontWeight: 900 }}>OPENFORMS</h1>
        <p style={{ color: '#888', marginTop: 10 }}>Redirecting to app...</p>
        {/* Optional: Add a manual button just in case */}
        <a href={`openforms://profile/${userId}`} style={{ marginTop: 20, display: 'inline-block', backgroundColor: '#000', color: '#fff', padding: '12px 24px', textDecoration: 'none', fontWeight: 'bold' }}>
          OPEN IN APP
        </a>
      </div>
    </div>
  );
}