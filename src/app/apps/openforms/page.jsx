"use client";

import React, { useState } from 'react';
import Navbar from '@/components/commen/Navbar';
import Footer from '@/components/commen/Footer';

export default function OpenFormsLanding() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.raahim2.openforms";
  const appLogoUrl = "https://lh3.googleusercontent.com/Yj_w1vQ-ABY4dOMtF0qJ0ePUIi9Tb7TM-XvgIGFnwPAdbRHY2p_NujLumYI68vHVYBofA6zd5281JzJWWi60Oh0";

  // 1. Simulator State
  const [fields, setFields] = useState([
    { id: '1', type: 'text', label: 'What is your full name?', placeholder: 'e.g., Alex Johnson' },
    { id: '2', type: 'rating', label: 'Rate your experience with us' },
  ]);

  const addField = (type) => {
    if (fields.length >= 4) return; // Prevents overflow on the simulated device
    const newField = {
      id: Date.now().toString(),
      type,
      label: type === 'text' 
        ? 'New Text Field' 
        : type === 'rating' 
        ? 'Rate this item' 
        : 'Do you agree to terms?',
      placeholder: 'Type your answer...'
    };
    setFields([...fields, newField]);
  };

  const removeField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  };

  // 2. Use Cases Tabs State
  const [activeTab, setActiveTab] = useState('feedback');
  const useCaseTemplates = {
    feedback: {
      title: "Customer Satisfaction",
      subtitle: "Collect opinions on features, support interactions, or overall product satisfaction instantly.",
      badge: "Customer Success",
      fields: ["Overal Rating", "Written Testimonial", "Contact Information"]
    },
    rsvp: {
      title: "Event RSVP & Planning",
      subtitle: "Gather attendee headcounts, food preferences, and confirmation details smoothly.",
      badge: "Community & Events",
      fields: ["Attendance Toggle", "Guest Count", "Dietary Restrictions"]
    },
    leads: {
      title: "Lead Generation",
      subtitle: "Acquire prospects directly at events or from your bio links using mobile-friendly setups.",
      badge: "Marketing",
      fields: ["Full Name", "Work Email Address", "Budget Questionnaire"]
    }
  };

  // 3. FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    {
      q: "Does OpenForms work offline?",
      a: "Yes. OpenForms allows you to fill out and draft form structures without network connectivity. Your response data queues locally on your mobile device and synchronizes as soon as you connect back to the internet."
    },
    {
      q: "How do I export the data I collect?",
      a: "From the app interface, you can navigate to any active form dashboard and instantly export all accumulated records directly into structured CSV or Microsoft Excel sheets."
    },
    {
      q: "Are the forms mobile-responsive?",
      a: "Our entire ecosystem is mobile-first. Forms display beautifully on any viewport size, loading quickly even on slow, mobile network speeds."
    }
  ];

  return (
    <div style={styles.pageContainer}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        .grid-bg {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .builder-btn {
          transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }
        .builder-btn:hover {
          background-color: rgba(99, 102, 241, 0.1);
          border-color: rgba(99, 102, 241, 0.4);
          color: #ffffff;
        }
        .glow-card {
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }
        .glow-card:hover {
          transform: translateY(-2px);
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.08);
        }
        .nav-btn {
          transition: transform 0.1s ease, filter 0.15s ease;
        }
        .nav-btn:hover {
          filter: brightness(1.1);
        }
        .nav-btn:active {
          transform: scale(0.98);
        }
        .tab-btn {
          transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }
        .faq-header {
          transition: background-color 0.2s ease;
        }
        .faq-header:hover {
          background-color: rgba(255, 255, 255, 0.02);
        }
      `}} />

      {/* Render the Navbar */}
      <Navbar />

      <main style={styles.mainContent}>
        {/* Background Radial Glow Effects */}
        <div style={{ ...styles.backgroundGlow, top: '5%', left: '10%', animation: 'pulseGlow 12s infinite ease-in-out' }} />
        <div style={{ ...styles.backgroundGlow, top: '45%', right: '5%', animation: 'pulseGlow 9s infinite ease-in-out' }} />
        <div style={{ ...styles.backgroundGlow, top: '75%', left: '15%', animation: 'pulseGlow 15s infinite ease-in-out' }} />

        {/* Global Grid Overlay for unique SaaS aesthetic */}
        <div className="grid-bg" style={styles.gridBgOverlay} />

        {/* 1. HERO SECTION & LIVE FORM BUILDER SIMULATOR */}
        <section style={styles.heroSection}>
          <div style={styles.heroLeft}>
            <div style={styles.badge}>
              <img src={appLogoUrl} alt="OpenForms logo" style={styles.badgeLogo} />
              <span style={styles.badgeText}>Interactive Experience</span>
            </div>

            <h1 style={styles.heroTitle}>
              Build your custom forms <br />
              <span style={styles.gradientText}>directly on the go.</span>
            </h1>

            <p style={styles.heroSubtitle}>
              OpenForms empowers you with a simple, robust interface to configure and scale form data collection directly on mobile devices. Fast, native, and reliable.
            </p>

            {/* Simulated interactive controller */}
            <div style={styles.simulatorControlCard}>
              <p style={styles.controlCardTitle}>Form Simulator Tools</p>
              <p style={styles.controlCardSub}>Experiment with dynamic components inside the mobile mockup:</p>
              
              <div style={styles.builderButtonGroup}>
                <button onClick={() => addField('text')} className="builder-btn" style={styles.builderActionBtn}>
                  + Text Question
                </button>
                <button onClick={() => addField('rating')} className="builder-btn" style={styles.builderActionBtn}>
                  + Rating Scale
                </button>
                <button onClick={() => addField('toggle')} className="builder-btn" style={styles.builderActionBtn}>
                  + Yes/No Toggle
                </button>
              </div>

              {fields.length >= 4 && (
                <p style={styles.limitText}>Mockup preview limit reached for clean layout.</p>
              )}
            </div>

            <div style={styles.heroActionGroup}>
              <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="nav-btn" style={styles.primaryButton}>
                Download Mobile App
              </a>
              <a href="#features" style={styles.secondaryButton}>
                See How It Works
              </a>
            </div>
          </div>

          <div style={styles.heroRight}>
            <div style={{ ...styles.deviceFrame, animation: 'float 5s ease-in-out infinite' }}>
              <div style={styles.deviceSpeaker} />
              
              <div style={styles.deviceScreen}>
                {/* Header of Simulated App */}
                <div style={styles.appHeader}>
                  <img src={appLogoUrl} alt="App Icon" style={styles.appHeaderIcon} />
                  <div>
                    <p style={styles.appHeaderTitle}>OpenForms Builder</p>
                    <p style={styles.appHeaderStatus}>Active preview mode</p>
                  </div>
                </div>

                {/* Simulated Form Body */}
                <div style={styles.appBody}>
                  {fields.length === 0 ? (
                    <div style={styles.emptySimulatorState}>
                      <p style={styles.emptyStateText}>Form is currently empty.</p>
                      <p style={styles.emptyStateSub}>Click simulator tools on the left to customize fields!</p>
                    </div>
                  ) : (
                    fields.map((field) => (
                      <div key={field.id} style={styles.simFieldCard}>
                        <div style={styles.simFieldHeader}>
                          <span style={styles.simFieldBadge}>{field.type.toUpperCase()}</span>
                          <button onClick={() => removeField(field.id)} style={styles.simRemoveBtn}>✕</button>
                        </div>

                        <p style={styles.simFieldLabel}>{field.label}</p>

                        {field.type === 'text' && (
                          <input type="text" disabled placeholder={field.placeholder} style={styles.simInput} />
                        )}

                        {field.type === 'rating' && (
                          <div style={styles.simRatingGroup}>
                            {[1, 2, 3, 4, 5].map((val) => (
                              <div key={val} style={styles.simRatingCircle}>{val}</div>
                            ))}
                          </div>
                        )}

                        {field.type === 'toggle' && (
                          <div style={styles.simToggleWrapper}>
                            <div style={styles.simToggleTrack}>
                              <div style={styles.simToggleHandle} />
                            </div>
                            <span style={styles.simToggleText}>Toggle response state</span>
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>

                {/* Simulated App Submit Bar */}
                <div style={styles.appFooter}>
                  <div style={styles.appSubmitButton}>Submit Collected Data</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. STATS & PROOF STRIP */}
        <section style={styles.statsSection}>
          <div style={styles.statsWrapper}>
            <div style={styles.statBox}>
              <p style={styles.statValue}>100%</p>
              <p style={styles.statLabel}>Ad-Free Platform</p>
            </div>
            <div style={styles.statDivider} />
            <div style={styles.statBox}>
              <p style={styles.statValue}>100ms</p>
              <p style={styles.statLabel}>Form Loading Speeds</p>
            </div>
            <div style={styles.statDivider} />
            <div style={styles.statBox}>
              <p style={styles.statValue}>Real-Time</p>
              <p style={styles.statLabel}>Data Synchronization</p>
            </div>
          </div>
        </section>

        {/* 3. CORE BENEFITS SECTION */}
        <section id="features" style={styles.benefitsSection}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Engineered for effortless form setups</h2>
            <p style={styles.sectionSubtitle}>
              OpenForms transitions standard physical paperwork processes into digital layouts optimized directly for portable device displays.
            </p>
          </div>

          <div style={styles.benefitsGrid}>
            <div className="glow-card" style={styles.benefitCard}>
              <div style={styles.benefitIconBox}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 style={styles.benefitCardTitle}>Offline Resilience</h3>
              <p style={styles.benefitCardDesc}>
                Collect crucial feedback in remote areas without internet coverage. Local logs sync back safely once a signal is restored.
              </p>
            </div>

            <div className="glow-card" style={styles.benefitCard}>
              <div style={styles.benefitIconBox}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <h3 style={styles.benefitCardTitle}>Highly Interactive Layouts</h3>
              <p style={styles.benefitCardDesc}>
                Create an inviting submission flow with clean numeric selectors, toggle boxes, and direct text interfaces.
              </p>
            </div>

            <div className="glow-card" style={styles.benefitCard}>
              <div style={styles.benefitIconBox}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 style={styles.benefitCardTitle}>Completely Free Base Features</h3>
              <p style={styles.benefitCardDesc}>
                Set up basic collection tasks, create active custom forms, and track individual records without paying unnecessary software licensing fees.
              </p>
            </div>
          </div>
        </section>

        {/* 4. DYNAMIC USE CASES / TEMPLATE TOGGLER */}
        <section style={styles.useCasesSection}>
          <div style={styles.useCasesWrapper}>
            <div style={styles.useCasesLeft}>
              <h2 style={styles.useCasesTitle}>Versatility across several use cases</h2>
              <p style={styles.useCasesDesc}>
                Configure tailored data capture channels matching the precise needs of your project, department, or business vertical.
              </p>

              {/* Tab Toggles */}
              <div style={styles.tabContainer}>
                {['feedback', 'rsvp', 'leads'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="tab-btn"
                    style={{
                      ...styles.tabButton,
                      borderColor: activeTab === tab ? '#6366f1' : 'rgba(255, 255, 255, 0.05)',
                      backgroundColor: activeTab === tab ? 'rgba(99, 102, 241, 0.06)' : 'transparent',
                      color: activeTab === tab ? '#ffffff' : '#71717a'
                    }}
                  >
                    {tab === 'feedback' ? 'Feedback Surveys' : tab === 'rsvp' ? 'RSVP Planners' : 'Lead Gen Forms'}
                  </button>
                ))}
              </div>
            </div>

            <div style={styles.useCasesRight}>
              <div style={styles.templateDetailsCard}>
                <span style={styles.templateBadge}>{useCaseTemplates[activeTab].badge}</span>
                <h3 style={styles.templateTitle}>{useCaseTemplates[activeTab].title}</h3>
                <p style={styles.templateSubtitle}>{useCaseTemplates[activeTab].subtitle}</p>
                
                <div style={styles.templateFieldsHeader}>Recommended components:</div>
                <div style={styles.templateFieldsList}>
                  {useCaseTemplates[activeTab].fields.map((f, i) => (
                    <div key={i} style={styles.templateFieldTag}>
                      <span style={{ color: '#6366f1', marginRight: '6px' }}>✓</span> {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. INTERACTIVE FAQ ACCORDION */}
        <section style={styles.faqSection}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p style={styles.sectionSubtitle}>Get quick answers regarding structural functions and setup tools.</p>
          </div>

          <div style={styles.faqList}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} style={styles.faqItem}>
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="faq-header"
                    style={styles.faqButton}
                  >
                    <span style={styles.faqQuestion}>{faq.q}</span>
                    <span style={{ 
                      color: isOpen ? '#6366f1' : '#71717a', 
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease, color 0.2s ease',
                      fontSize: '20px'
                    }}>+</span>
                  </button>

                  <div style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.25s ease, opacity 0.2s ease',
                    padding: isOpen ? '0 20px 20px 20px' : '0 20px'
                  }}>
                    <p style={styles.faqAnswer}>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. CONTEXTUAL CALL-TO-ACTION */}
        <section style={styles.ctaSection}>
          <div style={styles.ctaCard}>
            <div style={styles.ctaCardGlow} />
            <h2 style={styles.ctaTitle}>Upgrade your field logistics today</h2>
            <p style={styles.ctaSubtitle}>
              Download OpenForms to coordinate, configure, and execute precise form management from anywhere.
            </p>
            <div style={styles.ctaButtonGroup}>
              <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="nav-btn" style={styles.ctaPrimaryButton}>
                Download OpenForms
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Render the Footer */}
      <Footer />
    </div>
  );
}

const styles = {
  pageContainer: {
    backgroundColor: '#050507',
    color: '#e4e4e7',
    minHeight: '100vh',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  mainContent: {
    position: 'relative',
    flex: '1 0 auto',
    zIndex: 1,
  },
  gridBgOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    opacity: 0.65,
    pointerEvents: 'none',
  },
  backgroundGlow: {
    position: 'absolute',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, rgba(0,0,0,0) 70%)',
    pointerEvents: 'none',
    zIndex: -1,
  },
  // Hero Section
  heroSection: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '140px 24px 80px 24px',
    gap: '64px',
  },
  heroLeft: {
    flex: '1 1 500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(99, 102, 241, 0.08)',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    borderRadius: '99px',
    padding: '6px 14px 6px 8px',
    marginBottom: '20px',
  },
  badgeLogo: {
    width: '18px',
    height: '18px',
    borderRadius: '4px',
    objectFit: 'cover',
  },
  badgeText: {
    fontSize: '11px',
    fontWeight: 600,
    color: '#818cf8',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  },
  heroTitle: {
    fontSize: 'clamp(36px, 5vw, 54px)',
    fontWeight: 800,
    color: '#ffffff',
    lineHeight: 1.1,
    letterSpacing: '-0.03em',
    margin: '0 0 16px 0',
  },
  gradientText: {
    background: 'linear-gradient(to right, #a5b4fc, #6366f1)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    fontSize: '15px',
    lineHeight: 1.6,
    color: '#a1a1aa',
    maxWidth: '540px',
    margin: '0 0 32px 0',
  },
  // Simulator Card Tools
  simulatorControlCard: {
    backgroundColor: '#0d0d10',
    border: '1px solid #1c1c1f',
    borderRadius: '16px',
    padding: '20px',
    width: '100%',
    maxWidth: '480px',
    marginBottom: '32px',
    textAlign: 'left',
  },
  controlCardTitle: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#ffffff',
    margin: '0 0 4px 0',
  },
  controlCardSub: {
    fontSize: '12px',
    color: '#71717a',
    margin: '0 0 16px 0',
  },
  builderButtonGroup: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  builderActionBtn: {
    backgroundColor: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '8px',
    color: '#a1a1aa',
    padding: '8px 12px',
    fontSize: '12px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  limitText: {
    fontSize: '11px',
    color: '#f59e0b',
    marginTop: '12px',
    marginBottom: '0',
  },
  heroActionGroup: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  primaryButton: {
    backgroundColor: '#6366f1',
    color: '#ffffff',
    padding: '14px 28px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '14px',
    boxShadow: '0 4px 14px rgba(99, 102, 241, 0.2)',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#e4e4e7',
    padding: '14px 28px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '14px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
  },
  // Hero Right (Device Mockup)
  heroRight: {
    flex: '1 1 400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deviceFrame: {
    width: '100%',
    maxWidth: '300px',
    height: '560px',
    backgroundColor: '#111113',
    borderRadius: '36px',
    border: '6px solid #1f1f23',
    boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.7)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  deviceSpeaker: {
    width: '40px',
    height: '4px',
    backgroundColor: '#2e2e33',
    borderRadius: '2px',
    position: 'absolute',
    top: '12px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10,
  },
  deviceScreen: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '24px',
    position: 'relative',
    height: '100%',
  },
  appHeader: {
    padding: '16px',
    borderBottom: '1px solid #1c1c1f',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  appHeaderIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
  },
  appHeaderTitle: {
    fontSize: '12px',
    fontWeight: 700,
    color: '#ffffff',
    margin: 0,
  },
  appHeaderStatus: {
    fontSize: '10px',
    color: '#10b981',
    margin: 0,
  },
  appBody: {
    flex: 1,
    padding: '16px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  emptySimulatorState: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
  },
  emptyStateText: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#71717a',
    margin: '0 0 4px 0',
  },
  emptyStateSub: {
    fontSize: '11px',
    color: '#3f3f46',
    margin: 0,
  },
  simFieldCard: {
    backgroundColor: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '10px',
    padding: '12px',
    position: 'relative',
    textAlign: 'left',
  },
  simFieldHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '6px',
  },
  simFieldBadge: {
    fontSize: '8px',
    fontWeight: 700,
    color: '#818cf8',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    padding: '2px 6px',
    borderRadius: '4px',
  },
  simRemoveBtn: {
    background: 'none',
    border: 'none',
    color: '#71717a',
    fontSize: '10px',
    cursor: 'pointer',
    padding: '2px',
  },
  simFieldLabel: {
    fontSize: '12px',
    fontWeight: 600,
    color: '#e4e4e7',
    margin: '0 0 8px 0',
  },
  simInput: {
    width: '100%',
    backgroundColor: '#09090b',
    border: '1px solid #1c1c1f',
    borderRadius: '6px',
    padding: '8px',
    fontSize: '11px',
    color: '#71717a',
    boxSizing: 'border-box',
  },
  simRatingGroup: {
    display: 'flex',
    gap: '6px',
  },
  simRatingCircle: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#09090b',
    border: '1px solid #27272a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    color: '#a1a1aa',
  },
  simToggleWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  simToggleTrack: {
    width: '32px',
    height: '18px',
    backgroundColor: '#6366f1',
    borderRadius: '10px',
    position: 'relative',
  },
  simToggleHandle: {
    width: '14px',
    height: '14px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    position: 'absolute',
    top: '2px',
    right: '2px',
  },
  simToggleText: {
    fontSize: '10px',
    color: '#71717a',
  },
  appFooter: {
    padding: '16px',
    borderTop: '1px solid #1c1c1f',
  },
  appSubmitButton: {
    backgroundColor: '#6366f1',
    color: '#ffffff',
    borderRadius: '8px',
    padding: '10px',
    fontSize: '12px',
    fontWeight: 600,
    textAlign: 'center',
  },
  // Stats Section
  statsSection: {
    backgroundColor: '#09090b',
    borderTop: '1px solid #1c1c1f',
    borderBottom: '1px solid #1c1c1f',
    padding: '40px 24px',
  },
  statsWrapper: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '32px',
  },
  statBox: {
    flex: '1 1 200px',
    textAlign: 'center',
  },
  statValue: {
    fontSize: '32px',
    fontWeight: 800,
    color: '#ffffff',
    margin: '0 0 4px 0',
    letterSpacing: '-0.02em',
  },
  statLabel: {
    fontSize: '12px',
    color: '#71717a',
    margin: 0,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  statDivider: {
    width: '1px',
    height: '40px',
    backgroundColor: '#1c1c1f',
  },
  // Benefits Section
  benefitsSection: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '100px 24px',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '64px',
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: 800,
    color: '#ffffff',
    margin: '0 0 12px 0',
    letterSpacing: '-0.025em',
  },
  sectionSubtitle: {
    fontSize: '15px',
    color: '#a1a1aa',
    maxWidth: '560px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
  },
  benefitCard: {
    backgroundColor: '#0c0c0e',
    border: '1px solid #1c1c1f',
    borderRadius: '20px',
    padding: '40px 32px',
    textAlign: 'left',
  },
  benefitIconBox: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    backgroundColor: 'rgba(99, 102, 241, 0.08)',
    border: '1px solid rgba(99, 102, 241, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
  },
  benefitCardTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#ffffff',
    margin: '0 0 12px 0',
  },
  benefitCardDesc: {
    fontSize: '13px',
    color: '#a1a1aa',
    lineHeight: 1.6,
    margin: 0,
  },
  // Use Cases / Tabs Section
  useCasesSection: {
    backgroundColor: '#09090b',
    borderTop: '1px solid #1c1c1f',
    borderBottom: '1px solid #1c1c1f',
    padding: '100px 24px',
  },
  useCasesWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '64px',
    alignItems: 'center',
  },
  useCasesLeft: {
    flex: '1 1 500px',
    textAlign: 'left',
  },
  useCasesTitle: {
    fontSize: '28px',
    fontWeight: 800,
    color: '#ffffff',
    margin: '0 0 16px 0',
    letterSpacing: '-0.02em',
  },
  useCasesDesc: {
    fontSize: '15px',
    color: '#a1a1aa',
    lineHeight: 1.6,
    margin: '0 0 32px 0',
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '320px',
  },
  tabButton: {
    padding: '14px 20px',
    borderRadius: '10px',
    border: '1px solid',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    textAlign: 'left',
  },
  useCasesRight: {
    flex: '1 1 400px',
    display: 'flex',
    justifyContent: 'center',
  },
  templateDetailsCard: {
    width: '100%',
    maxWidth: '440px',
    backgroundColor: '#0d0d10',
    border: '1px solid #1c1c1f',
    borderRadius: '24px',
    padding: '36px',
    textAlign: 'left',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
  },
  templateBadge: {
    fontSize: '10px',
    fontWeight: 700,
    color: '#a5b4fc',
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    border: '1px solid rgba(99, 102, 241, 0.2)',
    padding: '4px 10px',
    borderRadius: '99px',
    display: 'inline-block',
    marginBottom: '20px',
  },
  templateTitle: {
    fontSize: '22px',
    fontWeight: 700,
    color: '#ffffff',
    margin: '0 0 12px 0',
  },
  templateSubtitle: {
    fontSize: '13px',
    color: '#a1a1aa',
    lineHeight: 1.6,
    margin: '0 0 24px 0',
  },
  templateFieldsHeader: {
    fontSize: '11px',
    fontWeight: 700,
    color: '#71717a',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '12px',
  },
  templateFieldsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  templateFieldTag: {
    fontSize: '13px',
    color: '#e4e4e7',
    display: 'flex',
    alignItems: 'center',
  },
  // FAQ Section
  faqSection: {
    maxWidth: '760px',
    margin: '0 auto',
    padding: '100px 24px',
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    textAlign: 'left',
  },
  faqItem: {
    backgroundColor: '#0d0d10',
    border: '1px solid #1c1c1f',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  faqButton: {
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    textAlign: 'left',
  },
  faqQuestion: {
    fontSize: '15px',
    fontWeight: 600,
    color: '#ffffff',
  },
  faqAnswer: {
    fontSize: '13px',
    color: '#a1a1aa',
    lineHeight: 1.6,
    margin: 0,
  },
  // Call to Action
  ctaSection: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 24px 120px 24px',
  },
  ctaCard: {
    position: 'relative',
    backgroundColor: '#0c0c0e',
    border: '1px solid #1c1c1f',
    borderRadius: '28px',
    padding: '80px 40px',
    textAlign: 'center',
    overflow: 'hidden',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5)',
  },
  ctaCardGlow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(0,0,0,0) 70%)',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
  },
  ctaTitle: {
    fontSize: '32px',
    fontWeight: 800,
    color: '#ffffff',
    margin: '0 0 16px 0',
    letterSpacing: '-0.025em',
  },
  ctaSubtitle: {
    fontSize: '15px',
    color: '#a1a1aa',
    maxWidth: '520px',
    margin: '0 auto 36px auto',
    lineHeight: 1.6,
  },
  ctaButtonGroup: {
    display: 'flex',
    justifyContent: 'center',
  },
  ctaPrimaryButton: {
    backgroundColor: '#6366f1',
    color: '#ffffff',
    padding: '16px 36px',
    borderRadius: '10px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '14px',
    boxShadow: '0 4px 14px rgba(99, 102, 241, 0.25)',
  }
};