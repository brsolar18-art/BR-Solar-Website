import React, { useRef, useState } from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    category: "",
    message: ""
  });

  const mapLink = "https://maps.google.com/?q=Kurnool%20Andhra%20Pradesh";
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent("Kurnool, Andhra Pradesh")}&output=embed`;

  const services = [
    "Residential Solar Panels",
    "Commercial Solar Panels",
    "Industrial Solar Panels",
    "Agricultural Solar Panels",
    "Solar Installation & Support"
  ];

  const handlePhoneChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(onlyDigits);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      alert("Please enter a valid 10 digit mobile number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://br-solar-backend.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          phone,
          email: formData.email,
          title: formData.title,
          category: formData.category,
          message: formData.message,
          source: "website"
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit form");
      }

      setPopupVisible(true);
      setPhone("");
      setFormData({
        name: "",
        email: "",
        title: "",
        category: "",
        message: ""
      });
      formRef.current?.reset();
    } catch (error) {
      alert(error.message || "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />

      <main className="contact8" id="contact">
        <section className="contact8-hero" aria-label="Contact hero">
          <img
            className="contact8-hero-img"
            src="/Images/contact1.jpg"
            alt="Contact BR Solar"
          />

          <div className="contact8-hero-overlay" />

          <div className="contact8-hero-content">
            <div className="contact8-hero-top">
              <span className="contact8-hero-pill">BR SOLAR</span>
              <div className="contact8-hero-line" />
            </div>

            <h1 className="contact8-hero-title">Contact Us</h1>

            <p className="contact8-hero-sub">
              Clean energy at your doorstep. Share your requirement and we will guide you clearly from planning to installation.
            </p>

            <div className="contact8-hero-badges" aria-label="Service regions">
              <span className="contact8-badge">Kurnool</span>
              <span className="contact8-badge">Andhra Pradesh</span>
              <span className="contact8-badge">Solar Solutions</span>
            </div>

            <div className="contact8-hero-actions">
              <a href="tel:73920789920" className="contact8-hero-btn contact8-hero-btn-primary">
                Call Now
              </a>
              <a href="mailto:brsolar18@gmail.com" className="contact8-hero-btn contact8-hero-btn-secondary">
                Email Us
              </a>
            </div>
          </div>

          <div className="contact8-hero-glow contact8-hero-glow-one" />
          <div className="contact8-hero-glow contact8-hero-glow-two" />
        </section>

        <section className="contact8-s1" aria-label="Quick contact">
          <div className="contact8-container">
            <div className="contact8-head">
              <span className="contact8-eyebrow">Connect With BR Solar</span>
              <h2 className="contact8-h2">Quick Contact</h2>
              <div className="contact8-underline" />
              <p className="contact8-p">
                We work across India with reliable solar solutions for residential, commercial, industrial, and agricultural needs. Our headquarters is in Kadapa.
              </p>
            </div>

            <div className="contact8-cards">
              <a className="contact8-card" href="tel:+9173920789920" aria-label="Call us">
                <div className="contact8-card-icon">
                  <span className="contact8-card-icon-ring" />
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.69 6.45 9.06 7.57C9.18 7.92 9.09 8.32 8.82 8.59L6.62 10.79Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="contact8-card-kicker">Primary Phone</div>
                <div className="contact8-card-main">73920 789920</div>
                <div className="contact8-card-sub">Tap to call now</div>
              </a>

              <a className="contact8-card" href="mailto:brsolar18@gmail.com" aria-label="Email us">
                <div className="contact8-card-icon">
                  <span className="contact8-card-icon-ring" />
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 6.5H20C20.55 6.5 21 6.95 21 7.5V16.5C21 17.05 20.55 17.5 20 17.5H4C3.45 17.5 3 17.05 3 16.5V7.5C3 6.95 3.45 6.5 4 6.5Z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M4 8L11.2 13.4C11.67 13.75 12.33 13.75 12.8 13.4L20 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="contact8-card-kicker">Email</div>
                <div className="contact8-card-main">brsolar18@gmail.com</div>
                <div className="contact8-card-sub">Send your requirement anytime</div>
              </a>

              <a className="contact8-card" href="tel:+917995050203" aria-label="Alternate phone">
                <div className="contact8-card-icon">
                  <span className="contact8-card-icon-ring" />
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.69 6.45 9.06 7.57C9.18 7.92 9.09 8.32 8.82 8.59L6.62 10.79Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="contact8-card-kicker">Alternate Phone</div>
                <div className="contact8-card-main">7995050203</div>
                <div className="contact8-card-sub">Quick support and follow-up</div>
              </a>
            </div>

            <div className="contact8-reach">
              <div className="contact8-reach-box">
                <div className="contact8-reach-label">Service Coverage</div>
                <div className="contact8-reach-value">All Over India</div>
              </div>
              <div className="contact8-reach-box">
                <div className="contact8-reach-label">Headquarters</div>
                <div className="contact8-reach-value">Kadapa, Andhra Pradesh</div>
              </div>
              <div className="contact8-reach-box">
                <div className="contact8-reach-label">Solutions</div>
                <div className="contact8-reach-value">On-Grid, Off-Grid, Hybrid Solar</div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s9" aria-label="Send message and map">
          <div className="contact8-container">
            <div className="contact8-head contact8-head-invert">
              <span className="contact8-eyebrow-dark">Get In Touch</span>
              <h2 className="contact8-h2 contact8-h2-invert">Send a Message</h2>
              <div className="contact8-underline contact8-underline-invert" />
              <p className="contact8-p contact8-p-invert">
                Tell us what you need. From home solar setups to large-scale projects, our team will get back to you quickly with the right guidance.
              </p>
            </div>

            <div className="contact8-formmap">
              <div className="contact8-formwrap">
                <div className="contact8-formcard-shape contact8-formcard-shape-one" />
                <div className="contact8-formcard-shape contact8-formcard-shape-two" />

                <form ref={formRef} onSubmit={handleSubmit} className="contact8-form">
                  <div className="contact8-form-row">
                    <div className="contact8-field">
                      <label className="contact8-label">Name</label>
                      <input
                        className="contact8-input"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="contact8-field">
                      <label className="contact8-label">Phone</label>
                      <input
                        className="contact8-input"
                        name="phone"
                        type="tel"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="Enter 10 digit mobile number"
                        maxLength={10}
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact8-form-row">
                    <div className="contact8-field">
                      <label className="contact8-label">Email</label>
                      <input
                        className="contact8-input"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="contact8-field">
                      <label className="contact8-label">Subject</label>
                      <input
                        className="contact8-input"
                        name="title"
                        type="text"
                        placeholder="Eg: Residential solar setup"
                        value={formData.title}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="contact8-field">
                    <label className="contact8-label">Service</label>
                    <select
                      className="contact8-input contact8-select"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contact8-field">
                    <label className="contact8-label">Message</label>
                    <textarea
                      className="contact8-textarea"
                      name="message"
                      rows="5"
                      placeholder="Tell us your requirement"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="contact8-submit" disabled={loading}>
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </form>

                {popupVisible && (
                  <div className="contact8-popup">
                    <div className="contact8-popup-inner">
                      <h3 className="contact8-popup-title">Submitted Successfully</h3>
                      <p className="contact8-popup-text">Thank you. We will contact you soon.</p>
                      <button className="contact8-popup-btn" onClick={() => setPopupVisible(false)}>
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="contact8-mapwrap" aria-label="Google map">
                <div className="contact8-map-top">
                  <div className="contact8-map-badge">Headquarters</div>
                  <h3 className="contact8-map-title">Kadapa, Andhra Pradesh</h3>
                  <p className="contact8-map-text">
                    We serve customers across India while operating from our headquarters in Kadapa.
                  </p>
                </div>

                <div className="contact8-map-frame">
                  <iframe
                    title="Service Location"
                    src={mapEmbedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                <a className="contact8-maplink" href={mapLink} target="_blank" rel="noreferrer">
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s2" aria-label="Service coverage">
          <div className="contact8-container">
            <div className="contact8-s2-shell">
              <div className="contact8-s2-content">
                <div className="contact8-s2-kicker">BR Solar Services</div>
                <h2 className="contact8-h2 contact8-s2-title">What We Do</h2>
                <div className="contact8-underline contact8-s2-underline" />
                <p className="contact8-p contact8-s2-text">
                  Solar solutions that save money and deliver reliable performance. Smart planning, clean installation, and lasting power generation for homes, businesses, industries, and agricultural needs.
                </p>

                <div className="contact8-tags">
                  <span className="contact8-tag">Residential Solar Panels</span>
                  <span className="contact8-tag">Commercial Solar Panels</span>
                  <span className="contact8-tag">Industrial Solar Panels</span>
                  <span className="contact8-tag">Agricultural Solar Panels</span>
                  <span className="contact8-tag">Solar Installation & Support</span>
                </div>

                <div className="contact8-s2-actions">
                  <a className="contact8-btn contact8-btn-solid" href="tel:+9173920789920">
                    Call Now
                  </a>
                  <a className="contact8-btn contact8-btn-outline" href="mailto:brsolar18@gmail.com">
                    Email Us
                  </a>
                </div>
              </div>

              <div className="contact8-s2-visual">
                <div className="contact8-s2-photo-card">
                  <img src="/Images/theme.jpg" alt="Solar energy preview" className="contact8-s2-img" />

                  <div className="contact8-s2-floating contact8-s2-floating-top">
                    <div className="contact8-s2-floating-label">Reliable Output</div>
                    <div className="contact8-s2-floating-value">Smart Solar Performance</div>
                  </div>

                  <div className="contact8-s2-floating contact8-s2-floating-bottom">
                    <div className="contact8-s2-floating-label">Complete Support</div>
                    <div className="contact8-s2-floating-value">Planning to Installation</div>
                  </div>
                </div>

                <div className="contact8-s2-stats">
                  <div className="contact8-tile">
                    <div className="contact8-tile-icon">01</div>
                    <div className="contact8-tile-top">High Efficiency</div>
                    <div className="contact8-tile-sub">Panels built for strong output and better savings</div>
                  </div>

                  <div className="contact8-tile">
                    <div className="contact8-tile-icon">02</div>
                    <div className="contact8-tile-top">Clean Installation</div>
                    <div className="contact8-tile-sub">Neat setup with safe and reliable execution</div>
                  </div>

                  <div className="contact8-tile">
                    <div className="contact8-tile-icon">03</div>
                    <div className="contact8-tile-top">Clear Guidance</div>
                    <div className="contact8-tile-sub">Simple recommendations for the right solar solution</div>
                  </div>

                  <div className="contact8-tile">
                    <div className="contact8-tile-icon">04</div>
                    <div className="contact8-tile-top">Long-Term Support</div>
                    <div className="contact8-tile-sub">Dependable service and support after installation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s4" aria-label="Project flow">
          <div className="contact8-container">
            <div className="contact8-s4-head">
              <span className="contact8-s4-kicker">How We Work</span>
              <h2 className="contact8-h2 contact8-s4-title">Project Flow</h2>
              <div className="contact8-s4-underline" />
              <p className="contact8-p contact8-s4-text">
                A smooth step-by-step journey, from your first enquiry to installation and ongoing support, so you always know what comes next.
              </p>
            </div>

            <div className="contact8-s4-timeline">
              <div className="contact8-s4-line" />

              <div className="contact8-s4-item">
                <div className="contact8-s4-dot-wrap">
                  <div className="contact8-s4-dot">01</div>
                </div>
                <div className="contact8-s4-card">
                  <div className="contact8-s4-card-top">Consult</div>
                  <div className="contact8-s4-card-sub">Share your power needs, project goals, and site details with our team.</div>
                </div>
              </div>

              <div className="contact8-s4-item">
                <div className="contact8-s4-dot-wrap">
                  <div className="contact8-s4-dot">02</div>
                </div>
                <div className="contact8-s4-card">
                  <div className="contact8-s4-card-top">Assess</div>
                  <div className="contact8-s4-card-sub">We study roof space, load usage, and practical requirements for the right setup.</div>
                </div>
              </div>

              <div className="contact8-s4-item">
                <div className="contact8-s4-dot-wrap">
                  <div className="contact8-s4-dot">03</div>
                </div>
                <div className="contact8-s4-card">
                  <div className="contact8-s4-card-top">Estimate</div>
                  <div className="contact8-s4-card-sub">You receive clear system options, pricing guidance, and the best fit for your needs.</div>
                </div>
              </div>

              <div className="contact8-s4-item">
                <div className="contact8-s4-dot-wrap">
                  <div className="contact8-s4-dot">04</div>
                </div>
                <div className="contact8-s4-card">
                  <div className="contact8-s4-card-top">Install</div>
                  <div className="contact8-s4-card-sub">Our team completes clean installation, quality checks, and proper testing.</div>
                </div>
              </div>

              <div className="contact8-s4-item">
                <div className="contact8-s4-dot-wrap">
                  <div className="contact8-s4-dot">05</div>
                </div>
                <div className="contact8-s4-card">
                  <div className="contact8-s4-card-top">Support</div>
                  <div className="contact8-s4-card-sub">We finish with handover, guidance, and dependable support after installation.</div>
                </div>
              </div>
            </div>

            <div className="contact8-s4-bottom">
              <div className="contact8-s4-bottom-card">
                <div className="contact8-s4-bottom-label">Service Promise</div>
                <div className="contact8-s4-bottom-value">Clear Process, Clean Execution, Reliable Support</div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s3" aria-label="Business details">
          <div className="contact8-container">
            <div className="contact8-s3-wrap">
              <div className="contact8-s3-media" aria-label="Office photo">
                <img src="/Images/featured.jpg" alt="Solar planning and installation" className="contact8-s3-img" />

                <div className="contact8-s3-badge contact8-s3-badge-top">
                  <span className="contact8-s3-badge-label">Service Reach</span>
                  <span className="contact8-s3-badge-value">All Over India</span>
                </div>

                <div className="contact8-s3-badge contact8-s3-badge-bottom">
                  <span className="contact8-s3-badge-label">Headquarters</span>
                  <span className="contact8-s3-badge-value">Kadapa, Andhra Pradesh</span>
                </div>
              </div>

              <div className="contact8-s3-card">
                <div className="contact8-s3-kicker">Business Information</div>
                <h2 className="contact8-h2 contact8-s3-title">Business Details</h2>
                <div className="contact8-underline contact8-s3-underline" />
                <p className="contact8-p contact8-s3-text">
                  Reach us anytime for a quick quote or consultation on the right solar setup for your home, business, industry, or farm. We serve clients across India with clear guidance and dependable support.
                </p>

                <div className="contact8-info">
                  <a className="contact8-info-row" href="tel:+9173920789920" aria-label="Call primary phone">
                    <div className="contact8-info-icon">
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.69 6.45 9.06 7.57C9.18 7.92 9.09 8.32 8.82 8.59L6.62 10.79Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="contact8-info-content">
                      <div className="contact8-info-label">Phone</div>
                      <div className="contact8-info-val">73920 789920</div>
                    </div>
                  </a>

                  <a className="contact8-info-row" href="tel:+917995050203" aria-label="Call alternate phone">
                    <div className="contact8-info-icon">
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.69 6.45 9.06 7.57C9.18 7.92 9.09 8.32 8.82 8.59L6.62 10.79Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="contact8-info-content">
                      <div className="contact8-info-label">Alternate Phone</div>
                      <div className="contact8-info-val">7995050203</div>
                    </div>
                  </a>

                  <a className="contact8-info-row" href="mailto:brsolar18@gmail.com" aria-label="Email BR Solar">
                    <div className="contact8-info-icon">
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M4 6.5H20C20.55 6.5 21 6.95 21 7.5V16.5C21 17.05 20.55 17.5 20 17.5H4C3.45 17.5 3 17.05 3 16.5V7.5C3 6.95 3.45 6.5 4 6.5Z" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M4 8L11.2 13.4C11.67 13.75 12.33 13.75 12.8 13.4L20 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="contact8-info-content">
                      <div className="contact8-info-label">Email</div>
                      <div className="contact8-info-val">brsolar18@gmail.com</div>
                    </div>
                  </a>

                  <div className="contact8-info-row" aria-label="Headquarters address">
                    <div className="contact8-info-icon">
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 21C12 21 18 15.6 18 10.5C18 7.19 15.31 4.5 12 4.5C8.69 4.5 6 7.19 6 10.5C6 15.6 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 12.75C13.24 12.75 14.25 11.74 14.25 10.5C14.25 9.26 13.24 8.25 12 8.25C10.76 8.25 9.75 9.26 9.75 10.5C9.75 11.74 10.76 12.75 12 12.75Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="contact8-info-content">
                      <div className="contact8-info-label">Headquarters</div>
                      <div className="contact8-info-val">Kadapa, Andhra Pradesh</div>
                    </div>
                  </div>
                </div>

                <div className="contact8-s3-actions">
                  <a className="contact8-s3-btn contact8-s3-btn-solid" href="tel:+9173920789920">
                    Call Now
                  </a>
                  <a className="contact8-s3-btn contact8-s3-btn-outline" href="mailto:brsolar18@gmail.com">
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact8-s8" aria-label="Final call to action">
          <div className="contact8-container">
            <div className="contact8-final">
              <div className="contact8-final-glow contact8-final-glow-one" />
              <div className="contact8-final-glow contact8-final-glow-two" />

              <div className="contact8-final-content">
                <div className="contact8-final-badge">Ready to Go Solar</div>

                <h2 className="contact8-final-title">Let’s Start Your Solar Project</h2>

                <p className="contact8-final-sub">
                  From planning and system selection to installation and support, BR Solar is ready to help you move to smarter energy with confidence.
                </p>

                <div className="contact8-final-points">
                  <div className="contact8-final-point">
                    <span className="contact8-final-point-dot" />
                    <span className="contact8-final-point-text">Residential, commercial, industrial, and agricultural solar solutions</span>
                  </div>
                  <div className="contact8-final-point">
                    <span className="contact8-final-point-dot" />
                    <span className="contact8-final-point-text">Service support across India with headquarters in Kadapa</span>
                  </div>
                  <div className="contact8-final-point">
                    <span className="contact8-final-point-dot" />
                    <span className="contact8-final-point-text">Clear guidance, clean installation, and dependable after-service</span>
                  </div>
                </div>
              </div>

              <div className="contact8-final-actions">
                <a className="contact8-final-btn contact8-final-btn-primary" href="tel:+9173920789920">
                  Call Now
                </a>
                <a className="contact8-final-btn contact8-final-btn-secondary" href="mailto:brsolar18@gmail.com">
                  Email Us
                </a>

                <div className="contact8-final-mini">
                  <div className="contact8-final-mini-label">Quick Contact</div>
                  <div className="contact8-final-mini-value">73920 789920</div>
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