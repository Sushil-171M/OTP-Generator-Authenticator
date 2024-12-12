import React, { useState } from "react";
import OTPGenerator from "./OTPGenerator";
import OTPAuthenticator from "./OTPAuthenticator";

function AppMain() {
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [isExpired, setIsExpired] = useState(false);

  const handleIsExpired = (value) => {
    setIsExpired(value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <OTPGenerator
        setGeneratedOTP={setGeneratedOTP}
        setIsExpired={handleIsExpired}
      />
      {generatedOTP && (
        <OTPAuthenticator generatedOTP={generatedOTP} isExpired={isExpired} />
      )}
    </div>
  );
}

export default AppMain;
