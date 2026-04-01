import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./HomePage.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { FaHome, FaBuilding, FaRegBuilding } from "react-icons/fa";

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="home">
        <section className="hero-section">
          <div className="image-container">
            <img src="/Images/solar1.jpg" alt="Solar Panel Installation" className="image1" />
            <img src="/Images/solar2.jpg" alt="Clean Energy Solutions" className="image2" />
          </div>

          <div className="text-container">
            <h6 className="small-text">BR SOLAR</h6>
            <h1 className="crafted-text">Power From</h1>
            <h1 className="built-text">Every Sunrise</h1>
            <h4 className="description-title">Clean energy for homes, businesses, and a greener tomorrow</h4>

          </div>
        </section>

        <section className="services-sec" aria-label="Solar energy solutions">
          <div className="services-inner">
            <div className="services-head">
              <h2 className="services-title">Solar Energy Solutions</h2>
              <div className="services-underline" />
              <p className="services-sub">
                Smart solar systems designed for savings, performance, and reliable clean power.
              </p>
            </div>

            <div className="services-grid">
              <article className="service-card">
                <div className="service-media">
                  <img src="/Images/services-1.jpg" alt="Residential solar solutions" />
                </div>
                <div className="service-body">
                  <h3 className="service-h">Residential Solar Solutions</h3>
                  <p className="service-p">Efficient solar systems for homes, apartments, villas, and gated communities.</p>
                  <ul className="service-list">
                    <li>Rooftop panel systems</li>
                    <li>Lower monthly bills</li>
                    <li>Reliable home energy</li>
                  </ul>
                </div>
              </article>

              <article className="service-card">
                <div className="service-media">
                  <img src="/Images/services-2.jpg" alt="Commercial solar solutions" />
                </div>
                <div className="service-body">
                  <h3 className="service-h">Commercial Solar Solutions</h3>
                  <p className="service-p">Solar setups for offices, shops, malls, hotels, schools, and hospitals.</p>
                  <ul className="service-list">
                    <li>Reduced operating costs</li>
                    <li>Scalable business systems</li>
                    <li>Clean brand image</li>
                  </ul>
                </div>
              </article>

              <article className="service-card">
                <div className="service-media">
                  <img src="/Images/services-3.jpg" alt="Industrial solar solutions" />
                </div>
                <div className="service-body">
                  <h3 className="service-h">Industrial Solar Solutions</h3>
                  <p className="service-p">Large-scale solar installations for factories, warehouses, and manufacturing units.</p>
                  <ul className="service-list">
                    <li>High capacity generation</li>
                    <li>Energy cost control</li>
                    <li>Built for heavy demand</li>
                  </ul>
                </div>
              </article>

              <article className="service-card">
                <div className="service-media">
                  <img src="/Images/services-4.jpg" alt="On-grid solar systems" />
                </div>
                <div className="service-body">
                  <h3 className="service-h">On-Grid Solar Systems</h3>
                  <p className="service-p">Grid-connected systems designed mainly to reduce electricity bills efficiently.</p>
                  <ul className="service-list">
                    <li>Utility grid connection</li>
                    <li>Best for savings</li>
                    <li>Low maintenance setup</li>
                  </ul>
                </div>
              </article>

              <article className="service-card">
                <div className="service-media">
                  <img src="/Images/services-5.jpg" alt="Off-grid solar systems" />
                </div>
                <div className="service-body">
                  <h3 className="service-h">Off-Grid Solar Systems</h3>
                  <p className="service-p">Independent solar systems with battery backup for remote and power-sensitive areas.</p>
                  <ul className="service-list">
                    <li>Battery-based storage</li>
                    <li>Works without grid</li>
                    <li>Ideal for remote use</li>
                  </ul>
                </div>
              </article>

              <article className="service-card">
                <div className="service-media">
                  <img src="/Images/services-6.jpg" alt="Hybrid solar systems" />
                </div>
                <div className="service-body">
                  <h3 className="service-h">Hybrid Solar Systems</h3>
                  <p className="service-p">A smart mix of grid connection and battery storage for savings and backup.</p>
                  <ul className="service-list">
                    <li>Backup plus savings</li>
                    <li>Flexible energy use</li>
                    <li>Balanced power solution</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="hero" aria-label="Main banner">
          <img className="hero-img" src="/Images/main-banner-3.jpg" alt="Kalki's Inchx Interio banner" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-badge">
              <img className="hero-logo" src="/Images/logo.svg" alt="BR Solar logo" />
            </div>

            <h1 className="hero-title">
              Solar Power That
              <br />
              Works for Life
            </h1>

            <p className="hero-subtitle">
              From planning to installation, we deliver solar solutions that save energy and cut electricity costs.
              High-efficiency panels, smart system design, reliable performance, and clean <br />
              power.
              Built for your home, your business, and your future.
            </p>
          </div>
        </section>

        <section className="split-banner-section" aria-label="Explore solar panel types">
          <div className="split-banner-inner">
            <div className="split-head">
              <h2 className="split-title">Explore Our Solar Panel Types</h2>
              <div className="split-underline" />
              <p className="split-sub">
                Advanced panel technologies built for efficiency, durability, and smarter energy generation.
              </p>
            </div>

            <div className="split-body">
              <div className="split-left">
                <img src="/Images/featured.jpg" alt="Featured solar panel collection" />
              </div>

              <div className="split-right">
                <Link to="/products" className="split-right-card">
                  <div className="split-right-media">
                    <img src="/Images/right.jpg" alt="Monocrystalline solar panels" />
                  </div>
                  <p className="split-right-text">Monocrystalline Solar Panels</p>
                </Link>

                <Link to="/products" className="split-right-card">
                  <div className="split-right-media">
                    <img src="/Images/right1.jpg" alt="Polycrystalline solar panels" />
                  </div>
                  <p className="split-right-text">Polycrystalline Solar Panels</p>
                </Link>

                <Link to="/products" className="split-right-card">
                  <div className="split-right-media">
                    <img src="/Images/right2.jpg" alt="Thin-film solar panels" />
                  </div>
                  <p className="split-right-text">Thin-Film Solar Panels</p>
                </Link>

                <Link to="/products" className="split-right-card">
                  <div className="split-right-media">
                    <img src="/Images/right3.jpg" alt="Bifacial solar panels" />
                  </div>
                  <p className="split-right-text">Bifacial Solar Panels</p>
                </Link>

                <Link to="/products" className="split-right-card">
                  <div className="split-right-media">
                    <img src="/Images/right4.jpg" alt="PERC solar panels" />
                  </div>
                  <p className="split-right-text">PERC Solar Panels</p>
                </Link>

                <Link to="/products" className="split-right-card">
                  <div className="split-right-media">
                    <img src="/Images/right5.jpg" alt="Half-cut cell solar panels" />
                  </div>
                  <p className="split-right-text">Half-Cut Cell Solar Panels</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="home-part-grid" aria-label="Solar panel categories">
          <div className="home-part-inner">
            <div className="home-part-card">
              <img src="/Images/grid7.jpg" alt="Residential solar panels" className="home-part-img" />
            </div>

            <div className="home-part-text">
              <h3 className="home-part-title">RESIDENTIAL SOLAR PANELS</h3>
              <p className="home-part-desc">
                Panels designed for homes, apartments, villas, and small rooftop spaces.
              </p>
              <Link to="/services" className="home-part-btn">
                View Details →
              </Link>
            </div>

            <div className="home-part-card">
              <img src="/Images/grid10.jpg" alt="Commercial solar panels" className="home-part-img" />
            </div>

            <div className="home-part-text">
              <h3 className="home-part-title">COMMERCIAL SOLAR PANELS</h3>
              <p className="home-part-desc">
                Solar panel solutions for offices, shops, malls, hotels, and other business spaces.
              </p>
              <Link to="/services" className="home-part-btn">
                View Details →
              </Link>
            </div>

            <div className="home-part-text">
              <h3 className="home-part-title">INDUSTRIAL SOLAR PANELS</h3>
              <p className="home-part-desc">
                High-capacity panel systems for factories, warehouses, and manufacturing units.
              </p>
              <Link to="/services" className="home-part-btn">
                View Details →
              </Link>
            </div>

            <div className="home-part-card">
              <img src="/Images/grid8.jpg" alt="Industrial solar panels" className="home-part-img" />
            </div>

            <div className="home-part-text">
              <h3 className="home-part-title">AGRICULTURAL SOLAR PANELS</h3>
              <p className="home-part-desc">
                Solar panels used for farms, irrigation systems, water pumps, and rural energy needs.
              </p>
              <Link to="/services" className="home-part-btn">
                View Details →
              </Link>
            </div>

            <div className="home-part-card">
              <img src="/Images/grid9.jpg" alt="Agricultural solar panels" className="home-part-img" />
            </div>
          </div>
        </section>



        <section className="visit-card" aria-label="Company profile card">
          <div className="visit-card-inner">
            <h2 className="visit-card-title">BR Solar</h2>

            <div className="visit-card-body">
              <div className="visit-card-left">
                <div className="visit-card-brand">
                  Residential, Commercial, Industrial, and Agricultural Solar Solutions
                </div>

                <p className="visit-card-tagline">
                  Clean energy solutions designed to lower power costs, improve efficiency, and bring dependable solar performance to every space.
                </p>

                <div className="visit-card-points">
                  <div className="visit-card-point">
                    <span className="visit-card-dot" />
                    <span className="visit-card-point-text">
                      High-efficiency solar systems for homes, businesses, and industrial sites
                    </span>
                  </div>

                  <div className="visit-card-point">
                    <span className="visit-card-dot" />
                    <span className="visit-card-point-text">
                      Smart on-grid, off-grid, and hybrid solutions for different energy needs
                    </span>
                  </div>

                  <div className="visit-card-point">
                    <span className="visit-card-dot" />
                    <span className="visit-card-point-text">
                      Quality solar panels, durable installation, and long-term performance
                    </span>
                  </div>

                  <div className="visit-card-point">
                    <span className="visit-card-dot" />
                    <span className="visit-card-point-text">
                      Reliable service support with smooth planning and clean execution
                    </span>
                  </div>
                </div>

                <div className="visit-card-footer">
                  <div className="visit-card-line">
                    <span className="visit-card-label">Phone</span>
                    <span className="visit-card-value">73920 78920</span>
                  </div>

                  <div className="visit-card-line">
                    <span className="visit-card-label">Phone</span>
                    <span className="visit-card-value">7995050203</span>
                  </div>

                  <div className="visit-card-line">
                    <span className="visit-card-label">Email</span>
                    <span className="visit-card-value">brsolar18@gmail.com</span>
                  </div>

                  <div className="visit-card-line">
                    <span className="visit-card-label">Address</span>
                    <span className="visit-card-value">Kurnool, Andhra Pradesh</span>
                  </div>
                </div>
              </div>

              <div className="visit-card-right" aria-label="Company card image">
                <img
                  className="visit-card-img"
                  src="/Images/visiting-card1.jpg"
                  alt="BR Solar company card"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="three-clock-section">
          <div className="three-clock-grid">
            <div className="three-clock-card">
              <img src="/Images/clock1.jpg" alt="Residential solar solutions" className="three-clock-img" />
              <div className="three-clock-overlay" />
              <div className="three-clock-content">
                <h3 className="three-clock-title">Residential Solar Panels</h3>
                <p className="three-clock-desc">
                  Smart solar solutions for homes, apartments, villas, and compact rooftop spaces.
                </p>
                <Link to="/services" className="three-clock-btn">
                  Explore Services →
                </Link>
              </div>
            </div>

            <div className="three-clock-card three-clock-center">
              <img src="/Images/clock2.jpg" alt="Solar panel showcase" className="three-clock-img" />
              <div className="three-clock-overlay" />
            </div>

            <div className="three-clock-card">
              <img src="/Images/clock3.jpg" alt="Commercial and industrial solar solutions" className="three-clock-img" />
              <div className="three-clock-overlay" />
              <div className="three-clock-content">
                <h3 className="three-clock-title">Commercial & Industrial Solar</h3>
                <p className="three-clock-desc">
                  High-performance solar systems built for businesses, factories, warehouses, and large energy needs.
                </p>
                <Link to="/contact" className="three-clock-btn">
                  Get a Quote →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="signature-sec">
          <div className="signature-inner">
            <div className="signature-head">
              <p className="signature-kicker">BR SOLAR</p>
              <h2 className="signature-title">Power. Savings. Sustainability.</h2>
              <p className="signature-sub">
                From system planning to final installation, we deliver solar solutions that are efficient, reliable, and built for long-term performance.
              </p>
            </div>

            <div className="signature-grid">
              <article className="signature-card">
                <div className="signature-media">
                  <img src="/Images/services-1.jpg" alt="Residential solar solutions" />
                  <div className="signature-overlay" />
                  <div className="signature-chip">Residential Solar</div>
                </div>
                <div className="signature-body">
                  <h3 className="signature-h">Smart power for everyday living</h3>
                  <p className="signature-p">
                    Solar systems designed for homes, villas, apartments, and rooftop spaces with better energy efficiency.
                  </p>
                  <ul className="signature-list">
                    <li>Rooftop systems for homes</li>
                    <li>Reduced electricity bills</li>
                    <li>Reliable clean energy output</li>
                  </ul>
                </div>
              </article>

              <article className="signature-card signature-featured">
                <div className="signature-media">
                  <img src="/Images/final2.jpg" alt="Premium solar energy showcase" />
                  <div className="signature-overlay signature-overlay-strong" />
                  <div className="signature-featured-content">
                    <h3 className="signature-featured-title">Clean energy at your doorstep</h3>
                    <p className="signature-featured-desc">
                      Efficient solar solutions with quality installation, dependable support, and lasting performance for every energy need.
                    </p>
                  </div>
                </div>
              </article>

              <article className="signature-card">
                <div className="signature-media">
                  <img src="/Images/services-5.jpg" alt="Commercial and industrial solar solutions" />
                  <div className="signature-overlay" />
                  <div className="signature-chip">Commercial & Industrial Solar</div>
                </div>
                <div className="signature-body">
                  <h3 className="signature-h">Built for bigger energy demands</h3>
                  <p className="signature-p">
                    High-capacity solar systems for offices, businesses, factories, and industrial units that need stable power savings.
                  </p>
                  <ul className="signature-list">
                    <li>Scalable solar panel systems</li>
                    <li>Lower operating costs</li>
                    <li>Strong long-term performance</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>


        <section className="grid-section" aria-label="Solar energy highlights grid">
          <div className="grid-wrap">
            <div className="grid-item grid-media">
              <img className="grid-img" src="/Images/grid1.jpg" alt="High-efficiency solar panels" />
            </div>

            <div className="grid-item grid-text">
              <h4 className="grid-kicker">High Efficiency</h4>
              <p className="grid-copy">
                Advanced solar panels built to generate more power with better performance in everyday conditions.
              </p>
            </div>

            <div className="grid-item grid-media">
              <img className="grid-img" src="/Images/grid2.jpg" alt="Smart solar system planning" />
            </div>

            <div className="grid-item grid-text">
              <h4 className="grid-kicker">Smart Planning</h4>
              <p className="grid-copy">
                We design the right solar setup for your roof, power usage, budget, and long-term energy goals.
              </p>
            </div>

            <div className="grid-item grid-title">
              <h2 className="grid-title-text">
                BR <br />
                Solar <br />
                Energy
              </h2>
            </div>

            <div className="grid-item grid-text">
              <h4 className="grid-kicker">Reliable Savings</h4>
              <p className="grid-copy">
                Lower electricity bills and dependable clean power for homes, businesses, and industrial spaces.
              </p>
            </div>

            <div className="grid-item grid-media">
              <img className="grid-img" src="/Images/grid3.jpg" alt="Durable solar panel installation" />
            </div>

            <div className="grid-item grid-text">
              <h4 className="grid-kicker">Durable Systems</h4>
              <p className="grid-copy">
                Strong installations, quality components, and long-lasting solar solutions built for real-world use.
              </p>
            </div>

            <div className="grid-item grid-media">
              <img className="grid-img" src="/Images/grid4.jpg" alt="Modern solar energy solutions" />
            </div>
          </div>
        </section>

        <section className="choose" aria-label="Why choose us">
          <div className="choose-inner">
            <div className="choose-grid">
              <div className="choose-left">
                <div className="choose-mosaic">
                  <div className="choose-col choose-col-split">
                    <div className="choose-media">
                      <img src="/Images/why-choose4.jpg" alt="High-efficiency solar panels" />
                    </div>
                    <div className="choose-media">
                      <img src="/Images/why-choose5.jpg" alt="Modern solar energy systems" />
                    </div>
                  </div>

                  <div className="choose-col">
                    <div className="choose-media choose-media-tall">
                      <img src="/Images/why-choose6.jpg" alt="Trusted solar installation" />
                      <div className="choose-tag">Trusted Solar Solutions</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="choose-right">
                <div className="choose-head">
                  <h2 className="choose-title">Why Choose BR Solar</h2>
                  <div className="choose-underline" />
                  <p className="choose-desc">
                    Solar systems should save money and perform reliably every day. <br />
                    We plan smart, install clean, and deliver lasting energy solutions. <br />
                    Clear guidance, quality materials, and dependable support.
                  </p>
                </div>

                <ul className="choose-points">
                  <li className="choose-point">
                    <span className="choose-bullet" />
                    <span className="choose-point-text">Smart solar planning based on your energy usage and roof space</span>
                  </li>
                  <li className="choose-point">
                    <span className="choose-bullet" />
                    <span className="choose-point-text">High-efficiency panels for better power generation and savings</span>
                  </li>
                  <li className="choose-point">
                    <span className="choose-bullet" />
                    <span className="choose-point-text">Quality installation with strong structures and clean finishing</span>
                  </li>
                  <li className="choose-point">
                    <span className="choose-bullet" />
                    <span className="choose-point-text">Reliable systems for residential, commercial, and industrial needs</span>
                  </li>
                  <li className="choose-point">
                    <span className="choose-bullet" />
                    <span className="choose-point-text">On-time delivery with smooth service and long-term support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="theme-band" aria-label="Solar energy banner">
          <img className="theme-band-img" src="/Images/theme.jpg" alt="BR Solar theme" />

          <h2 className="theme-band-title">BR SOLAR</h2>

          <div className="theme-band-left">
            <div className="theme-band-stack">
              Clean <br /> Energy <br /> For All
            </div>
            <p className="theme-band-desc">
              Residential, commercial, industrial, and agricultural solar solutions with smart planning, quality installation,
              and reliable energy savings across Andhra Pradesh.
            </p>
          </div>

          <div className="theme-band-icons" aria-label="Solar features">
            <FaHome />
            <FaBuilding />
            <FaRegBuilding />
          </div>
        </section>

        <section className="promise" aria-label="Why choose BR Solar">
          <div className="promise-inner">
            <header className="promise-head">
              <div className="promise-badge">Why Choose Us</div>
              <h2 className="promise-title">Efficient solar systems, reliable performance, long-term savings.</h2>
              <p className="promise-subtitle">
                Smart planning, quality components, and clean installation, from the first consultation to the final power-on.
              </p>
            </header>

            <div className="promise-grid">
              <article className="promise-card">
                <div className="promise-card-top">
                  <div className="promise-mark">
                    <span className="promise-mark-dot" />
                  </div>
                  <h3 className="promise-card-title">Smart Solar Planning</h3>
                </div>
                <p className="promise-card-text">
                  Solar solutions tailored to your roof space, energy usage, and budget for maximum output.
                </p>
                <div className="promise-list">
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Site assessment and system sizing</span>
                  </div>
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Right panel and inverter selection</span>
                  </div>
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Optimized layout for better generation</span>
                  </div>
                </div>
              </article>

              <article className="promise-card promise-card-featured">
                <div className="promise-card-top">
                  <div className="promise-mark">
                    <span className="promise-mark-dot" />
                  </div>
                  <h3 className="promise-card-title">Quality First</h3>
                </div>
                <p className="promise-card-text">
                  Durable panels, trusted components, and professional installation for dependable long-term performance.
                </p>
                <div className="promise-metrics">
                  <div className="promise-metric">
                    <div className="promise-metric-value">A+</div>
                    <div className="promise-metric-label">Efficiency</div>
                  </div>
                  <div className="promise-metric">
                    <div className="promise-metric-value">0</div>
                    <div className="promise-metric-label">Compromise</div>
                  </div>
                  <div className="promise-metric">
                    <div className="promise-metric-value">100%</div>
                    <div className="promise-metric-label">Support</div>
                  </div>
                </div>
              </article>

              <article className="promise-card">
                <div className="promise-card-top">
                  <div className="promise-mark">
                    <span className="promise-mark-dot" />
                  </div>
                  <h3 className="promise-card-title">Reliable Delivery</h3>
                </div>
                <p className="promise-card-text">
                  Clear timelines and smooth coordination to keep your solar project simple and stress-free.
                </p>
                <div className="promise-list">
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Transparent installation schedule</span>
                  </div>
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Regular project updates</span>
                  </div>
                  <div className="promise-item">
                    <span className="promise-bullet" />
                    <span className="promise-item-text">Clean testing and final handover</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="cta-hero" aria-label="Call to action banner">
          <img className="cta-hero-img" src="/Images/main-banner2.jpg" alt="Inchx Interio banner" />
          <div className="cta-hero-overlay" />
          <div className="cta-hero-content">
            <h2 className="cta-hero-title">Clean Energy at Your Doorstep</h2>
            <p className="cta-hero-subtitle">Smart solar solutions, reliable installation, and support you can count on.</p>

            <div className="cta-hero-actions">
              <Link to="/contact" className="cta-btn">
                <span>Get a Quote</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43" aria-hidden="true">
                  <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5" />
                  <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5" />
                  <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5" />
                </svg>
              </Link>

              <Link to="/services" className="cta-btn cta-btn-secondary">
                <span>View Services</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43" aria-hidden="true">
                  <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5" />
                  <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5" />
                  <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;