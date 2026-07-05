"use client"; // Required for client-side hooks and redirects

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ProfileRedirectContent() {
  const searchParams = useSearchParams();
  const userId = searchParams.get('userId'); 
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.raahim2.openforms";
  const appDeepLink = `openforms://profile/${userId}`;
  const appLogoUrl = "https://lh3.googleusercontent.com/Yj_w1vQ-ABY4dOMtF0qJ0ePUIi9Tb7TM-XvgIGFnwPAdbRHY2p_NujLumYI68vHVYBofA6zd5281JzJWWi60Oh0";

  useEffect(() => {
    if (!userId) return;

    // 1. Attempt to open the app deep link
    window.location.href = appDeepLink;

    // 2. Fallback redirect after 2.5 seconds (matching the visual progress bar duration)
    const timer = setTimeout(() => {
      if (!document.hidden) {
        window.location.href = playStoreUrl;
      }
    }, 2500);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timer);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [userId, appDeepLink]);

  return (
    <div style={styles.container}>
      {/* Keyframe animations for the redirect bar and glow effects */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progressFill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes softPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }
      `}} />

      {/* Decorative background glow */}
      <div style={styles.glowOverlay} />

      <div style={styles.wrapper}>
        {/* App Logo with clean border and shadow */}
        <div style={styles.logoWrapper}>
          <img 
            src={appLogoUrl} 
            alt="OpenForms Logo" 
            style={styles.logo}
          />
        </div>

        {userId ? (
          <>
            <h1 style={styles.title}>Opening OpenForms</h1>
            <p style={styles.subtitle}>Connecting you to the mobile app...</p>

            {/* Intuitive linear progress bar (2.5 second duration) */}
            <div style={styles.progressContainer}>
              <div style={{
                ...styles.progressBar,
                animation: 'progressFill 2.5s linear forwards'
              }} />
            </div>

            <div style={styles.divider} />

            <p style={styles.hint}>
              If the app doesn't launch automatically, use the options below.
            </p>

            <div style={styles.buttonGroup}>
              <a href={appDeepLink} style={styles.primaryButton}>
                Open App Now
              </a>
              <a href={playStoreUrl} style={styles.secondaryButton}>
                Install from Play Store
              </a>
            </div>
          </>
        ) : (
          <div style={styles.errorWrapper}>
            <div style={styles.errorIconContainer}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h2 style={styles.errorTitle}>Invalid Link</h2>
            <p style={styles.errorText}>
              A valid User ID is required to redirect. Please check your link and try again.
            </p>
          </div>
        )}
      </div>

      <div style={styles.footer}>
        <p>© OpenForms</p>
      </div>
    </div>
  );
}

export default function ProfileRedirect() {
  return (
    <Suspense fallback={
      <div style={styles.container}>
        <div style={styles.loaderSpinner} />
      </div>
    }>
      <ProfileRedirectContent />
    </Suspense>
  );
}

const styles = {
  container: {
    position: 'relative' ,
    display: 'flex',
    flexDirection: 'column' ,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#050507', // Very deep slate/black
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    padding: '24px',
    boxSizing: 'border-box' ,
    overflow: 'hidden',
  },
  glowOverlay: {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(0,0,0,0) 70%)',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none' ,
    zIndex: 1,
  },
  wrapper: {
    position: 'relative' ,
    zIndex: 2,
    width: '100%',
    maxWidth: '380px',
    textAlign: 'center' ,
  },
  logoWrapper: {
    display: 'inline-block',
    width: '84px',
    height: '84px',
    borderRadius: '20px',
    backgroundColor: '#121214',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
    padding: '2px',
    marginBottom: '24px',
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' ,
    borderRadius: '18px',
  },
  title: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#f4f4f5',
    margin: '0 0 6px 0',
    letterSpacing: '-0.025em',
  },
  subtitle: {
    fontSize: '14px',
    color: '#a1a1aa',
    margin: '0 0 24px 0',
  },
  progressContainer: {
    width: '140px',
    height: '4px',
    backgroundColor: '#18181b',
    borderRadius: '2px',
    margin: '0 auto 28px auto',
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#6366f1', // Indigo accent representing redirect load
    borderRadius: '2px',
    width: '0%',
  },
  divider: {
    height: '1px',
    backgroundColor: '#18181b',
    width: '100%',
    margin: '24px 0',
  },
  hint: {
    fontSize: '12px',
    color: '#71717a',
    lineHeight: '1.5',
    margin: '0 0 20px 0',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column' ,
    gap: '10px',
  },
  primaryButton: {
    display: 'block',
    backgroundColor: '#6366f1',
    color: '#ffffff',
    padding: '12px 20px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '14px',
    textAlign: 'center' ,
    transition: 'background-color 0.15s ease',
  },
  secondaryButton: {
    display: 'block',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    color: '#e4e4e7',
    padding: '11px 20px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '13px',
    textAlign: 'center' ,
    border: '1px solid rgba(255, 255, 255, 0.08)',
    transition: 'background-color 0.15s ease',
  },
  errorWrapper: {
    backgroundColor: 'rgba(239, 68, 68, 0.03)',
    border: '1px solid rgba(239, 68, 68, 0.15)',
    borderRadius: '16px',
    padding: '24px',
    marginTop: '8px',
  },
  errorIconContainer: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    marginBottom: '14px',
  },
  errorTitle: {
    fontSize: '16px',
    color: '#ef4444',
    fontWeight: 600,
    margin: '0 0 6px 0',
  },
  errorText: {
    fontSize: '13px',
    color: '#a1a1aa',
    lineHeight: '1.5',
    margin: 0,
  },
  footer: {
    position: 'absolute' ,
    bottom: '24px',
    fontSize: '11px',
    color: '#3f3f46',
    zIndex: 2,
  },
  loaderSpinner: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: '2px solid rgba(255, 255, 255, 0.08)',
    borderTopColor: '#6366f1',
    animation: 'spin 0.8s linear infinite',
  }
};