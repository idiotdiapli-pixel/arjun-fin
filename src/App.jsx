import React, { useState } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedUdyam, setCopiedUdyam] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    origin: '',
    destination: '',
    message: ''
  });

  const businessData = {
    name: 'ARJUN LOGISTIC',
    tagline: 'Reliable Road Freight Transport Services',
    udyamNumber: 'UDYAM-BR-01-0059572',
    classification: 'Micro',
    activity: 'Services',
    category: 'Road Freight Transport',
    address: 'Kalahi Bari, Ward No. 6, Behari, Block A, Araria, Bihar – 854329, India',
    phone: '+91 7865667778',
    phoneClean: '+917865667778',
    email: 'info@arjunlogistic.shop',
    registrationDate: '25 August 2026',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kalahi+Bari+Ward+No+6+Behari+Block+A+Araria+Bihar+854329+India'
  };

  const handleCopyUdyam = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(businessData.udyamNumber);
      setCopiedUdyam(true);
      setTimeout(() => setCopiedUdyam(false), 2500);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div>
      {/* 1. Header with Navigation */}
      <header className="site-header">
        <div className="container">
          <div className="header-inner">
            <a href="#home" className="brand-logo" aria-label="ARJUN LOGISTIC Home">
              <div className="brand-icon-box">
                {/* Truck SVG Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                  <path d="M15 18H9" />
                  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                  <circle cx="17" cy="18" r="2" />
                  <circle cx="7" cy="18" r="2" />
                </svg>
              </div>
              <div className="brand-text">
                <span className="brand-title">{businessData.name}</span>
                <span className="brand-subtitle">MSME Registered</span>
              </div>
            </a>

            <nav>
              <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                <li><a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
                <li><a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
                <li><a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
                <li><a href="#udyam" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Udyam Certificate</a></li>
                <li><a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact Us</a></li>
              </ul>
            </nav>

            <div className="header-cta-group">
              <a href={`tel:${businessData.phoneClean}`} className="btn-header-call">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>{businessData.phone}</span>
              </a>
            </div>

            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* 2. Hero Section */}
        <section id="home" className="hero-section">
          <div className="container">
            <div className="hero-grid">
              <div>
                <div className="hero-badge">
                  <span className="hero-badge-pulse"></span>
                  <span>Registered Micro Enterprise &bull; Govt. of India MSME</span>
                </div>
                <h1 className="hero-headline">
                  Reliable <span>Road Freight</span> Transport Services
                </h1>
                <p className="hero-subhead">
                  <strong>{businessData.name}</strong> provides dependable, scheduled, and dedicated road freight transport solutions. Based in Araria, Bihar, we connect supply chains with professional road haulage and consignment transit.
                </p>

                <div className="hero-actions">
                  <a href="#contact" className="btn-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>Contact Us</span>
                  </a>
                  <a href="#udyam" className="btn-secondary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    <span>Verify Udyam Certificate</span>
                  </a>
                </div>

                <div className="hero-highlights-strip">
                  <div className="hero-stat-item">
                    <span className="hero-stat-title">Activity Type</span>
                    <span className="hero-stat-value">{businessData.activity}</span>
                  </div>
                  <div className="hero-stat-item">
                    <span className="hero-stat-title">Enterprise Class</span>
                    <span className="hero-stat-value">{businessData.classification}</span>
                  </div>
                  <div className="hero-stat-item">
                    <span className="hero-stat-title">Category</span>
                    <span className="hero-stat-value">{businessData.category}</span>
                  </div>
                </div>
              </div>

              {/* Verified Certificate Card */}
              <div className="hero-card">
                <div className="hero-card-header">
                  <div className="card-msme-label">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <div>
                      <h4>Official MSME Registration</h4>
                      <p>Ministry of Micro, Small & Medium Enterprises</p>
                    </div>
                  </div>
                  <span className="verified-pill">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Verified
                  </span>
                </div>

                <div className="hero-card-details">
                  <div className="hero-detail-row">
                    <span className="hero-detail-key">Enterprise Name:</span>
                    <span className="hero-detail-val">{businessData.name}</span>
                  </div>
                  <div className="hero-detail-row">
                    <span className="hero-detail-key">Udyam Reg. No:</span>
                    <span className="hero-detail-val mono">{businessData.udyamNumber}</span>
                  </div>
                  <div className="hero-detail-row">
                    <span className="hero-detail-key">Classification:</span>
                    <span className="hero-detail-val">{businessData.classification} Enterprise</span>
                  </div>
                  <div className="hero-detail-row">
                    <span className="hero-detail-key">Service Category:</span>
                    <span className="hero-detail-val">{businessData.category}</span>
                  </div>
                  <div className="hero-detail-row">
                    <span className="hero-detail-key">Date of Registration:</span>
                    <span className="hero-detail-val">{businessData.registrationDate}</span>
                  </div>
                  <div className="hero-detail-row">
                    <span className="hero-detail-key">State & District:</span>
                    <span className="hero-detail-val">Araria, Bihar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. About Us Section */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">About The Enterprise</span>
              <h2 className="section-title">Committed to Reliable Road Transport</h2>
              <p className="section-desc">
                Operating with transparent standards, official government registration, and dedicated freight solutions.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-content-left">
                <p className="about-paragraph">
                  <strong>{businessData.name}</strong> is an officially registered Micro Enterprise under the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India, bearing Udyam Registration Number <strong>{businessData.udyamNumber}</strong>.
                </p>
                <p className="about-paragraph">
                  Based in Araria, Bihar, our core business activity is services within the <strong>Road Freight Transport</strong> sector. We facilitate the direct transit of goods, commercial cargo, and industrial materials across road networks, serving businesses with accountability, adherence to schedules, and safe carriage of freight.
                </p>

                <div className="about-pillars-grid">
                  <div className="about-pillar-card">
                    <div className="pillar-icon-box">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <h4>Punctual Transit</h4>
                    <p>Coordinated route planning and prompt dispatch for road freight delivery schedules.</p>
                  </div>

                  <div className="about-pillar-card">
                    <div className="pillar-icon-box">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </div>
                    <h4>Safe Cargo Handling</h4>
                    <p>Focus on secure loading, attentive carriage, and proper protection of transported consignments.</p>
                  </div>

                  <div className="about-pillar-card">
                    <div className="pillar-icon-box">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                        <path d="M15 18H9" />
                        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                        <circle cx="17" cy="18" r="2" />
                        <circle cx="7" cy="18" r="2" />
                      </svg>
                    </div>
                    <h4>Regional Connectivity</h4>
                    <p>Strategic location in Araria, Bihar, supporting freight distribution throughout the region.</p>
                  </div>

                  <div className="about-pillar-card">
                    <div className="pillar-icon-box">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <line x1="6" y1="8" x2="6" y2="8" />
                        <line x1="10" y1="8" x2="18" y2="8" />
                        <line x1="6" y1="12" x2="6" y2="12" />
                        <line x1="10" y1="12" x2="18" y2="12" />
                        <line x1="6" y1="16" x2="6" y2="16" />
                        <line x1="10" y1="16" x2="18" y2="16" />
                      </svg>
                    </div>
                    <h4>Regulatory Compliance</h4>
                    <p>Fully compliant with registered MSME standards under the Government of India.</p>
                  </div>
                </div>
              </div>

              {/* Summary panel */}
              <div className="about-summary-panel">
                <h3 className="summary-heading">Enterprise Overview</h3>
                <ul className="summary-facts-list">
                  <li className="summary-fact-item">
                    <span className="fact-dot"></span>
                    <div>
                      <h5>Entity Name</h5>
                      <p>{businessData.name}</p>
                    </div>
                  </li>
                  <li className="summary-fact-item">
                    <span className="fact-dot"></span>
                    <div>
                      <h5>Classification Category</h5>
                      <p>Micro Enterprise (Services)</p>
                    </div>
                  </li>
                  <li className="summary-fact-item">
                    <span className="fact-dot"></span>
                    <div>
                      <h5>Primary Service</h5>
                      <p>Road Freight Transport</p>
                    </div>
                  </li>
                  <li className="summary-fact-item">
                    <span className="fact-dot"></span>
                    <div>
                      <h5>Operational Base</h5>
                      <p>Araria, Bihar &ndash; 854329, India</p>
                    </div>
                  </li>
                  <li className="summary-fact-item">
                    <span className="fact-dot"></span>
                    <div>
                      <h5>Government Verification</h5>
                      <p>Udyam Registration Portal (Govt. of India)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Services Section */}
        <section id="services" className="services-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">What We Do</span>
              <h2 className="section-title">Road Freight Transport Services</h2>
              <p className="section-desc">
                Focusing strictly on our core registered service capability: dependable, direct road freight haulage and consignment transit.
              </p>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon-wrap">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                    <path d="M15 18H9" />
                    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                    <circle cx="17" cy="18" r="2" />
                    <circle cx="7" cy="18" r="2" />
                  </svg>
                </div>
                <h3 className="service-title">Full & Partial Truckload Road Freight</h3>
                <p className="service-text">
                  Direct transport of full truckload (FTL) and part truckload (PTL) consignments via reliable road vehicles, accommodating diverse shipment sizes.
                </p>
                <ul className="service-bullet-list">
                  <li className="service-bullet-item">
                    <svg className="bullet-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Direct Point-to-Point Road Haulage
                  </li>
                  <li className="service-bullet-item">
                    <svg className="bullet-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Commercial Cargo & Goods Movement
                  </li>
                  <li className="service-bullet-item">
                    <svg className="bullet-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Tailored Space for Diverse Cargo Sizes
                  </li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon-wrap orange">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="9" x2="20" y2="9" />
                    <line x1="4" y1="15" x2="20" y2="15" />
                    <line x1="10" y1="3" x2="8" y2="21" />
                    <line x1="16" y1="3" x2="14" y2="21" />
                  </svg>
                </div>
                <h3 className="service-title">Regional Route Transport</h3>
                <p className="service-text">
                  Systematic freight transit serving businesses across Bihar and connecting neighboring highway corridors for steady, predictable turnaround times.
                </p>
                <ul className="service-bullet-list">
                  <li className="service-bullet-item">
                    <svg className="bullet-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Highway & District Network Coverage
                  </li>
                  <li className="service-bullet-item">
                    <svg className="bullet-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Scheduled Transport Dispatches
                  </li>
                  <li className="service-bullet-item">
                    <svg className="bullet-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Araria and Bihar Regional Connectivity
                  </li>
                </ul>
              </div>

              <div className="service-card">
                <div className="service-icon-wrap">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                </div>
                <h3 className="service-title">Consignment & Cargo Coordination</h3>
                <p className="service-text">
                  Direct communication and coordination for freight pick-up, driver dispatch, transit verification, and safe handover at delivery destinations.
                </p>
                <ul className="service-bullet-list">
                  <li className="service-bullet-item">
                    <svg className="bullet-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Transparent Pick-up and Drop Coordination
                  </li>
                  <li className="service-bullet-item">
                    <svg className="bullet-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Direct Driver & Consignment Contact
                  </li>
                  <li className="service-bullet-item">
                    <svg className="bullet-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    Responsive Customer Inquiries
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Udyam Registration Section */}
        <section id="udyam" className="udyam-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Official Government Credential</span>
              <h2 className="section-title">Udyam Registration Certificate</h2>
              <p className="section-desc">
                Verified Micro Enterprise details registered under the Ministry of Micro, Small and Medium Enterprises, Government of India.
              </p>
            </div>

            <div className="certificate-card-wrapper">
              <div className="certificate-header-bar">
                <div className="cert-emblem-group">
                  <div className="cert-emblem-circle">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div className="cert-header-titles">
                    <h3>UDYAM REGISTRATION CERTIFICATE</h3>
                    <p>Ministry of Micro, Small and Medium Enterprises &bull; Government of India</p>
                  </div>
                </div>

                <div className="cert-badge-official">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Active Registration</span>
                </div>
              </div>

              <div className="certificate-body">
                <div className="cert-reg-callout">
                  <div className="callout-info-block">
                    <span className="callout-label">Official Udyam Registration Number</span>
                    <span className="callout-number">{businessData.udyamNumber}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyUdyam}
                    className="btn-copy-number"
                    title="Copy Udyam Registration Number"
                  >
                    {copiedUdyam ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="cert-details-grid">
                  <div className="cert-data-box">
                    <span className="cert-data-title">Enterprise Name</span>
                    <span className="cert-data-value">{businessData.name}</span>
                  </div>

                  <div className="cert-data-box">
                    <span className="cert-data-title">Enterprise Classification</span>
                    <span className="cert-data-value">{businessData.classification}</span>
                  </div>

                  <div className="cert-data-box">
                    <span className="cert-data-title">Major Business Activity</span>
                    <span className="cert-data-value">{businessData.activity}</span>
                  </div>

                  <div className="cert-data-box">
                    <span className="cert-data-title">Service Category</span>
                    <span className="cert-data-value">{businessData.category}</span>
                  </div>

                  <div className="cert-data-box">
                    <span className="cert-data-title">Date of Udyam Registration</span>
                    <span className="cert-data-value">{businessData.registrationDate}</span>
                  </div>

                  <div className="cert-data-box">
                    <span className="cert-data-title">Registered Jurisdiction</span>
                    <span className="cert-data-value">Araria, Bihar &ndash; 854329, India</span>
                  </div>
                </div>

                <div className="cert-footer-actions">
                  <div className="cert-verification-notice">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    <span>This certificate can be verified on the official Government of India portal.</span>
                  </div>

                  <a
                    href="https://udyamregistration.gov.in/Udyam_Verify.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-external-portal"
                  >
                    <span>Official Udyam Verification Portal</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Get in Touch</span>
              <h2 className="section-title">Contact ARJUN LOGISTIC</h2>
              <p className="section-desc">
                Reach out directly for freight bookings, transport inquiries, or route scheduling.
              </p>
            </div>

            <div className="contact-layout">
              {/* Contact Information Cards */}
              <div className="contact-cards-column">
                <div className="contact-info-card">
                  <div className="contact-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="contact-card-text">
                    <span className="contact-card-label">Telephone / Mobile</span>
                    <a href={`tel:${businessData.phoneClean}`} className="contact-card-value interactive">
                      {businessData.phone}
                    </a>
                    <span className="contact-card-desc">Direct call for immediate transport assistance</span>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="contact-card-text">
                    <span className="contact-card-label">Official Email</span>
                    <a href={`mailto:${businessData.email}`} className="contact-card-value interactive">
                      {businessData.email}
                    </a>
                    <span className="contact-card-desc">Send freight details, manifests, or inquiries</span>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-card-text">
                    <span className="contact-card-label">Registered Business Address</span>
                    <span className="contact-card-value">{businessData.address}</span>
                    <a
                      href={businessData.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-maps-action"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="contact-form-panel">
                <h3 className="form-panel-title">Freight Inquiry Form</h3>
                <p className="form-panel-desc">
                  Submit your consignment pickup and destination details to request freight service.
                </p>

                {formSubmitted ? (
                  <div className="form-success-alert">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <strong>Inquiry Submitted!</strong>
                      <p style={{ marginTop: '4px', fontSize: '0.85rem' }}>
                        Thank you, {formData.name || 'valued customer'}. You can also call us directly at {businessData.phone}.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Your Name / Organization</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="e.g. Rahul Sharma / ABC Traders"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Contact Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="e.g. +91 9876543210"
                        className="form-input"
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="origin">Origin / Pickup Location</label>
                        <input
                          type="text"
                          id="origin"
                          name="origin"
                          value={formData.origin}
                          onChange={handleFormChange}
                          placeholder="e.g. Araria / Purnia"
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="destination">Destination</label>
                        <input
                          type="text"
                          id="destination"
                          name="destination"
                          value={formData.destination}
                          onChange={handleFormChange}
                          placeholder="e.g. Patna / Siliguri"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Consignment / Cargo Description</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Please describe goods type, approximate weight, or preferred dispatch schedule..."
                        className="form-textarea"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-submit-inquiry">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      <span>Send Transport Inquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top-grid">
            <div className="footer-col-brand">
              <h3>{businessData.name}</h3>
              <p>
                Professional and reliable road freight transport services based in Araria, Bihar. Dedicated to safe, scheduled, and honest road carriage.
              </p>
              <div className="footer-msme-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Udyam Reg: {businessData.udyamNumber}</span>
              </div>
            </div>

            <div className="footer-col-nav">
              <h4>Quick Navigation</h4>
              <ul className="footer-nav-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Road Freight Services</a></li>
                <li><a href="#udyam">Udyam Registration</a></li>
                <li><a href="#contact">Contact Details</a></li>
              </ul>
            </div>

            <div className="footer-col-contact">
              <h4>Direct Contact</h4>
              <ul className="footer-contact-items">
                <li className="footer-contact-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <a href={`tel:${businessData.phoneClean}`}>{businessData.phone}</a>
                </li>
                <li className="footer-contact-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  <a href={`mailto:${businessData.email}`}>{businessData.email}</a>
                </li>
                <li className="footer-contact-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <span>{businessData.address}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>&copy; {new Date().getFullYear()} {businessData.name}. All rights reserved.</span>
            <span>Registered Micro Enterprise &bull; Govt. of India MSME</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
