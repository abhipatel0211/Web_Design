import React, { useState } from "react";
import symbol_vector from "../assets/symbol_vector.png";
import Primarybtn from "./Buttons/primarybtn";
import "./mainpage.css";
import { Link } from "react-router-dom";

const Registrationpage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  // email validation
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // handle submit
  const handleSubmit = () => {
    if (validateEmail(email) === false) {
      setIsValidEmail(false);
    } else {
      window.location.href = "/congratualations";
      // console.log("submitted");
    }
  };

  return (
    <>
      <div className="h-screen w-screen">
        <div className="p-2 flex justify-between item-center mt-6">
          <div className="h-7 flex items-center ml-6">
            <img
              className="h-full bg-white flex items-center"
              src={symbol_vector}
              alt="logo"
            />
          </div>
          <div className="flex gap-2 mr-8">
            <Link to="/">
              <button>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="63"
                    height="63"
                    rx="31.5"
                    stroke="#CACACA"
                  />
                  <g clipPath="url(#clip0_11_215)">
                    <path
                      d="M40 24L24 40"
                      stroke="#0C1319"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24 24L40 40"
                      stroke="#0C1319"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11_215">
                      <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="translate(16 16)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center mt-16">
          <div className="flex flex-col gap-6 monorope">
            <div className="covered-by-your-grace-regular text-[#2DA950] text-4xl flex justify-center">
              Registration form
            </div>
            <div className="text-5xl font-semibold flex flex-col text-center">
              <p>Start your success</p>
              <p>Journey here!</p>
            </div>
            <input
              className={`py-4 px-9 rounded-full ${
                isInputFocused ? "border-[#537FF1]" : ""
              } bg-[#EFEFEF]`}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
            <input
              className={`py-4 px-9 rounded-full ${
                isInputFocused ? "border-[#537FF1]" : ""
              } bg-[#EFEFEF]`}
              type="text"
              placeholder="Enter your email"
              value={email}
              required
              onChange={handleInputChange}
            />
            {!isValidEmail && (
              <p className="email text-[#FF0808] flex text-sm items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                  />
                </svg>
                Enter a valid email address
              </p>
            )}

            <button
              className={`mt-6 rounded-full w-full ${
                email && name ? "" : "disabled"
              }`}
              type="submit"
              onClick={email !== "" && name !== "" ? handleSubmit : null}
            >
              <Primarybtn
                name="Submit"
                isdisabled={
                  name.length === 0 || email.length === 0 ? true : false
                }
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrationpage;
