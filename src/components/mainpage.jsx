import React, { useState } from "react";
import Primarybtn from "./Buttons/primarybtn";
import Secondary from "./Buttons/secondary";
import symbol_vector from "../assets/symbol_vector.png";
import Mask_group from "../assets/Mask_group.png";
// import spikes from "../assets/spark, sparkle, 26.svg"
import "./mainpage.css";
import { Link } from "react-router-dom";

const Mainpage = () => {
  const [visibleAnswers, setVisibleAnswers] = useState({});

  const toggleAnswer = (questionId) => {
    setVisibleAnswers({
      ...visibleAnswers,
      [questionId]: !visibleAnswers[questionId],
    });
  };

  return (
    <div className="flex flex-col gap-6  m-4 ">
      {/* Header part */}
      <div className="p-2 flex justify-between item-center border border-solid rounded-full h-min">
        <div className="h-7 m-4 flex items-center ml-10">
          <img
            className="h-full bg-white flex items-center"
            src={symbol_vector}
            alt="logo"
          />
        </div>
        <div className="flex gap-2 items-center">
          <button className="text-sm w-40">
            <Secondary name="Get Project" />
          </button>
          <Link to="/register">
            <button className="text-sm w-40">
              <Primarybtn name="Onboard Talent" />
            </button>
          </Link>
        </div>
      </div>
      {/* Body part-1 */}
      <div>
        <div>
          <div className="covered-by-your-grace-regular text-3xl text-green-600 flex justify-center">
            success stories
          </div>
          <div className="manrope text-5xl flex flex-col font-weight-600">
            <p className="flex justify-center">Every success journey</p>
            <p className="flex justify-center">we’ve encountered.</p>
          </div>
        </div>
        <div className="flex my-40">
          <div className="flex-1">
            <div className="relative pl-60">
              <img className="h-auto" src={Mask_group} alt="image" />
              <div className="absolute ml-24 top-28 shadow-2xl left-0 h-60 w-60 bg-white rounded-3xl">
                <svg
                  width="103"
                  height="103"
                  viewBox="0 0 103 103"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.1859 46.4413C29.7668 47.0822 30.3446 47.7255 30.9061 48.3851C31.2077 48.7311 31.5068 49.0823 31.8308 49.4068C33.5621 51.1369 35.3154 52.8474 37.0044 54.6197C38.039 55.7157 39.0622 56.8225 40.0739 57.94L41.5861 59.6208L43.0793 61.3183C43.3725 61.6697 43.6367 62.0441 43.8694 62.4377C43.972 62.5946 44.0354 62.7738 44.0544 62.9603C44.0734 63.1469 44.0474 63.3355 43.9786 63.5107C43.7988 63.9999 43.2619 64.1319 42.77 63.7545C42.4562 63.5013 42.1757 63.2098 41.9351 62.8869C41.3727 62.162 40.7814 61.464 40.161 60.7928C39.5431 60.1194 38.8975 59.4713 38.224 58.8487C37.8526 58.5047 37.4441 58.1668 37.1621 57.761C36.2596 56.4657 35.0968 55.3913 34.0957 54.1804C33.3509 53.2808 32.5366 52.4366 31.7638 51.5587L29.6945 49.2123C29.0003 48.4343 28.3251 47.6381 27.6329 46.8574C27.372 46.5456 27.1321 46.2171 26.9148 45.8738C26.7175 45.544 26.5387 45.2035 26.3795 44.8539C26.2379 44.5449 26.4146 44.4042 26.7546 44.5948C27.2419 44.8692 27.709 45.1773 28.1527 45.5166C28.3351 45.6558 28.5101 45.8061 28.6787 45.9637C28.8404 46.1279 29.0027 46.2926 29.164 46.4564L29.1859 46.4413Z"
                    fill="black"
                  />
                  <path
                    d="M51.6312 34.9063L51.9159 35.9745L52.1748 37.0511C52.2673 37.4316 52.3601 37.8141 52.4848 38.1848C52.6499 38.6797 52.8211 39.1726 52.9943 39.6648L53.5051 41.1436L54.5327 44.0978L55.7889 47.7383L57.0653 51.3722C57.1844 51.7439 57.2764 52.1238 57.3407 52.5089C57.3736 52.6656 57.3691 52.828 57.3276 52.9832C57.2861 53.1383 57.2087 53.2819 57.1017 53.4024C56.8134 53.7414 56.35 53.6858 56.0677 53.2325C55.8906 52.9339 55.7532 52.6137 55.6586 52.2798C55.1991 50.7722 54.644 49.2956 53.9967 47.8587C53.7927 47.4711 53.634 47.0615 53.5237 46.6376C53.257 45.3034 52.7206 44.0516 52.3761 42.7424C52.121 41.7699 51.7955 40.8143 51.5353 39.8417C51.0781 38.1055 50.6384 36.366 50.2627 34.6105C50.1129 33.9456 50.0749 33.26 50.1503 32.5814C50.1823 32.2877 50.4075 32.2459 50.5799 32.5291C50.8237 32.9366 51.0404 33.3598 51.2284 33.7957C51.377 34.159 51.5037 34.5309 51.6078 34.9093L51.6312 34.9063Z"
                    fill="black"
                  />
                  <path
                    d="M75.1791 37.6372C74.9739 38.2443 74.7658 38.8509 74.5549 39.4568C74.429 39.7738 74.3222 40.0978 74.2349 40.4271C74.0217 41.3087 73.828 42.1952 73.6346 43.0811C73.44 43.9668 73.24 44.8504 73.0257 45.7302C72.7642 46.8142 72.4914 47.8952 72.2211 48.9768L71.3921 52.2171C71.2943 52.5454 71.1565 52.8609 70.9819 53.1565C70.8246 53.4466 70.4919 53.5812 70.0897 53.62C69.5037 53.6765 68.968 53.3605 68.9376 52.8861C68.9279 52.5829 68.9816 52.2807 69.0954 51.9986C69.5646 50.7066 69.8793 49.3651 70.0332 48.0019C70.0773 47.6239 70.0935 47.2225 70.2648 46.8871C70.8065 45.8155 70.9718 44.6394 71.3867 43.5343C71.6919 42.7128 71.9188 41.8654 72.2083 41.0384C72.4663 40.3009 72.73 39.5656 72.9994 38.8325L73.8532 36.648C74.0728 36.077 74.4262 35.5655 74.8839 35.1562C74.9276 35.1121 74.9835 35.0819 75.0444 35.0695C75.1054 35.0571 75.1685 35.063 75.2258 35.0866C75.2831 35.1101 75.3319 35.1501 75.366 35.2016C75.4 35.253 75.4178 35.3134 75.417 35.3751C75.4324 35.7939 75.4227 36.2134 75.3881 36.6313C75.3341 36.9681 75.2552 37.3006 75.1521 37.6261L75.1791 37.6372Z"
                    fill="black"
                  />
                  <path
                    d="M86.2467 53.226C86.1272 53.3506 86.0123 53.4794 85.885 53.597L85.5015 53.9487C85.3628 54.0695 85.2346 54.2017 85.118 54.3437C84.8209 54.7336 84.5376 55.1359 84.234 55.5199C83.9347 55.9076 83.6332 56.2935 83.3184 56.6675C82.9313 57.1286 82.5365 57.5828 82.1268 58.0236L80.8982 59.3464C80.7597 59.4759 80.5983 59.5786 80.4222 59.6494C80.254 59.7288 79.9999 59.6487 79.7191 59.4875C79.3101 59.2526 79.0138 58.848 79.0922 58.5905C79.1461 58.4346 79.2482 58.2995 79.384 58.2046C79.9697 57.7512 80.4598 57.1875 80.8259 56.5461C80.9298 56.3677 81.0144 56.1608 81.1976 56.0616C81.7776 55.7401 82.1138 55.1923 82.6035 54.7875C82.9698 54.489 83.2655 54.123 83.6224 53.8145C84.2559 53.2617 84.8745 52.6957 85.5285 52.1618C85.7958 51.9368 86.1263 51.7995 86.4744 51.769C86.5172 51.766 86.56 51.7723 86.5999 51.7875C86.6399 51.8028 86.6759 51.8265 86.7055 51.857C86.7352 51.8876 86.7577 51.9243 86.7715 51.9645C86.7853 52.0047 86.7901 52.0475 86.7855 52.0899C86.7562 52.2056 86.7225 52.3208 86.6849 52.4339C86.6503 52.5458 86.6061 52.6545 86.5529 52.7589C86.4594 52.9184 86.3515 53.0691 86.2304 53.2091L86.2467 53.226Z"
                    fill="black"
                  />
                  <path
                    d="M26.1184 72.4885C26.5269 72.549 26.9341 72.6136 27.3398 72.6823C27.5537 72.724 27.77 72.7529 27.9876 72.7687C28.5679 72.7859 29.149 72.8095 29.7303 72.8441C30.3113 72.8811 30.8903 72.9401 31.4672 73.0212C32.1758 73.1284 32.8814 73.2568 33.5805 73.4148C34.2795 73.5726 34.9737 73.7492 35.6632 73.9447C35.8738 74.0151 36.0707 74.1203 36.2457 74.256C36.4217 74.3784 36.4794 74.6378 36.4658 74.951C36.4456 75.4072 36.1899 75.826 35.8916 75.8551C35.7047 75.8653 35.5185 75.8274 35.3512 75.7449C34.5824 75.4031 33.7519 75.2171 32.9082 75.1976C32.6741 75.1893 32.4253 75.2122 32.2186 75.1093C31.5565 74.7767 30.8212 74.7793 30.1244 74.6C29.8646 74.5349 29.6014 74.4838 29.3359 74.447C29.0712 74.4045 28.8053 74.3701 28.5408 74.3245C27.5977 74.1629 26.6488 74.0089 25.6917 73.8986C25.2908 73.8394 24.9203 73.6539 24.6348 73.3692C24.4875 73.2439 24.4989 73.0428 24.6776 72.8796L24.8693 72.7381C24.898 72.7146 24.9311 72.697 24.9666 72.6861L25.0643 72.6502C25.1935 72.6038 25.3254 72.5653 25.4593 72.5347C25.567 72.5111 25.6769 72.499 25.7871 72.4986C25.8965 72.503 26.006 72.5122 26.1152 72.5148L26.1184 72.4885Z"
                    fill="black"
                  />
                </svg>
                <p className="absolute top-16 left-12 flex-col mr-12">
                  <p className="text-5xl font-semibold ">40%</p>
                  <p className="monorope text-sm text-[#828282]">
                    Achieved reduction in project execution time by optimising
                    team availability
                  </p>
                </p>
              </div>
              <p className="absolute bottom-10 left-52 shadow-2xl mr-12 flex items-center gap-4  bg-white rounded-full p-4">
                <p className="bg-[#DDEFE0] rounded-full p-2 ">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.1587 23.9525C13.11 24.1462 11.8912 28.71 5.18749 28.71C4.92227 28.71 4.66792 28.6046 4.48038 28.4171C4.29284 28.2295 4.18749 27.9752 4.18749 27.71C4.18749 21.0062 8.75124 19.7875 8.94499 19.7387C9.20241 19.6744 9.47484 19.715 9.70235 19.8515C9.92985 19.9881 10.0938 20.2094 10.1581 20.4669C10.2224 20.7243 10.1818 20.9967 10.0453 21.2242C9.90875 21.4517 9.68741 21.6157 9.42999 21.68C9.31749 21.7112 6.62749 22.4975 6.23499 26.6625C10.4 26.27 11.1875 23.585 11.22 23.46C11.2863 23.2029 11.452 22.9827 11.6807 22.8477C11.9094 22.7128 12.1823 22.6743 12.4394 22.7406C12.6965 22.8069 12.9167 22.9726 13.0516 23.2013C13.1865 23.43 13.225 23.7029 13.1587 23.96V23.9525ZM24.7837 15.5275L24.1875 16.1237V23.415C24.189 23.6786 24.138 23.9399 24.0376 24.1837C23.9372 24.4275 23.7893 24.6489 23.6025 24.835L19.3125 29.1225C19.1275 29.3088 18.9074 29.4566 18.665 29.5575C18.4226 29.6583 18.1626 29.7101 17.9 29.71C17.6833 29.7099 17.468 29.6749 17.2625 29.6062C16.9096 29.4895 16.5964 29.2764 16.3583 28.991C16.1202 28.7056 15.9666 28.3593 15.915 27.9912L15.2437 23.18L9.71749 17.6537L4.90874 16.9825C4.54017 16.9308 4.19333 16.7773 3.90724 16.5392C3.62116 16.3012 3.40718 15.988 3.28937 15.6349C3.17156 15.2819 3.15459 14.903 3.24038 14.5408C3.32618 14.1787 3.51132 13.8477 3.77499 13.585L8.06249 9.29498C8.24858 9.10821 8.46996 8.96031 8.71374 8.85988C8.95752 8.75945 9.21883 8.70849 9.48249 8.70998H16.7737L17.37 8.11373C20.705 4.77998 24.7225 4.63623 26.2962 4.72998C26.7838 4.75961 27.2437 4.96667 27.5891 5.31208C27.9345 5.6575 28.1416 6.11739 28.1712 6.60498C28.2625 8.17373 28.1187 12.1925 24.785 15.5275H24.7837ZM14.7737 10.71H9.48249L5.18749 15.0025L9.83124 15.65L14.7737 10.71ZM22.1875 18.1237L17.2462 23.065L17.8962 27.71L22.1875 23.415V18.1237Z"
                      fill="#2DA950"
                    />
                  </svg>
                </p>
                <p className="flex flex-col item-center">
                  <p className="text-xl font-semibold ">10 DAYS</p>
                  <p className="monorope text-sm text-[#828282]">
                    Staff Deployment
                  </p>
                </p>
              </p>
              <p className="absolute -bottom-10 -right-20 flex flex-col mr-12 bg-[#002E18] text-white rounded-3xl  p-8 gap-2">
                <p className="flex monorope ">
                  <p className="text-5xl font-semibold">$0.5 </p>
                  <p className="flex items-end text-[#A6A3A0]"> MILLION</p>
                </p>
                <p className="monorope text-sm w-40 text-[#A6A3A0]">
                  Reduced client expenses by saving on hiring and employee
                  costs.
                </p>
              </p>
            </div>
          </div>
          <div className="flex-1 text-black  flex-col gap-3 relative">
            <div className="h-full w-full flex justify-center">
              <div className="flex flex-col gap-10 mt-20">
                <div className="monorope font-semibold text-4xl w-96 flex-col gap-5">
                  Enhance fortune 50 company’s insights teams research
                  capabilities
                </div>

                {/* carousel dots */}
                <div className="group hover:cursor-pointer flex gap-3 m-2">
                  <p className="h-2 w-2 rounded-full bg-green-500"></p>
                  <p className="h-2 w-2 rounded-full bg-[#E4E3E3] group-hover:bg-[#CAD0CB]"></p>
                  <p className="h-2 w-2 rounded-full bg-[#E4E3E3]"></p>
                </div>
                {/* explore btn */}
                <div className="flex absolute bottom-0 ">
                  <div className="flex justify-center h-20 w-60">
                    <Primarybtn name="Explore More">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.1716 6.9999L-5.92571e-07 6.9999L-7.67416e-07 8.9999L12.1716 8.9999L6.8076 14.3638L8.2218 15.778L16 7.9999L8.2218 0.221679L6.8076 1.63589L12.1716 6.9999Z"
                          fill="white"
                        />
                      </svg>
                    </Primarybtn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Body part-2 */}
      <div className="bg-[#E8EEE7] flex rounded-3xl">
        <div className="flex-1">
          <div>
            <div className="m-14">
              <p className="covered-by-your-grace-regular text-xl text-[#9E9D9D] ">
                What’s on your mind
              </p>
              <p className="font-semibold text-4xl">Ask Questions</p>
            </div>
            <svg
              width="491"
              height="475"
              viewBox="0 0 491 475"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M251.005 123.04H14.5072V0H255.167C369.093 0 401.151 14.6756 444.456 57.9807C477.934 91.7389 490.999 135.444 490.999 205.385V514.607H349.717V205.385C349.717 204.652 349.706 203.921 349.685 203.191L275.051 253.194L275.078 253.215L144.958 340.344C136.345 346.116 130.769 355.335 130.769 365.723C130.769 383.206 146.563 397.378 166.047 397.378L166.077 397.393H283.781V514.592H166.077H166.05C74.3429 514.592 0 447.884 0 365.596C0 313.559 29.7294 267.753 74.779 241.107L251.005 123.04Z"
                fill="url(#paint0_linear_0_212)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_212"
                  x1="245.5"
                  y1="2.84126e-08"
                  x2="245"
                  y2="457.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex-1 mx-16">
          <div className="faq-item text-[#1C1C1C]">
            <div
              className="question flex items-center cursor-pointer w-full justify-between mt-24 font-semibold text-lg mr-20"
              onClick={() => toggleAnswer("question1")}
            >
              <span className="question-text w-96">
                Do you offer freelancers?
              </span>
              <span className="toggle-icon">
                {visibleAnswers["question1"] ? "-" : "+"}
              </span>
            </div>
            {visibleAnswers["question1"] && (
              <div className="answer  flex items-center cursor-pointer justify-between w-full">
                Answer goes here
              </div>
            )}
          </div>
          <hr className="w-full border-solid border-[#D7D7D7] my-5" />

          {/* Question 2 */}
          <div className="faq-item">
            <div
              className="question flex items-center cursor-pointer justify-between w-full font-semibold text-lg"
              onClick={() => toggleAnswer("question2")}
            >
              <span className="question-text w-96">
                What’s the guarantee that I will be satisfied with the hired
                talent?
              </span>
              <span className="toggle-icon">
                {visibleAnswers["question2"] ? "-" : "+"}
              </span>
            </div>
            {visibleAnswers["question2"] && (
              <div className="answer ">Another answer goes here</div>
            )}
          </div>
          <hr className="w-full border-solid border-[#D7D7D7] my-5" />

          {/* Question 3 */}
          <div className="faq-item">
            <div
              className="question flex items-center cursor-pointer justify-between w-full font-semibold text-lg"
              onClick={() => toggleAnswer("question3")}
            >
              <span className="question-text w-96">
                Can I hire multiple talents at once?
              </span>
              <span className="toggle-icon">
                {visibleAnswers["question3"] ? "-" : "+"}
              </span>
            </div>
            {visibleAnswers["question3"] && (
              <div className="answer ">
                If unhappy with a project, communicate with the freelancer,
                allow for revisions, and refer to the agreement. Escalate to
                platform support if needed, considering mediation. Review
                policies, seek collaborative solutions for resolution.
              </div>
            )}
          </div>
          <hr className="w-full border-solid border-[#D7D7D7] my-5" />

          {/* Question 4 */}
          <div className="faq-item">
            <div
              className="question flex items-center cursor-pointer justify-between w-full font-semibold text-lg"
              onClick={() => toggleAnswer("question4")}
            >
              <span className="question-text w-96">
                Can I hire multiple talents at once?
              </span>
              <span className="toggle-icon">
                {visibleAnswers["question4"] ? "-" : "+"}
              </span>
            </div>
            {visibleAnswers["question4"] && (
              <div className="answer ">
                If unhappy with a project, communicate with the freelancer,
                allow for revisions, and refer to the agreement. Escalate to
                platform support if needed, considering mediation. Review
                policies, seek collaborative solutions for resolution.
              </div>
            )}
          </div>
          <hr className="w-full border-solid border-[#D7D7D7] my-5" />
          {/* Question 5 */}
          <div className="faq-item">
            <div
              className="question flex items-center cursor-pointer justify-between w-full font-semibold text-lg"
              onClick={() => toggleAnswer("question5")}
            >
              <span className="question-text w-96">
                Why should I not go to an agency directly?
              </span>
              <span className="toggle-icon">
                {visibleAnswers["question5"] ? "-" : "+"}
              </span>
            </div>
            {visibleAnswers["question5"] && (
              <div className="answer ">
                If unhappy with a project, communicate with the freelancer,
                allow for revisions, and refer to the agreement. Escalate to
                platform support if needed, considering mediation. Review
                policies, seek collaborative solutions for resolution.
              </div>
            )}
          </div>
          <hr className="w-full border-solid border-[#D7D7D7] my-5" />
        </div>
      </div>

      {/* Footer part */}
      <div className="bg-gray-200 p-2 flex justify-between item-center border border-solid rounded-2xl px-10 py-8 text-xs">
        <div>&copy; Talup 2023. All rights reserved</div>
        <div className="flex gap-5 underline">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
