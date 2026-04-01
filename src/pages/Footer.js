import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => setOpenIndex(openIndex === index ? null : index);

  const quickLinks = useMemo(
    () => [
      { label: "Home", to: "/" },
      { label: "Products", to: "/products" },
      { label: "Services", to: "/services" },
      { label: "About", to: "/about" },
      { label: "Contact Us", to: "/contact" },
    ],
    []
  );

  const services = useMemo(
    () => [
      "Residential Solar Panels",
      "Commercial Solar Panels",
      "Industrial Solar Panels",
      "Agricultural Solar Panels",
      "Solar Installation & Support",
    ],
    []
  );

  const locations = useMemo(() => ["Kurnool", "Andhra Pradesh"], []);

  const social = useMemo(
    () => [{ label: "Instagram", href: "https://www.instagram.com/", icon: <FaInstagram /> }],
    []
  );

  const address = "Kurnool, Andhra Pradesh";

  const mobileSections = useMemo(
    () => [
      { title: "Quick Links", type: "links", items: quickLinks },
      { title: "Services", type: "text", items: services },
      { title: "Locations", type: "locations", items: locations },
      {
        title: "Contact",
        type: "contact",
        items: [
          { icon: <FaPhoneAlt />, label: "73920 78920", href: "tel:+917392078920" },
          { icon: <FaPhoneAlt />, label: "7995050203", href: "tel:+917995050203" },
          { icon: <FaEnvelope />, label: "brsolar18@gmail.com", href: "mailto:brsolar18@gmail.com" },
          { icon: <FaMapMarkerAlt />, label: address, href: "https://maps.google.com/?q=Kurnool%20Andhra%20Pradesh" },
        ],
      },
    ],
    [address, quickLinks, services, locations]
  );

  return (
    <footer className="footer-final">
      <div className="footer-shell-final">
        <div className="footer-desktop-final">
          <div className="footer-col-final footer-brand-final">
            <div className="brand-stack-final">
              <img className="brand-logo3-final" src="/Images/logo.svg" alt="BR Solar" />
              <div className="brand-text-final">
                <h2 className="brand-title-final">BR SOLAR</h2>
                <p className="brand-subtitle-final">Clean Energy at Your Doorstep</p>
              </div>
            </div>

            <div className="brand-owner-final">
              <div className="owner-badge-final">Solar Solutions</div>
              <div className="owner-name-final">Powering Homes, Businesses, and Farms</div>
            </div>

            <div className="brand-contact-final">
              <a className="footer-link-final" href="tel:+917392078920">
                <FaPhoneAlt />
                <span>73920 78920</span>
              </a>
              <a className="footer-link-final" href="tel:+917995050203">
                <FaPhoneAlt />
                <span>7995050203</span>
              </a>
              <a className="footer-link-final" href="mailto:brsolar18@gmail.com">
                <FaEnvelope />
                <span>brsolar18@gmail.com</span>
              </a>
              <a
                className="footer-link-final"
                href="https://maps.google.com/?q=Kurnool%20Andhra%20Pradesh"
                target="_blank"
                rel="noreferrer"
              >
                <FaMapMarkerAlt />
                <span>{address}</span>
              </a>
            </div>

            <div className="brand-social-final">
              {social.map((s) => (
                <a
                  key={s.label}
                  className="social-btn-final"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col-final">
            <h3 className="footer-h-final">Quick Links</h3>
            <ul className="footer-list-final">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link className="footer-btn-final" to={l.to}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col-final">
            <h3 className="footer-h-final">Services</h3>
            <ul className="footer-list-final">
              {services.map((t) => (
                <li key={t}>
                  <span className="footer-text-final">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col-final">
            <h3 className="footer-h-final">Locations</h3>
            <ul className="footer-list-final">
              {locations.map((loc) => (
                <li key={loc}>
                  <span className="footer-text-final">{loc}</span>
                </li>
              ))}
              <li>
                <a
                  className="footer-btn-final footer-more-final"
                  href="https://maps.google.com/?q=Kurnool%20Andhra%20Pradesh"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on Map
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-mobile-final">
          <div className="brand-stack-final brand-stack-mobile-final">
            <img className="brand-logo3-final" src="/Images/logo.svg" alt="BR Solar" />
            <div className="brand-text-final">
              <div className="brand-title-sm-final">BR SOLAR</div>
              <div className="brand-subtitle-sm-final">Clean Energy at Your Doorstep</div>
            </div>
          </div>

          <div className="mobile-owner-final">
            <div className="owner-badge-final">Solar Solutions</div>
            <div className="owner-name-final">Powering Homes, Businesses, and Farms</div>
          </div>

          <div className="mobile-accordion-final">
            {mobileSections.map((sec, idx) => (
              <div className="acc-sec-final" key={sec.title}>
                <button
                  type="button"
                  className="acc-head-final"
                  onClick={() => toggleSection(idx)}
                  aria-expanded={openIndex === idx}
                >
                  <span>{sec.title}</span>
                  <span className="acc-icon-final">{openIndex === idx ? "−" : "+"}</span>
                </button>

                <div className={`acc-body-final ${openIndex === idx ? "open" : ""}`}>
                  {sec.type === "links" && (
                    <ul className="footer-list-final">
                      {sec.items.map((l) => (
                        <li key={l.label}>
                          <Link className="footer-btn-final" to={l.to} onClick={() => setOpenIndex(null)}>
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.type === "text" && (
                    <ul className="footer-list-final">
                      {sec.items.map((t) => (
                        <li key={t}>
                          <span className="footer-text-final">{t}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.type === "locations" && (
                    <ul className="footer-list-final">
                      {sec.items.map((loc) => (
                        <li key={loc}>
                          <span className="footer-text-final">{loc}</span>
                        </li>
                      ))}
                      <li>
                        <a
                          className="footer-btn-final footer-more-final"
                          href="https://maps.google.com/?q=Kurnool%20Andhra%20Pradesh"
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => setOpenIndex(null)}
                        >
                          View on Map
                        </a>
                      </li>
                    </ul>
                  )}

                  {sec.type === "contact" && (
                    <div className="contact-stack-final">
                      {sec.items.map((c, i) => (
                        <a
                          key={i}
                          className="footer-link-final"
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                        >
                          {c.icon}
                          <span>{c.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="brand-social-final mobile-social-final">
            {social.map((s) => (
              <a
                key={s.label}
                className="social-btn-final"
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom-final">
          <div className="footer-bottom-left-final">
            <span className="mini-dot-final" />
            <span>© {new Date().getFullYear()} BR SOLAR</span>
          </div>

          <div className="footer-bottom-right-final">
            <span className="tag-final tag-sun-final">Clean Energy</span>
            <span className="tag-final">Solar Panels</span>
            <span className="tag-final">Andhra Pradesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;