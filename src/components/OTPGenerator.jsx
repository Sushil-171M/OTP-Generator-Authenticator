import React, { useEffect, useState } from "react";

const OTPGenerator = ({ setGeneratedOTP, setIsExpired }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOTP(otp);
    setTimeLeft(10);
    setIsExpired(false);
    alert(`Your OTP is: ${otp}`);
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearTimeout(timer); // Clear the timer on unmount
    } else if (timeLeft === 0 && setGeneratedOTP) {
      setIsExpired(true); // Mark OTP as expired
    }
  }, [timeLeft, setGeneratedOTP, setIsExpired]);

  return (
    <div>
      <h2>OTP Generator</h2>
      <button onClick={generateOTP}>Generate OTP</button>
    </div>
  );
};

export default OTPGenerator;
