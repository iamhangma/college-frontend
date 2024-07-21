import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../App.css"; 

const EmailVerification = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();

  const handleCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Verification code submitted:", verificationCode);
    navigate('/therapyprocess');
  };

  const handleResendCode = () => {
    console.log("Resend verification code");
  };

  const handleUpdateEmail = () => {
    console.log("Update email address");
  };

  return (
    <div className="verification-container">
      <h1 className="verification-title">Check your email</h1>
      <p className="verification-instructions">
        We sent you an email containing a 4-digit verification code. You can use
        the button below to open your email.
      </p>
      {/* <button className="btn btn-primary" onClick={handleOpenEmail}>Check your email</button> */}
      <p className="verification-prompt">Enter your verification code</p>
      <form onSubmit={handleSubmit} className="verification-form">
        <div className="d-flex justify-content-center w-100">
          <input
            type="text"
            className="form-control mb-2 w-25"
            value={verificationCode}
            onChange={handleCodeChange}
            style={{
              borderRadius: "12px",
            }}
          />
        </div>
        <div className="d-flex justify-content-center w-100">
          <button type="submit" className="btn btn-danger w-25">
            Submit
          </button>
        </div>
      </form>
      <p className="verification-instructions">
        If the code isn't in your inbox, please check your spam folder.
      </p>
      <div className="d-flex justify-content-center align-items-center flex-column gap-2">
        <button
          className="btn btn-link w-100"
          onClick={handleResendCode}
          style={{
            whiteSpace: "nowrap",
            background: "#ECEE93",
            color: "black"
          }}
        >
          Resend verification code
        </button>
        <button
          className="btn btn-link w-100"
          onClick={handleUpdateEmail}
          style={{
            background: "#ECEE93",
            color: "black"
          }}
        >
          Update email address
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;
