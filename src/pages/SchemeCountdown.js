import React, { useEffect, useState } from "react";
import {
  FaHourglassHalf,
  FaClipboardCheck,
  FaSolarPanel,
  FaHeadset
} from "react-icons/fa";
import "./SchemeCountdown.css";

const SCHEME_DEADLINE = new Date("2027-03-31T23:59:59+05:30").getTime();

const calculateTimeRemaining = () => {
  const remainingTime = Math.max(SCHEME_DEADLINE - Date.now(), 0);

  return {
    days: Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
    hours: Math.floor((remainingTime / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((remainingTime / (1000 * 60)) % 60),
    seconds: Math.floor((remainingTime / 1000) % 60),
    expired: remainingTime === 0
  };
};

const formatNumber = (value) => String(value).padStart(2, "0");

function SchemeCountdown() {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const updateCountdown = () => {
      setTimeRemaining(calculateTimeRemaining());
    };

    updateCountdown();

    const interval = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const countdownItems = [
    {
      value: timeRemaining.days,
      label: "Days"
    },
    {
      value: timeRemaining.hours,
      label: "Hours"
    },
    {
      value: timeRemaining.minutes,
      label: "Minutes"
    },
    {
      value: timeRemaining.seconds,
      label: "Seconds"
    }
  ];

  const supportCards = [
    {
      icon: <FaClipboardCheck />,
      title: "Subsidy Guidance",
      description:
        "Support with scheme registration, required documents, application steps, and approval guidance."
    },
    {
      icon: <FaSolarPanel />,
      title: "Professional Installation",
      description:
        "Complete rooftop assessment, system planning, panel installation, testing, and final commissioning."
    },
    {
      icon: <FaHeadset />,
      title: "Ongoing Assistance",
      description:
        "Dependable support before installation, during project execution, and after your solar system goes live."
    }
  ];

  return (
    <section
      className="scheme-countdown-section"
      aria-label="PM Surya Ghar scheme countdown"
    >
      <div className="scheme-countdown-container">
        <div className="scheme-countdown-panel">
          <div className="scheme-countdown-badge">
            <span className="scheme-countdown-badge-icon">
              <FaHourglassHalf />
            </span>
            <span>PM Surya Ghar Scheme</span>
          </div>

          <div className="scheme-countdown-content">
            <h2>Time Left to Get the Benefit of the Scheme</h2>

            <p className="scheme-countdown-description">
              Complete your solar subsidy application before the scheme closes.
            </p>

            <div className="scheme-countdown-date">
              <span>Scheme closing date</span>
              <strong>31 March 2027</strong>
            </div>
          </div>

          {timeRemaining.expired ? (
            <div className="scheme-countdown-closed">
              <FaHourglassHalf />
              <span>The scheme countdown has ended</span>
            </div>
          ) : (
            <div
              className="scheme-countdown-boxes"
              aria-live="polite"
              aria-atomic="true"
            >
              {countdownItems.map((item) => (
                <div className="scheme-countdown-box" key={item.label}>
                  <span className="scheme-countdown-value">
                    {item.label === "Days"
                      ? item.value
                      : formatNumber(item.value)}
                  </span>

                  <span className="scheme-countdown-label">{item.label}</span>
                </div>
              ))}
            </div>
          )}

          <p className="scheme-countdown-timezone">
            Live countdown calculated according to Indian Standard Time
          </p>
        </div>

        <div className="scheme-support-panel">
          <div className="scheme-support-header">
            <span className="scheme-support-kicker">BR Solar Assistance</span>

            <h2>Complete Support for Your Solar Journey</h2>

            <p>
              From subsidy guidance to installation and after-service support,
              our team helps you complete every step smoothly.
            </p>
          </div>

          <div className="scheme-support-grid">
            {supportCards.map((card, index) => (
              <article className="scheme-support-card" key={card.title}>
                <div className="scheme-support-card-top">
                  <div className="scheme-support-icon">{card.icon}</div>
                  <span className="scheme-support-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="scheme-support-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="scheme-support-footer">
            <span className="scheme-support-footer-line" />

            <p>
              Clear guidance, quality installation, and dependable solar
              support from one trusted team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SchemeCountdown;