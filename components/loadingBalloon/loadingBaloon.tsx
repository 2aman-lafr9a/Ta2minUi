import React from "react";

const LoadingSpinner: React.FC = () => (
  <div className="main-fader agency">
    <div className="loader">
      <svg viewBox="0 0 866 866" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="160%" y2="0%">
            <stop offset="0%" style={{ stopColor: "transparent" }} />
            <stop offset="100%" style={{ stopColor: "#03e9f4" }} />
          </linearGradient>
        </defs>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 164.83 151.5"
        >
          {/* ... (The paths from the original SVG) ... */}
        </svg>
      </svg>
    </div>
  </div>
);

export default LoadingSpinner;
