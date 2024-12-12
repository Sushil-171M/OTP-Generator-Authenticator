import React, { useState } from "react";

const OTPAuthenticator = ({ generatedOTP, isExpired }) => {
  const [userOTP, setUserOTP] = useState("");
  const [message, setMessage] = useState("");

  const handleOTPSubmit = () => {
    if (userOTP.length === 6) {
      if (userOTP === generatedOTP) {
        setMessage("OTP is valid!");
      } else {
        setMessage("Invalid OTP. Please try again.");
      }
    } else {
      setMessage("Please enter 6 Digit OTP !");
    }
  };

  return (
    <div>
      <h2>OTP Authenticator</h2>

      <input
        type="text"
        placeholder="Enter OTP"
        value={userOTP}
        onChange={(e) => setUserOTP(e.target.value)}
      />
      <div style={{ margin: "5px" }}>
        <button onClick={handleOTPSubmit} disabled={isExpired}>
          Validate OTP
        </button>
        <div>
          {isExpired && <em>OTP has been expired !! Generate again!!</em>}
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default OTPAuthenticator;
