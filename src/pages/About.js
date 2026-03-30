import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <Navbar />

      <main className="about8">
        <section className="about8-hero" aria-label="About hero">
          <img className="about8-hero-img" src="/Images/about.jpg" alt="BR Solar about" />
          <div className="about8-hero-overlay" />
          <div className="about8-hero-glow about8-hero-glow-one" />
          <div className="about8-hero-glow about8-hero-glow-two" />

          <div className="about8-hero-content">
            <div className="about8-hero-top">
              <div className="about8-hero-pill">BR SOLAR</div>
              <div className="about8-hero-line" />
            </div>

            <h1 className="about8-hero-title">
              Powering a Brighter
              <span> Future With Solar</span>
            </h1>

            <p className="about8-hero-sub">
              Clean energy at your doorstep, solar solutions that are efficient, reliable, and built for long-term savings for homes, businesses, and modern lifestyles.
            </p>

            <div className="about8-hero-cta">
              <a className="about8-btn about8-btn-solid" href="/contact">
                Get a Free Consultation
              </a>
              <a className="about8-btn about8-btn-ghost" href="tel:+9173920789920">
                Call 73920 789920
              </a>
            </div>

            <div className="about8-hero-badges" aria-label="Service regions">
              <span className="about8-badge">Kurnool</span>
              <span className="about8-badge">Andhra Pradesh</span>
              <span className="about8-badge">Solar Solutions</span>
            </div>

            <div className="about8-hero-stats">
              <div className="about8-stat-card">
                <h3>Efficient</h3>
                <p>Smart solar systems designed for maximum output and lower power costs.</p>
              </div>
              <div className="about8-stat-card">
                <h3>Reliable</h3>
                <p>Durable installations built to perform consistently for years.</p>
              </div>
              <div className="about8-stat-card">
                <h3>Sustainable</h3>
                <p>Clean energy solutions that support a greener tomorrow.</p>
              </div>
            </div>
          </div>

          <div className="about8-floating-card">
            <div className="about8-floating-icon">☀</div>
            <div>
              <h4>Trusted Solar Partner</h4>
              <p>Affordable, future-ready energy for every space.</p>
            </div>
          </div>
        </section>



        <section className="about8-s1" aria-label="Who we are">
          <div className="about8-container">
            <div className="about8-s1-head">
              <div className="about8-s1-head-left">
                <div className="about8-s1-tag">Who We Are</div>
                <h2 className="about8-h2">
                  Solar solutions designed with care, precision, and lasting value
                </h2>
              </div>
              <p className="about8-s1-head-text">
                BR Solar delivers dependable solar solutions for homes, businesses, industries, and farms. We focus on smart planning, quality installation, and long-lasting performance that helps reduce electricity costs while building a cleaner future.
              </p>
            </div>

            <div className="about8-s1-grid">
              <div className="about8-s1-left">
                <div className="about8-s1-card about8-s1-intro">
                  <div className="about8-underline" />
                  <p className="about8-p">
                    From consultation to execution, we create practical solar systems that match real energy needs. Every project is shaped around efficiency, safety, clean finishing, and dependable performance for the long run.
                  </p>

                  <div className="about8-kpi">
                    <div className="about8-kpi-box">
                      <div className="about8-kpi-num">01</div>
                      <div className="about8-kpi-label">Smart planning</div>
                      <div className="about8-kpi-sub">Right system for every need</div>
                    </div>
                    <div className="about8-kpi-box">
                      <div className="about8-kpi-num">02</div>
                      <div className="about8-kpi-label">Clean installation</div>
                      <div className="about8-kpi-sub">Safe setup and neat finishing</div>
                    </div>
                    <div className="about8-kpi-box">
                      <div className="about8-kpi-num">03</div>
                      <div className="about8-kpi-label">Reliable savings</div>
                      <div className="about8-kpi-sub">Efficient systems that last</div>
                    </div>
                  </div>
                </div>

                <div className="about8-s1-contact-card">
                  <div className="about8-s1-contact-top">
                    <h3>Connect With BR Solar</h3>
                    <span>Quick support and consultation</span>
                  </div>

                  <div className="about8-info">
                    <div className="about8-info-row">
                      <div className="about8-info-icon">☎</div>
                      <div>
                        <div className="about8-info-label">Phone</div>
                        <a className="about8-info-val about8-link" href="tel:+9173920789920">
                          73920 789920
                        </a>
                      </div>
                    </div>

                    <div className="about8-info-row">
                      <div className="about8-info-icon">☎</div>
                      <div>
                        <div className="about8-info-label">Alternate Phone</div>
                        <a className="about8-info-val about8-link" href="tel:+917995050203">
                          7995050203
                        </a>
                      </div>
                    </div>

                    <div className="about8-info-row">
                      <div className="about8-info-icon">✉</div>
                      <div>
                        <div className="about8-info-label">Email</div>
                        <a className="about8-info-val about8-link" href="mailto:brsolar18@gmail.com">
                          brsolar18@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <a className="about8-s1-contact-btn" href="/contact">
                    Book a Free Site Visit
                  </a>
                </div>
              </div>

              <div className="about8-s1-right" aria-label="Work preview">
                <div className="about8-photo-stack">
                  <div className="about8-photo-frame">
                    <img src="/Images/about2.jpg" alt="Solar panel planning and installation" />
                  </div>

                  <div className="about8-s1-floating-card">
                    <div className="about8-s1-floating-icon">☀</div>
                    <div>
                      <h4>Clean Energy Focus</h4>
                      <p>Solar systems built for performance, savings, and sustainability.</p>
                    </div>
                  </div>
                </div>

                <div className="about8-mini-row">
                  <div className="about8-mini">
                    <div className="about8-mini-top">Residential Solar</div>
                    <div className="about8-mini-sub">Smart rooftop systems for homes</div>
                  </div>
                  <div className="about8-mini">
                    <div className="about8-mini-top">Commercial Solar</div>
                    <div className="about8-mini-sub">Efficient systems for business spaces</div>
                  </div>
                  <div className="about8-mini about8-mini-wide">
                    <div className="about8-mini-top">Industrial & Farm Projects</div>
                    <div className="about8-mini-sub">Durable solar solutions for larger energy demands</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="about8-s2" aria-label="Signature promise">
          <div className="about8-container">
            <div className="about8-s2-top">
              <div className="about8-s2-top-left">
                <div className="about8-s2-pill">Our Promise</div>
                <h2 className="about8-h2 about8-h2-invert">
                  Solar made clear, dependable, and beautifully efficient
                </h2>
              </div>

              <p className="about8-p about8-p-invert about8-s2-top-text">
                We keep solar simple, efficient, and transparent. From system selection to final installation, you get clear guidance, dependable quality, and support you can trust at every step.
              </p>
            </div>

            <div className="about8-s2-wrap">
              <div className="about8-s2-left">
                <div className="about8-s2-glass">
                  <div className="about8-underline about8-underline-invert" />

                  <div className="about8-tags">
                    <span className="about8-tag">Residential Solar Panels</span>
                    <span className="about8-tag">Commercial Solar Panels</span>
                    <span className="about8-tag">Industrial Solar Panels</span>
                    <span className="about8-tag">Agricultural Solar Panels</span>
                    <span className="about8-tag">Installation Support</span>
                  </div>

                  <div className="about8-s2-feature-grid">
                    <div className="about8-s2-feature-card">
                      <div className="about8-s2-feature-icon">01</div>
                      <div>
                        <div className="about8-s2-feature-title">Transparent guidance</div>
                        <div className="about8-s2-feature-sub">Clear advice, honest recommendations, and no confusion in the process.</div>
                      </div>
                    </div>

                    <div className="about8-s2-feature-card">
                      <div className="about8-s2-feature-icon">02</div>
                      <div>
                        <div className="about8-s2-feature-title">Quality execution</div>
                        <div className="about8-s2-feature-sub">Strong materials, neat installation, and dependable technical care.</div>
                      </div>
                    </div>

                    <div className="about8-s2-feature-card">
                      <div className="about8-s2-feature-icon">03</div>
                      <div>
                        <div className="about8-s2-feature-title">Lasting performance</div>
                        <div className="about8-s2-feature-sub">Efficient systems built for stable output and long-term savings.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about8-s2-right">
                <div className="about8-s2-card">
                  <div className="about8-s2-card-head">
                    <div className="about8-s2-card-mini">Process you can trust</div>
                    <h3>How BR Solar delivers confidence from day one</h3>
                  </div>

                  <div className="about8-s2-cardline">
                    <span className="about8-dot" />
                    <div>
                      <div className="about8-s2-title">Planning</div>
                      <div className="about8-s2-sub">Site evaluation, power assessment, and the right solar recommendation for your exact requirement.</div>
                    </div>
                  </div>

                  <div className="about8-s2-cardline">
                    <span className="about8-dot" />
                    <div>
                      <div className="about8-s2-title">Installation</div>
                      <div className="about8-s2-sub">Quality setup with durable components, clean execution, and proper attention to detail.</div>
                    </div>
                  </div>

                  <div className="about8-s2-cardline">
                    <span className="about8-dot" />
                    <div>
                      <div className="about8-s2-title">Performance</div>
                      <div className="about8-s2-sub">Efficient power generation with long-term savings, dependable output, and trusted support.</div>
                    </div>
                  </div>

                  <div className="about8-s2-btm">
                    <a className="about8-btn about8-btn-solid" href="/contact">
                      Get in Touch
                    </a>
                    <a className="about8-btn about8-btn-outline" href="tel:+9173920789920">
                      Call Now
                    </a>
                  </div>
                </div>

                <div className="about8-s2-note" aria-label="Short note">
                  <div className="about8-s2-note-icon">☀</div>
                  <div className="about8-s2-note-content">
                    <div className="about8-s2-note-top">CLEAN ENERGY AT YOUR DOORSTEP</div>
                    <div className="about8-s2-note-sub">
                      Reliable solar solutions for residential, commercial, industrial, and agricultural needs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about8-s3" aria-label="Services snapshot">
          <div className="about8-container">
            <div className="about8-s3-head">
              <div className="about8-s3-head-left">
                <div className="about8-s3-pill">What We Do</div>
                <h2 className="about8-h2">Complete solar services built for every kind of energy need</h2>
              </div>
              <div className="about8-s3-head-right">
                <div className="about8-underline" />
                <p className="about8-p">
                  End-to-end solar solutions designed for performance, durability, and better energy savings for homes, businesses, industries, and agricultural spaces.
                </p>
              </div>
            </div>

            <div className="about8-s3-layout">
              <div className="about8-s3-feature">
                <div className="about8-s3-feature-top">
                  <div className="about8-s3-feature-badge">BR Solar Services</div>
                  <h3>Powering rooftops, workspaces, and farms with smart solar systems</h3>
                  <p>
                    We combine planning, engineering, installation, and support into one smooth experience, helping customers move to clean energy with confidence.
                  </p>
                </div>

                <div className="about8-s3-feature-points">
                  <div className="about8-s3-point">
                    <span className="about8-s3-point-icon">☀</span>
                    <div>
                      <div className="about8-s3-point-title">Tailored solutions</div>
                      <div className="about8-s3-point-text">Every system is designed around the customer’s actual power usage and site conditions.</div>
                    </div>
                  </div>

                  <div className="about8-s3-point">
                    <span className="about8-s3-point-icon">⚡</span>
                    <div>
                      <div className="about8-s3-point-title">Efficient output</div>
                      <div className="about8-s3-point-text">Focused on strong generation, dependable savings, and long-term performance.</div>
                    </div>
                  </div>

                  <div className="about8-s3-point">
                    <span className="about8-s3-point-icon">🛠</span>
                    <div>
                      <div className="about8-s3-point-title">Ongoing support</div>
                      <div className="about8-s3-point-text">From setup to after-service, every project gets careful attention and technical guidance.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about8-s3-grid">
                <article className="about8-s3-card">
                  <div className="about8-s3-card-top">
                    <div className="about8-s3-kicker">01</div>
                    <div className="about8-s3-icon">🏠</div>
                  </div>
                  <div className="about8-s3-title">Residential Solar Panels</div>
                  <div className="about8-s3-text">Efficient rooftop systems for homes, villas, and apartments.</div>
                </article>

                <article className="about8-s3-card">
                  <div className="about8-s3-card-top">
                    <div className="about8-s3-kicker">02</div>
                    <div className="about8-s3-icon">🏢</div>
                  </div>
                  <div className="about8-s3-title">Commercial Solar Panels</div>
                  <div className="about8-s3-text">Solar power for offices, shops, schools, and business spaces.</div>
                </article>

                <article className="about8-s3-card">
                  <div className="about8-s3-card-top">
                    <div className="about8-s3-kicker">03</div>
                    <div className="about8-s3-icon">🏭</div>
                  </div>
                  <div className="about8-s3-title">Industrial Solar Panels</div>
                  <div className="about8-s3-text">High-capacity systems for factories, warehouses, and large operations.</div>
                </article>

                <article className="about8-s3-card">
                  <div className="about8-s3-card-top">
                    <div className="about8-s3-kicker">04</div>
                    <div className="about8-s3-icon">🌿</div>
                  </div>
                  <div className="about8-s3-title">Agricultural Solar Panels</div>
                  <div className="about8-s3-text">Solar systems for farms, pumps, irrigation, and rural usage.</div>
                </article>

                <article className="about8-s3-card">
                  <div className="about8-s3-card-top">
                    <div className="about8-s3-kicker">05</div>
                    <div className="about8-s3-icon">📐</div>
                  </div>
                  <div className="about8-s3-title">System Planning</div>
                  <div className="about8-s3-text">Site study, load analysis, and the right solution for every customer.</div>
                </article>

                <article className="about8-s3-card">
                  <div className="about8-s3-card-top">
                    <div className="about8-s3-kicker">06</div>
                    <div className="about8-s3-icon">🔧</div>
                  </div>
                  <div className="about8-s3-title">Installation & Support</div>
                  <div className="about8-s3-text">Professional setup, testing, and dependable after-service support.</div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="about8-s4" aria-label="Photo strip">
          <div className="about8-container">
            <div className="about8-s4-top">
              <div className="about8-s4-head">
                <div className="about8-s4-pill">Built for Real Energy Needs</div>
                <h2 className="about8-h2 about8-h2-invert">Solar systems that look clean, perform strong, and last longer</h2>
              </div>

              <p className="about8-p about8-p-invert about8-s4-top-text">
                A smart solar system is not just panels on a roof. It is proper planning, efficient installation, and performance you can rely on every day with the right design, right materials, and dependable support.
              </p>
            </div>

            <div className="about8-s4-grid">
              <div className="about8-s4-copy">
                <div className="about8-s4-copy-card">
                  <div className="about8-underline about8-underline-invert" />

                  <ul className="about8-list">
                    <li>
                      <span className="about8-check">✓</span>
                      <div>
                        <div className="about8-list-title">Customized system planning</div>
                        <div className="about8-list-sub">Every project is designed around actual power needs and site conditions.</div>
                      </div>
                    </li>
                    <li>
                      <span className="about8-check">✓</span>
                      <div>
                        <div className="about8-list-title">Efficient panel performance</div>
                        <div className="about8-list-sub">Strong energy output with better long-term savings and reliability.</div>
                      </div>
                    </li>
                    <li>
                      <span className="about8-check">✓</span>
                      <div>
                        <div className="about8-list-title">Quality installation materials</div>
                        <div className="about8-list-sub">Durable components and neat execution that make the setup last.</div>
                      </div>
                    </li>
                    <li>
                      <span className="about8-check">✓</span>
                      <div>
                        <div className="about8-list-title">Timely updates and support</div>
                        <div className="about8-list-sub">Clear communication from consultation to final handover and beyond.</div>
                      </div>
                    </li>
                  </ul>

                  <div className="about8-s4-stats">
                    <div className="about8-s4-stat">
                      <div className="about8-s4-stat-num">01</div>
                      <div className="about8-s4-stat-text">Planned with precision</div>
                    </div>
                    <div className="about8-s4-stat">
                      <div className="about8-s4-stat-num">02</div>
                      <div className="about8-s4-stat-text">Installed with care</div>
                    </div>
                    <div className="about8-s4-stat">
                      <div className="about8-s4-stat-num">03</div>
                      <div className="about8-s4-stat-text">Supported with trust</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about8-s4-photos" aria-label="Work previews">
                <div className="about8-s4-photo about8-s4-photo-large">
                  <img src="/Images/about-solar1.jpg" alt="Solar project preview 1" />
                  <div className="about8-s4-photo-overlay">
                    <span>Smart Planning</span>
                  </div>
                </div>

                <div className="about8-s4-photo about8-s4-photo-small">
                  <img src="/Images/about-solar2.jpg" alt="Solar project preview 2" />
                  <div className="about8-s4-photo-overlay">
                    <span>Clean Installation</span>
                  </div>
                </div>

                <div className="about8-s4-photo about8-s4-photo-small">
                  <img src="/Images/about-solar3.jpg" alt="Solar project preview 3" />
                  <div className="about8-s4-photo-overlay">
                    <span>Reliable Output</span>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </section>


        <section className="about8-s5" aria-label="Contact">
          <div className="about8-container">
            <div className="about8-s5-top">
              <div className="about8-s5-top-left">
                <div className="about8-s5-pill">Contact Us</div>
                <h2 className="about8-h2">Let’s plan the right solar solution for your space</h2>
              </div>
              <p className="about8-p about8-s5-top-text">
                Share your power needs, location, and project type. BR Solar will help you with the right recommendation, clear guidance, and a practical next step.
              </p>
            </div>

            <div className="about8-s5-grid">
              <div className="about8-s5-card about8-s5-contact-card">
                <div className="about8-s5-card-head">
                  <h3>Get in Touch</h3>
                  <span>Quick support and easy consultation</span>
                </div>

                <div className="about8-contact">
                  <div className="about8-contact-row">
                    <div className="about8-contact-icon">🏢</div>
                    <div className="about8-contact-main">
                      <div className="about8-contact-label">Business</div>
                      <div className="about8-contact-val">BR Solar</div>
                    </div>
                  </div>

                  <div className="about8-contact-row">
                    <div className="about8-contact-icon">☎</div>
                    <div className="about8-contact-main">
                      <div className="about8-contact-label">Phone</div>
                      <a className="about8-contact-val about8-link" href="tel:+9173920789920">
                        73920 789920
                      </a>
                    </div>
                  </div>

                  <div className="about8-contact-row">
                    <div className="about8-contact-icon">☎</div>
                    <div className="about8-contact-main">
                      <div className="about8-contact-label">Alternate Phone</div>
                      <a className="about8-contact-val about8-link" href="tel:+917995050203">
                        7995050203
                      </a>
                    </div>
                  </div>

                  <div className="about8-contact-row">
                    <div className="about8-contact-icon">✉</div>
                    <div className="about8-contact-main">
                      <div className="about8-contact-label">Email</div>
                      <a className="about8-contact-val about8-link" href="mailto:brsolar18@gmail.com">
                        brsolar18@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="about8-s5-actions">
                  <a className="about8-btn about8-btn-solid" href="/contact">
                    Send Message
                  </a>
                  <a className="about8-btn about8-btn-light" href="/services">
                    View Services
                  </a>
                </div>
              </div>

              <div className="about8-s5-card about8-s5-note-card">
                <div className="about8-s5-card-head">
                  <h3>Quick Note</h3>
                  <span>Simple process, clear communication</span>
                </div>

                <p className="about8-p">
                  Share your power needs and location, and we will suggest the right solar solution with a clear plan and budget guidance.
                </p>

                <div className="about8-s5-points">
                  <div className="about8-mapline">
                    <span className="about8-mapdot" />
                    <span>Fast response and practical consultation</span>
                  </div>
                  <div className="about8-mapline">
                    <span className="about8-mapdot" />
                    <span>Clear estimates with honest recommendations</span>
                  </div>
                  <div className="about8-mapline">
                    <span className="about8-mapdot" />
                    <span>Dependable site visits and support</span>
                  </div>
                </div>

                <div className="about8-s5-photo-wrap">
                  <div className="about8-s5-photo">
                    <img src="/Images/theme.jpg" alt="Solar theme preview" />
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about8-s6" aria-label="How we work">
          <div className="about8-container">
            <div className="about8-s6-top">
              <div className="about8-s6-top-left">
                <div className="about8-s6-pill">How We Work</div>
                <h2 className="about8-h2 about8-h2-invert">A smooth process that turns solar planning into reliable performance</h2>
              </div>
              <p className="about8-p about8-p-invert about8-s6-top-text">
                We follow a simple workflow that keeps every stage clear, practical, and well managed, from the first discussion to final support and performance confidence.
              </p>
            </div>

            <div className="about8-s6-flow">
              <div className="about8-s6-intro">
                <div className="about8-s6-intro-card">
                  <div className="about8-underline about8-underline-invert" />
                  <h3>Built around clarity, quality, and trust</h3>
                  <p>
                    Every project moves through a clean step-by-step system so customers always know what comes next, what is being done, and how the final solar setup is shaped for their needs.
                  </p>

                  <div className="about8-s6-mini-stats">
                    <div className="about8-s6-mini-stat">
                      <span>01</span>
                      <p>Customer-first consultation</p>
                    </div>
                    <div className="about8-s6-mini-stat">
                      <span>02</span>
                      <p>Precise solar planning</p>
                    </div>
                    <div className="about8-s6-mini-stat">
                      <span>03</span>
                      <p>Neat execution and support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about8-steps">
                <div className="about8-step">
                  <div className="about8-step-line" />
                  <div className="about8-step-no">01</div>
                  <div className="about8-step-content">
                    <div className="about8-step-title">Consult</div>
                    <div className="about8-step-text">We understand energy needs, site conditions, expectations, and budget before suggesting the right direction.</div>
                  </div>
                </div>

                <div className="about8-step">
                  <div className="about8-step-line" />
                  <div className="about8-step-no">02</div>
                  <div className="about8-step-content">
                    <div className="about8-step-title">Plan</div>
                    <div className="about8-step-text">We recommend the right solar system, layout, and solution structure for stronger long-term efficiency.</div>
                  </div>
                </div>

                <div className="about8-step">
                  <div className="about8-step-line" />
                  <div className="about8-step-no">03</div>
                  <div className="about8-step-content">
                    <div className="about8-step-title">Install</div>
                    <div className="about8-step-text">Professional setup with quality materials, proper fitting, safety checks, and clean finishing.</div>
                  </div>
                </div>

                <div className="about8-step">
                  <div className="about8-step-line" />
                  <div className="about8-step-no">04</div>
                  <div className="about8-step-content">
                    <div className="about8-step-title">Support</div>
                    <div className="about8-step-text">We ensure smooth handover, guidance after installation, and dependable performance support over time.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about8-s7" aria-label="Visiting card">
          <div className="about8-container">
            <div className="about8-s7-wrap">
              <div className="about8-s7-left">
                <div className="about8-s7-pill">BR SOLAR</div>
                <h2 className="about8-h2">Ready to switch to smarter solar energy?</h2>
                <p className="about8-p">
                  Clean energy solutions for residential, commercial, industrial, and agricultural spaces, planned with care and delivered with dependable support.
                </p>

                <div className="about8-s7-points">
                  <div className="about8-s7-point">
                    <span className="about8-s7-point-icon">☀</span>
                    <div>
                      <div className="about8-s7-point-title">Complete solar guidance</div>
                      <div className="about8-s7-point-text">From first consultation to final installation and support.</div>
                    </div>
                  </div>

                  <div className="about8-s7-point">
                    <span className="about8-s7-point-icon">⚡</span>
                    <div>
                      <div className="about8-s7-point-title">Practical energy savings</div>
                      <div className="about8-s7-point-text">Solutions built for reliable output and long-term value.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="about8-card">
                <div className="about8-card-glow about8-card-glow-one" />
                <div className="about8-card-glow about8-card-glow-two" />

                <div className="about8-card-top">
                  <div>
                    <div className="about8-card-brand">BR SOLAR</div>
                    <div className="about8-card-name">Clean Energy Solutions</div>
                    <div className="about8-card-role">Residential, Commercial, Industrial, and Agricultural Solar</div>
                  </div>

                  <div className="about8-card-mark" aria-hidden="true">
                    <span className="about8-mark-dot" />
                    <span className="about8-mark-dot" />
                    <span className="about8-mark-dot" />
                  </div>
                </div>

                <div className="about8-card-mid">
                  <div className="about8-card-col">
                    <div className="about8-card-label">Phone</div>
                    <a className="about8-card-val" href="tel:+9173920789920">
                      73920 789920
                    </a>
                  </div>

                  <div className="about8-card-col">
                    <div className="about8-card-label">Alternate Phone</div>
                    <a className="about8-card-val" href="tel:+917995050203">
                      7995050203
                    </a>
                  </div>

                  <div className="about8-card-col">
                    <div className="about8-card-label">Email</div>
                    <a className="about8-card-val" href="mailto:brsolar18@gmail.com">
                      brsolar18@gmail.com
                    </a>
                  </div>
                </div>

                <div className="about8-card-btm">
                  <div className="about8-card-strip">
                    Residential Solar Panels • Commercial Solar Panels • Industrial Solar Panels • Agricultural Solar Panels • Installation Support
                  </div>
                  <a className="about8-card-cta" href="/contact">
                    Contact Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section className="about8-s8" aria-label="Final call to action">
          <div className="about8-container">
            <div className="about8-final">
              <div className="about8-final-glow about8-final-glow-one" />
              <div className="about8-final-glow about8-final-glow-two" />

              <div className="about8-final-left">
                <div className="about8-final-pill">BR SOLAR</div>
                <h2 className="about8-final-title">Let’s Build a Smarter Solar Future</h2>
                <p className="about8-final-sub">
                  Tell us what you need, and we will guide you with the right solar plan, clean installation, and long-term support for homes, businesses, industries, and farms.
                </p>

                <div className="about8-final-points">
                  <div className="about8-final-point">
                    <span className="about8-final-point-icon">☀</span>
                    <div>
                      <div className="about8-final-point-title">Tailored solar planning</div>
                      <div className="about8-final-point-text">Solutions designed around your location, power needs, and budget.</div>
                    </div>
                  </div>

                  <div className="about8-final-point">
                    <span className="about8-final-point-icon">⚡</span>
                    <div>
                      <div className="about8-final-point-title">Clean installation</div>
                      <div className="about8-final-point-text">Neat execution with quality materials and dependable performance.</div>
                    </div>
                  </div>

                  <div className="about8-final-point">
                    <span className="about8-final-point-icon">🛠</span>
                    <div>
                      <div className="about8-final-point-title">Ongoing support</div>
                      <div className="about8-final-point-text">Clear guidance, smooth handover, and long-term confidence after setup.</div>
                    </div>
                  </div>
                </div>

                <div className="about8-final-actions">
                  <a className="about8-btn about8-btn-solid" href="/contact">
                    Get in Touch
                  </a>
                  <a className="about8-btn about8-btn-light" href="/services">
                    Explore Services
                  </a>
                </div>
              </div>

              <div className="about8-final-right" aria-label="Final image">
                <div className="about8-final-image-wrap">
                  <img src="/Images/about-solar4.jpg" alt="Solar energy installation" />
                  <div className="about8-final-badge">
                    <div className="about8-final-badge-icon">☀</div>
                    <div>
                      <div className="about8-final-badge-title">Clean Energy at Your Doorstep</div>
                      <div className="about8-final-badge-text">Smart solar systems with trusted planning and support.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}