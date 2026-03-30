import React from "react";
import "./Services.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Services() {
  const marqueeRow1 = [
    "interior1.jpg",
    "interior2.jpg",
    "interior3.jpg",
    "interior4.jpg",
    "interior5.jpg",
    "interior6.jpg",
    "interior7.jpg",
    "interior8.jpg",
  ];

  const marqueeRow2 = [
    "show1.jpg",
    "show2.jpg",
    "show3.jpg",
    "show4.jpg",
    "show6.jpg",
    "show7.jpg",
    "show8.jpg",
    "show9.jpg",
  ];

  return (
    <div>
      <Navbar />

      <div className="services-wrapper" id="services">
        <section
          className="services-hero"
          style={{ backgroundImage: `url('/Images/service-main-banner.jpg')` }}
        >
          <div className="services-hero-overlay">
            <div className="services-hero-inner">
              <div className="services-hero-kicker">BR SOLAR</div>
              <h1 className="services-hero-title">SOLAR ENERGY SOLUTIONS</h1>
              <p className="services-hero-tagline">CLEAN ENERGY AT YOUR DOORSTEP</p>

              <div className="services-hero-actions">
                <a className="btn btn-solid" href="/contact">
                  Get Quote
                </a>
                <a className="btn btn-outline" href="tel:+9173920789920">
                  Call 73920 789920
                </a>
              </div>

              <div className="services-hero-meta">
                <a className="services-hero-link" href="mailto:brsolar18@gmail.com">
                  brsolar18@gmail.com
                </a>
                <span className="services-hero-sep">|</span>
                <a className="services-hero-link" href="tel:+917995050203">
                  7995050203
                </a>
                <span className="services-hero-sep">|</span>
                <span className="services-hero-handle">Kurnool, Andhra Pradesh</span>
              </div>
            </div>
          </div>
        </section>

        <section className="brandstrip" aria-label="Brand intro">
  <div className="brandstrip-decor brandstrip-decor-one" />
  <div className="brandstrip-decor brandstrip-decor-two" />

  <div className="brandstrip-inner">
    <div className="brandstrip-left">
      <div className="brandstrip-badge-wrap">
        <span className="brandstrip-badge">BR SOLAR</span>
        <span className="brandstrip-badge-line" />
      </div>

      <h2 className="section-title">BR Solar Signature Work</h2>
      <div className="section-underline" />

      <p className="section-sub">
        We deliver solar systems that are efficient, reliable, and built for long-term savings. From the first site
        assessment to final installation, every step stays clear, clean, and performance-focused.
      </p>

      <div className="brandstrip-highlights">
        <div className="brandstrip-highlight">
          <h3>98%</h3>
          <span>Energy efficiency focus</span>
        </div>
        <div className="brandstrip-highlight">
          <h3>Clean</h3>
          <span>Modern installation finish</span>
        </div>
        <div className="brandstrip-highlight">
          <h3>Trusted</h3>
          <span>Reliable post-install support</span>
        </div>
      </div>

      <div className="brandstrip-points">
        <div className="brandstrip-point">
          <span className="pill">Smart Planning</span>
          <div className="brandstrip-point-text">
            Right solar system design based on usage, space, and budget.
          </div>
        </div>

        <div className="brandstrip-point">
          <span className="pill">Quality Setup</span>
          <div className="brandstrip-point-text">
            Clean installation with durable panels and dependable components.
          </div>
        </div>

        <div className="brandstrip-point">
          <span className="pill">Reliable Support</span>
          <div className="brandstrip-point-text">
            Clear updates, testing, and smooth after-installation guidance.
          </div>
        </div>
      </div>

      <div className="brandstrip-cta-row">
        <a href="/contact" className="brandstrip-btn primary-btn">Get Free Consultation</a>
        <div className="brandstrip-mini-note">
          <span className="brandstrip-mini-dot" />
          Solar solutions designed for homes, villas, and commercial spaces
        </div>
      </div>
    </div>

    <div className="brandstrip-right" aria-label="Brand images">
      <div className="brandstrip-gallery">
        <figure className="imgcard imgcard-large">
          <img src="/Images/final1.jpg" alt="Solar installation" />
          <figcaption>Premium rooftop execution</figcaption>
        </figure>

        <figure className="imgcard imgcard-tall">
          <img src="/Images/final2.jpg" alt="Solar panel detailing" />
          <figcaption>Precision panel alignment</figcaption>
        </figure>

        <figure className="imgcard imgcard-small">
          <img src="/Images/featured.jpg" alt="Solar project preview" />
          <figcaption>Performance-led planning</figcaption>
        </figure>

        <figure className="imgcard imgcard-small">
          <img src="/Images/clock3.jpg" alt="Solar energy concept" />
          <figcaption>Smart energy vision</figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

        <section className="svcgrid" aria-label="Services">
  <div className="svcgrid-glow svcgrid-glow-one" />
  <div className="svcgrid-glow svcgrid-glow-two" />

  <div className="svcgrid-inner">
    <header className="section-head">
      <div className="svcgrid-kicker-wrap">
        <span className="svcgrid-kicker">OUR SOLAR SERVICES</span>
        <span className="svcgrid-kicker-line" />
      </div>

      <h2 className="section-title">Our Services</h2>
      <div className="section-underline" />
      <p className="section-sub">
        Complete solar solutions with smart planning, quality installation, and long-term performance.
      </p>
    </header>

    <div className="svcgrid-grid">
      <article className="svcgrid-card">
        <div className="svcgrid-card-top">
          <div className="svcgrid-icon">01</div>
          <div className="svcgrid-chip">Home Energy</div>
        </div>
        <h3 className="svcgrid-title">Residential Solar Panels</h3>
        <p className="svcgrid-text">
          Efficient rooftop solar systems for homes, villas, apartments, and small residential spaces.
        </p>
        <div className="svcgrid-line" />
      </article>

      <article className="svcgrid-card">
        <div className="svcgrid-card-top">
          <div className="svcgrid-icon">02</div>
          <div className="svcgrid-chip">Business Power</div>
        </div>
        <h3 className="svcgrid-title">Commercial Solar Panels</h3>
        <p className="svcgrid-text">
          Solar panel solutions for offices, shops, schools, hotels, and other business properties.
        </p>
        <div className="svcgrid-line" />
      </article>

      <article className="svcgrid-card">
        <div className="svcgrid-card-top">
          <div className="svcgrid-icon">03</div>
          <div className="svcgrid-chip">Heavy Load</div>
        </div>
        <h3 className="svcgrid-title">Industrial Solar Panels</h3>
        <p className="svcgrid-text">
          High-capacity solar systems for factories, warehouses, and large-scale industrial operations.
        </p>
        <div className="svcgrid-line" />
      </article>

      <article className="svcgrid-card">
        <div className="svcgrid-card-top">
          <div className="svcgrid-icon">04</div>
          <div className="svcgrid-chip">Rural Efficiency</div>
        </div>
        <h3 className="svcgrid-title">Agricultural Solar Panels</h3>
        <p className="svcgrid-text">
          Solar solutions for farms, irrigation systems, water pumps, and rural energy requirements.
        </p>
        <div className="svcgrid-line" />
      </article>

      <article className="svcgrid-card">
        <div className="svcgrid-card-top">
          <div className="svcgrid-icon">05</div>
          <div className="svcgrid-chip">Full Service</div>
        </div>
        <h3 className="svcgrid-title">Solar Installation & Support</h3>
        <p className="svcgrid-text">
          End-to-end installation, system setup, testing, and dependable support after project completion.
        </p>
        <div className="svcgrid-line" />
      </article>

      <article className="svcgrid-card svcgrid-card-wide">
        <div className="svcgrid-wide">
          <div className="svcgrid-wide-pattern" />
          <div className="svcgrid-wide-left">
            <div className="svcgrid-wide-badge">Need a quick call?</div>
            <h3 className="svcgrid-title">Let’s plan your solar setup</h3>
            <p className="svcgrid-text">
              Share your requirement, and we will guide you with the right system, expected savings, and a clear quote.
            </p>

            <div className="svcgrid-stats">
              <div className="svcgrid-stat">
                <strong>Fast</strong>
                <span>Response and guidance</span>
              </div>
              <div className="svcgrid-stat">
                <strong>Clear</strong>
                <span>System and savings plan</span>
              </div>
            </div>

            <div className="svcgrid-wide-actions">
              <a className="btn btn-solid" href="/contact">
                Enquire Now
              </a>
              <a className="btn btn-outline" href="tel:+9173920789920">
                Call Now
              </a>
            </div>
          </div>

          <div className="svcgrid-wide-right">
            <img src="/Images/clock1.jpg" alt="Solar system planning" />
            <div className="svcgrid-image-badge">Smart Solar Planning</div>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

       <section className="process-final" aria-label="Process">
  <div className="process-blur-final process-blur-one-final" />
  <div className="process-blur-final process-blur-two-final" />

  <div className="process-inner-final">
    <header className="section-head-final section-head-dark-final">
      <div className="process-kicker-wrap-final">
        <span className="process-kicker-final">WORK PROCESS</span>
        <span className="process-kicker-line-final" />
      </div>

      <h2 className="section-title-final section-title-dark-final">How We Work</h2>
      <div className="section-underline-final" />
      <p className="section-sub-final section-sub-dark-final">
        Simple steps, clear communication, and reliable solar performance.
      </p>
    </header>

    <div className="process-grid-final">
      <div className="process-step-final">
        <div className="process-step-top-final">
          <div className="process-no-final">01</div>
          <div className="process-dot-final" />
        </div>
        <div className="process-body-final">
          <div className="process-title-final">Site Visit</div>
          <div className="process-text-final">We assess your location, roof space, and energy needs.</div>
        </div>
      </div>

      <div className="process-step-final">
        <div className="process-step-top-final">
          <div className="process-no-final">02</div>
          <div className="process-dot-final" />
        </div>
        <div className="process-body-final">
          <div className="process-title-final">System Planning</div>
          <div className="process-text-final">We design the right solar solution for efficiency and savings.</div>
        </div>
      </div>

      <div className="process-step-final">
        <div className="process-step-top-final">
          <div className="process-no-final">03</div>
          <div className="process-dot-final" />
        </div>
        <div className="process-body-final">
          <div className="process-title-final">Quotation</div>
          <div className="process-text-final">Clear scope, transparent pricing, and practical recommendations.</div>
        </div>
      </div>

      <div className="process-step-final">
        <div className="process-step-top-final">
          <div className="process-no-final">04</div>
          <div className="process-dot-final" />
        </div>
        <div className="process-body-final">
          <div className="process-title-final">Installation</div>
          <div className="process-text-final">Quality setup, safe wiring, testing, and clean execution.</div>
        </div>
      </div>

      <div className="process-step-final">
        <div className="process-step-top-final">
          <div className="process-no-final">05</div>
          <div className="process-dot-final" />
        </div>
        <div className="process-body-final">
          <div className="process-title-final">Support</div>
          <div className="process-text-final">Final handover, guidance, and dependable after-service support.</div>
        </div>
      </div>
    </div>
  </div>
</section>


        <section className="regions" aria-label="Regions we serve">
  <div className="regions-glow regions-glow-one" />
  <div className="regions-glow regions-glow-two" />

  <div className="regions-inner">
    <div className="regions-grid">
      <div className="regions-left">
        <div className="regions-kicker-wrap">
          <span className="regions-kicker">SERVICE REACH</span>
          <span className="regions-kicker-line" />
        </div>

        <h2 className="section-title">Serving Across India</h2>
        <div className="section-underline" />
        <p className="section-sub">
          We deliver dependable solar solutions across India with the same quality, planning, installation discipline, and long-term support from our team.
        </p>

        <div className="regions-cards">
          <div className="regions-card regions-card-featured">
            <div className="regions-card-top">
              <div className="regions-icon">01</div>
              <div className="regions-tag">Head Office</div>
            </div>
            <div className="regions-card-title">Kadapa, Andhra Pradesh</div>
            <div className="regions-card-sub">
              Our headquarters, where project planning, coordination, and customer support are managed with care.
            </div>
          </div>

          <div className="regions-card">
            <div className="regions-card-top">
              <div className="regions-icon">02</div>
              <div className="regions-tag">Core Service Zone</div>
            </div>
            <div className="regions-card-title">Andhra Pradesh & Telangana</div>
            <div className="regions-card-sub">
              Strong on-ground support for residential, commercial, agricultural, and large solar installation projects.
            </div>
          </div>

          <div className="regions-card">
            <div className="regions-card-top">
              <div className="regions-icon">03</div>
              <div className="regions-tag">Pan India</div>
            </div>
            <div className="regions-card-title">All Over India</div>
            <div className="regions-card-sub">
              We can work across India with structured planning, smooth execution, and reliable solar project delivery.
            </div>
          </div>
        </div>

        <div className="regions-bottom-note">
          <div className="regions-bottom-line" />
          <p>
            From local installations to wider project execution, our team is ready to support solar requirements wherever you are in India.
          </p>
        </div>
      </div>

      <div className="regions-right" aria-label="Regions visuals">
        <div className="regions-visual">
          <img src="/Images/house1.jpg" alt="Solar coverage showcase" />

          <div className="regions-overlay" />

          <div className="regions-float regions-float-top">
            <div className="regions-float-label">Headquarter</div>
            <div className="regions-float-title">Kadapa, Andhra Pradesh</div>
          </div>

          <div className="regions-float regions-float-bottom">
            <div className="regions-float-title">Book a Site Visit</div>
            <div className="regions-float-sub">Call 73920 789920</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

       <section className="featured" aria-label="Featured highlights">
  <div className="featured-blur featured-blur-one" />
  <div className="featured-blur featured-blur-two" />

  <div className="featured-inner">
    <header className="section-head">
      <div className="featured-kicker-wrap">
        <span className="featured-kicker">WHY CHOOSE US</span>
        <span className="featured-kicker-line" />
      </div>

      <h2 className="section-title">Featured Highlights</h2>
      <div className="section-underline" />
      <p className="section-sub">
        A few key strengths that make our solar solutions practical, efficient, and long-lasting.
      </p>
    </header>

    <div className="featured-grid">
      <article className="featured-card featured-card-large">
        <img src="/Images/grid1.jpg" alt="High efficiency panels" />
        <div className="featured-overlay" />
        <div className="featured-cap">
          <div className="featured-cap-top">
            <span className="featured-badge">01</span>
            <span className="featured-tag">Performance</span>
          </div>
          <div className="featured-cap-title">High Efficiency</div>
          <div className="featured-cap-sub">Better output, better savings, and stronger long-term solar value.</div>
        </div>
      </article>

      <article className="featured-card">
        <img src="/Images/grid2.jpg" alt="Smart solar planning" />
        <div className="featured-overlay" />
        <div className="featured-cap">
          <div className="featured-cap-top">
            <span className="featured-badge">02</span>
            <span className="featured-tag">Planning</span>
          </div>
          <div className="featured-cap-title">Smart Planning</div>
          <div className="featured-cap-sub">Right system for every need, budget, and space.</div>
        </div>
      </article>

      <article className="featured-card">
        <img src="/Images/grid3.jpg" alt="Durable installation" />
        <div className="featured-overlay" />
        <div className="featured-cap">
          <div className="featured-cap-top">
            <span className="featured-badge">03</span>
            <span className="featured-tag">Execution</span>
          </div>
          <div className="featured-cap-title">Durable Installation</div>
          <div className="featured-cap-sub">Strong setup, clean execution, and dependable system stability.</div>
        </div>
      </article>

      <article className="featured-card featured-card-wide">
        <img src="/Images/grid4.jpg" alt="Reliable support" />
        <div className="featured-overlay" />
        <div className="featured-cap">
          <div className="featured-cap-top">
            <span className="featured-badge">04</span>
            <span className="featured-tag">Support</span>
          </div>
          <div className="featured-cap-title">Reliable Support</div>
          <div className="featured-cap-sub">Guidance before and after setup, with clear communication at every step.</div>
        </div>
      </article>
    </div>
  </div>
</section>

        <section className="marquee" aria-label="Animated gallery">
  <div className="marquee-glow marquee-glow-one" />
  <div className="marquee-glow marquee-glow-two" />

  <div className="marquee-inner">
    <header className="section-head section-head-dark">
      <div className="marquee-kicker-wrap">
        <span className="marquee-kicker">PROJECT SHOWCASE</span>
        <span className="marquee-kicker-line" />
      </div>

      <h2 className="section-title section-title-dark">Services Gallery</h2>
      <div className="section-underline" />
      <p className="section-sub section-sub-dark">
        A smooth visual section that showcases our solar solutions and installation style.
      </p>
    </header>

    <div className="marquee-wrap">
      <div className="marquee-row marquee-row-a" aria-hidden="true">
        {[...marqueeRow1, ...marqueeRow1].map((img, idx) => (
          <div className="marquee-card" key={`a-${idx}`}>
            <img src={`/Images/${img}`} alt="" />
            <div className="marquee-card-overlay" />
          </div>
        ))}
      </div>

      <div className="marquee-row marquee-row-b" aria-hidden="true">
        {[...marqueeRow2, ...marqueeRow2].map((img, idx) => (
          <div className="marquee-card marquee-card-alt" key={`b-${idx}`}>
            <img src={`/Images/${img}`} alt="" />
            <div className="marquee-card-overlay" />
          </div>
        ))}
      </div>
    </div>

    <div className="marquee-bottom">
      <div className="marquee-note">
        <span className="marquee-note-dot" />
        Solar systems designed for homes, commercial spaces, agricultural use, and large scale installations
      </div>

      <div className="marquee-cta">
        <a className="btn btn-solid" href="/contact">
          Get a Solar Plan
        </a>
        <a className="btn btn-outline" href="tel:+9173920789920">
          Talk to Us
        </a>
      </div>
    </div>
  </div>
</section>

        <section className="showcase" aria-label="Project showcase">
  <div className="showcase-blur showcase-blur-one" />
  <div className="showcase-blur showcase-blur-two" />

  <div className="showcase-inner">
    <header className="section-head">
      <div className="showcase-kicker-wrap">
        <span className="showcase-kicker">REAL PROJECT VISION</span>
        <span className="showcase-kicker-line" />
      </div>

      <h2 className="section-title">Project Showcase</h2>
      <div className="section-underline" />
      <p className="section-sub">
        Strong planning, quality installation, and solar systems designed for real energy savings.
      </p>
    </header>

    <div className="showcase-grid">
      <div className="showcase-left">
        <article className="showcase-hero">
          <img src="/Images/contact3.jpg" alt="Modern solar showcase" />
          <div className="showcase-hero-overlay" />
          <div className="showcase-hero-cap">
            <div className="showcase-hero-kicker">BR SOLAR</div>
            <div className="showcase-hero-title">Smart Solar, Built Practical</div>
            <div className="showcase-hero-sub">Efficient systems, clean installation, and lasting savings.</div>
          </div>
          <div className="showcase-hero-badge">
            <span className="showcase-hero-badge-dot" />
            Performance focused solar solutions
          </div>
        </article>

        <div className="showcase-tiles">
          <article className="showcase-tile">
            <img src="/Images/interior2.jpg" alt="Residential solar setup" />
            <div className="showcase-tile-overlay" />
            <div className="showcase-tile-cap">
              <div className="showcase-tile-no">01</div>
              <div className="showcase-tile-title">Residential Solar</div>
            </div>
          </article>

          <article className="showcase-tile">
            <img src="/Images/clock2.jpg" alt="Commercial solar planning" />
            <div className="showcase-tile-overlay" />
            <div className="showcase-tile-cap">
              <div className="showcase-tile-no">02</div>
              <div className="showcase-tile-title">Commercial Planning</div>
            </div>
          </article>
        </div>
      </div>

      <aside className="showcase-right" aria-label="Showcase highlights">
        <div className="showcase-panel">
          <div className="showcase-panel-top">
            <div className="showcase-panel-tag">What You Can Expect</div>
            <div className="showcase-panel-line" />
          </div>

          <h3 className="showcase-panel-title">Practical execution with long-term value</h3>
          <p className="showcase-panel-text">
            Clear planning and reliable installation. From site assessment to final testing, every step stays practical,
            transparent, and performance-focused.
          </p>

          <ul className="showcase-points">
            <li>
              <span className="bullet" />
              Efficient solar system recommendations
            </li>
            <li>
              <span className="bullet" />
              Quality panels with durable components
            </li>
            <li>
              <span className="bullet" />
              Installation designed for daily energy use
            </li>
            <li>
              <span className="bullet" />
              Timely delivery with regular updates
            </li>
            <li>
              <span className="bullet" />
              Friendly support after installation
            </li>
          </ul>

          <div className="showcase-stats">
            <div className="showcase-stat">
              <strong>Clean</strong>
              <span>Professional setup approach</span>
            </div>
            <div className="showcase-stat">
              <strong>Clear</strong>
              <span>Honest communication and support</span>
            </div>
          </div>

          <div className="showcase-actions">
            <a className="btn btn-solid" href="/contact">
              Get Quote
            </a>
            <a className="btn btn-outline" href="tel:+9173920789920">
              Call Now
            </a>
          </div>

          <div className="showcase-meta">
            <div className="showcase-meta-title">Kadapa • Andhra Pradesh</div>
            <div className="showcase-meta-sub">
              <a className="link" href="tel:+9173920789920">
                73920 789920
              </a>
              <span className="sep">|</span>
              <a className="link" href="mailto:brsolar18@gmail.com">
                brsolar18@gmail.com
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>

<section className="testimonials" aria-label="Testimonials">
  <div className="testimonials-glow testimonials-glow-one" />
  <div className="testimonials-glow testimonials-glow-two" />

  <div className="testimonials-inner">
    <header className="section-head section-head-dark">
      <div className="testimonials-kicker-wrap">
        <span className="testimonials-kicker">CLIENT EXPERIENCE</span>
        <span className="testimonials-kicker-line" />
      </div>

      <h2 className="section-title section-title-dark">Client Words</h2>
      <div className="section-underline" />
      <p className="section-sub section-sub-dark">
        Short feedback that reflects what we focus on, efficiency, installation quality, and dependable support.
      </p>
    </header>

    <div className="testimonials-grid">
      <article className="tcard tcard-featured">
        <div className="tquote-mark">“</div>
        <div className="tcard-top">
          <div className="tchip">Efficiency</div>
          <div className="tstars">★★★★★</div>
        </div>
        <p className="ttext">
          The system performance is excellent, and we noticed real savings in our electricity bills.
        </p>
        <div className="tmeta">
          <div className="tavatar">RS</div>
          <div className="tidentity">
            <div className="tname">Residential Solar</div>
            <div className="trole">Home energy customer</div>
          </div>
        </div>
      </article>

      <article className="tcard">
        <div className="tquote-mark">“</div>
        <div className="tcard-top">
          <div className="tchip">Planning</div>
          <div className="tstars">★★★★★</div>
        </div>
        <p className="ttext">
          The team explained everything clearly and helped us choose the right setup for our building.
        </p>
        <div className="tmeta">
          <div className="tavatar">CP</div>
          <div className="tidentity">
            <div className="tname">Commercial Project</div>
            <div className="trole">Business installation</div>
          </div>
        </div>
      </article>

      <article className="tcard">
        <div className="tquote-mark">“</div>
        <div className="tcard-top">
          <div className="tchip">Support</div>
          <div className="tstars">★★★★★</div>
        </div>
        <p className="ttext">
          Installation was neat, on time, and the support after setup was very professional.
        </p>
        <div className="tmeta">
          <div className="tavatar">AS</div>
          <div className="tidentity">
            <div className="tname">Agricultural Solar</div>
            <div className="trole">Farm energy solution</div>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<section className="faq" aria-label="FAQ">
  <div className="faq-glow faq-glow-one" />
  <div className="faq-glow faq-glow-two" />

  <div className="faq-inner">
    <header className="section-head section-head-dark">
      <div className="faq-kicker-wrap">
        <span className="faq-kicker">QUICK HELP</span>
        <span className="faq-kicker-line" />
      </div>

      <h2 className="section-title section-title-dark">Quick Answers</h2>
      <div className="section-underline" />
      <p className="section-sub section-sub-dark">A few common questions before you book a site visit.</p>
    </header>

    <div className="faq-grid">
      <div className="faq-item">
        <div className="faq-item-top">
          <span className="faq-no">01</span>
          <div className="faq-q">Do you provide solar systems for homes?</div>
        </div>
        <div className="faq-a">Yes. We provide residential solar panel solutions for homes, villas, and apartments.</div>
      </div>

      <div className="faq-item">
        <div className="faq-item-top">
          <span className="faq-no">02</span>
          <div className="faq-q">Which areas do you serve?</div>
        </div>
        <div className="faq-a">We work across India, and our headquarter is in Kadapa, Andhra Pradesh.</div>
      </div>

      <div className="faq-item">
        <div className="faq-item-top">
          <span className="faq-no">03</span>
          <div className="faq-q">How do I get a quote?</div>
        </div>
        <div className="faq-a">Call us or use the contact page. A site visit helps us recommend the right solar setup accurately.</div>
      </div>

      <div className="faq-item">
        <div className="faq-item-top">
          <span className="faq-no">04</span>
          <div className="faq-q">Do you handle installation and support?</div>
        </div>
        <div className="faq-a">Yes. We handle planning, installation, testing, and support after project completion.</div>
      </div>
    </div>

    <div className="faq-cta">
      <a className="btn btn-solid" href="/contact">
        Enquire Now
      </a>
      <a className="btn btn-outline" href="mailto:brsolar18@gmail.com">
        Email Us
      </a>
    </div>
  </div>
</section>


       

        <section className="cta" aria-label="Final call to action">
  <div className="cta-blur cta-blur-one" />
  <div className="cta-blur cta-blur-two" />

  <div className="cta-inner">
    <div className="cta-panel">
      <div className="cta-pattern" />

      <div className="cta-left">
        <div className="cta-kicker-wrap">
          <div className="cta-kicker">BR SOLAR</div>
          <div className="cta-kicker-line" />
        </div>

        <h2 className="cta-title">Ready to start your solar project?</h2>
        <p className="cta-sub">
          Share your requirement, and we will guide you with the right system, expected savings, and a clean installation timeline.
        </p>

        <div className="cta-features">
          <div className="cta-feature">
            <span className="cta-feature-dot" />
            Smart system recommendation
          </div>
          <div className="cta-feature">
            <span className="cta-feature-dot" />
            Clear savings guidance
          </div>
          <div className="cta-feature">
            <span className="cta-feature-dot" />
            Clean installation support
          </div>
        </div>

        <div className="cta-actions">
          <a className="btn btn-solid" href="/contact">
            Get Quote
          </a>
          <a className="btn btn-outline" href="tel:+9173920789920">
            Call 73920 789920
          </a>
        </div>
      </div>

      <div className="cta-right">
        <div className="cta-image-wrap">
          <img src="/Images/right1.jpg" alt="Solar preview" />
          <div className="cta-image-overlay" />
          <div className="cta-floating-card">
            <div className="cta-floating-title">Solar Planning</div>
            <div className="cta-floating-sub">Built for practical savings and reliable output</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        <Footer />
      </div>
    </div>
  );
}

export default Services;