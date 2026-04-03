import React from "react";
import "./EnquiryButton.css";

export default function EnquiryButton({ onClick }) {
  return (
    <button className="enquiry-float-btn" onClick={onClick} aria-label="Open enquiry form">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 5.5C4 4.67 4.67 4 5.5 4H18.5C19.33 4 20 4.67 20 5.5V14.5C20 15.33 19.33 16 18.5 16H9L5 20V16H5.5C4.67 16 4 15.33 4 14.5V5.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M8 8.5H16M8 11.5H13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
      <span>Enquiry</span>
    </button>
  );
}