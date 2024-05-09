import React, { useState, useEffect } from "react";
import symbol_vector from "../assets/symbol_vector.png";
import "./mainpage.css";

const Congratulations_page = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Countdown effect
    const countdownTimer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown((prevCount) => prevCount - 1);
      } else {
        window.location.href = "/";
      }
    }, 1000);

    return () => clearTimeout(countdownTimer);
  }, [countdown]);

  return (
    <div>
      <div className="p-2 w-screen h-screen flex flex-col items-center justify-center">
        <div className="h-7 flex top-4 left-4 ml-6 absolute">
          {/* logo */}
          <img
            className="h-full bg-white flex items-center"
            src={symbol_vector}
            alt="logo"
          />
        </div>
        <div className="monorope w- flex flex-col justify-center items-center gap-3">
          <div>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40.5" cy="40.5" r="28" fill="white" />
              <path
                d="M40.0014 73.3219C21.5919 73.3219 6.66809 58.3979 6.66809 39.9886C6.66809 21.5791 21.5919 6.65527 40.0014 6.65527C58.4107 6.65527 73.3347 21.5791 73.3347 39.9886C73.3347 58.3979 58.4107 73.3219 40.0014 73.3219ZM36.6768 53.3219L60.2471 29.7517L55.5331 25.0377L36.6768 43.8939L27.2488 34.4656L22.5347 39.1799L36.6768 53.3219Z"
                fill="#28B246"
              />
            </svg>
          </div>
          <div className="covered-by-your-grace-regular text-4xl flex justify-center items-center text-[#2DA950]">
            Success Submitted
          </div>
          <div className="text-5xl">Congratulations</div>
          <div className="text-3xl text-[#727272] flex flex-col text-center">
            <p>Your request has been successfully submitted to us. We</p>
            <p> will validate your information and reach out to your</p>
            <p> shortly with updates</p>
          </div>
        </div>
        {/* Display countdown */}
        <div className="absolute bottom-10 flex gap-2 items-center justify-center">
          <p className="text=[#727272]">Redirecting you to Homepage in </p>
          <p className="text-[#1C1C1C] font-bold">{countdown} Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Congratulations_page;
