// Import necessary modules and components
'use client';
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import "./style.css";
import { toast } from "react-hot-toast";

// Define the LandingPage component
const LandingPage = () => {
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const router = useRouter();

  const redirectTo = (path: string) => {
    router.push(path);
    console.log(path);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    // Add your form submission logic here if needed
  };

  return (
    <div
      className="login-box signin"
      style={{
        fontFamily: "sans-serif",
        fontWeight: "550",
        fontSize: "30px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="buttun">
          <button type="submit" onClick={() => redirectTo('/auth/signup/agency')}>
            <span />
            <span />
            <span />
            <span />
            Agency
          </button>
        </div>
        <div className="buttun" onClick={() => redirectTo('/auth/signup/teammanager')}>
          <button type="submit">
            <span />
            <span />
            <span />
            <span />
            Team Manager
          </button>
        </div>
        <div className="buttun" onClick={() => redirectTo('/auth/signin')}>
          <button type="submit">
            <span />
            <span />
            <span />
            <span />
            Signin
          </button>
        </div>
      </form>
      <div className="main-fader">
        <div className="loader">
          {/* ... (existing loader SVG) */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
