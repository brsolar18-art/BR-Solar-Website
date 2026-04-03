import React, { useEffect, useRef, useState } from "react";
import "./EnquiryPopup.css";

export default function EnquiryPopup({ isOpen, onClose }) {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    category: "",
    message: ""
  });

  const services = [
    "Residential Solar Panels",
    "Commercial Solar Panels",
    "Industrial Solar Panels",
    "Agricultural Solar Panels",
    "Solar Installation & Support"
  ];

  useEffect(() => {
    if (!isOpen) {
      setSuccessVisible(false);
    }
  }, [isOpen]);

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

  const resetForm = () => {
    setPhone("");
    setFormData({
      name: "",
      email: "",
      title: "",
      category: "",
      message: ""
    });
    formRef.current?.reset();
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
          source: "popup-enquiry"
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit form");
      }

      setSuccessVisible(true);
      resetForm();
    } catch (error) {
      alert(error.message || "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="enquiry-overlay">
      <div className="enquiry-modal">
        <button className="enquiry-close" onClick={onClose} aria-label="Close enquiry form">
          ×
        </button>

        <div className="enquiry-shell">
          <div className="enquiry-left">
            <div className="enquiry-badge">BR Solar</div>
            <h2>Bright Energy For Every Roof</h2>
            <p>
              Get a quick solar consultation for residential, commercial, industrial, and agricultural projects.
            </p>

            <div className="enquiry-points">
              <div className="enquiry-point">
                <span className="enquiry-point-dot"></span>
                <span>Smart solar planning</span>
              </div>
              <div className="enquiry-point">
                <span className="enquiry-point-dot"></span>
                <span>Fast installation support</span>
              </div>
              <div className="enquiry-point">
                <span className="enquiry-point-dot"></span>
                <span>Reliable long term service</span>
              </div>
            </div>

            <div className="enquiry-brand-card">
              <div className="enquiry-brand-top">Powering a Greener Tomorrow</div>
              <div className="enquiry-brand-name">BR Solar</div>
            </div>
          </div>

          <div className="enquiry-right">
            <div className="enquiry-header">
              <h3>Send Enquiry</h3>
              <p>Share your requirement and our team will get in touch soon.</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="enquiry-form">
              <div className="enquiry-row">
                <div className="enquiry-field">
                  <label>Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="enquiry-field">
                  <label>Phone</label>
                  <input
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

              <div className="enquiry-row">
                <div className="enquiry-field">
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="enquiry-field">
                  <label>Subject</label>
                  <input
                    name="title"
                    type="text"
                    placeholder="Eg: Residential solar setup"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="enquiry-field">
                <label>Service</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="enquiry-field">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us your requirement"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="enquiry-submit" disabled={loading}>
                {loading ? "Sending..." : "Submit Enquiry"}
              </button>
            </form>
          </div>
        </div>

        {successVisible && (
          <div className="enquiry-success">
            <div className="enquiry-success-box">
              <div className="enquiry-success-badge">BR Solar</div>
              <h3>Submitted Successfully</h3>
              <p>Thank you for contacting us. Our team will reach you soon.</p>
              <button
                onClick={() => {
                  setSuccessVisible(false);
                  onClose();
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}