import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../images/work/1.png";
import logo2 from "../../images/work/2.png";
import logo3 from "../../images/work/3.png";
import logo4 from "../../images/work/4.png";

const Expriences = [
  {
    date: "Jan 2025 - Feb 2025",  
    logo: logo2,
    position: " Front-end Developer",
    companyName: "Alit Technologies",
    workFrom: "Indore",
    link: "https://alittech.com/",
  },
  {
    date: "Aug 2023 - Dec 2024",
    logo: logo2,
    position: "Front-end Developer",
    companyName: "Creysto",
    workFrom: "Indore",
    link: "https://creysto.com/",
  },
  {
    date: "Jun 2023 - Aug 2023",
    logo: logo1,
    position: "Front-end Developer",
    companyName: "Stackkaroo",
    workFrom: "Remote",
    link: "https://www.stackkaroo.com",
  },
];

const Exprience = (props) => {
  return (
    <section className="section-wrap bg-[#191919] overflow-hidden z-50">
      <div className="wraper">
        <div className="max-w-[640px] mx-auto text-center text-white mb-[60px] md:mb-[40px]">
          <h2 className="heading-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">
            "Where I Worked Till Now"
          </h2>
          <p className="base-font text-lg font-normal">
            My experience includes building scalable applications, optimizing
            performance, and integrating robust APIs, focusing on seamless user
            experiences and client satisfaction
          </p>
        </div>
        <div className="grid grid-rows-1">
          {Expriences.map((exprience, exp) => (
            <ul
              key={exp}
              className="flex items-center justify-between sm:flex-wrap col:block mb-8
             bg-[#282828] px-[70px] md:px-[30px] py-[20px] rounded-lg border transition border-transparent hover:border hover:border-[#494949]"
            >
              <li className="base-font text-white font-bold text-3xl sm:w-1/2 sm:text-[16px] col:w-full col:text-center col:mb-[10px]">
                {exprience.date}
              </li>
              {/* <li><img src={exprience.logo} alt='logo'
                                className="sm:w-1/2 col:w-full col:text-center max-w-[100px] col:mx-auto" /></li> */}
              <li className="sm:w-1/2 col:w-full col:text-center col:mt-[20px]">
                <h2 className="base-font text-white font-bold text-2xl sm:text-[16px] ">
                  {exprience.position}
                </h2>
                <p className="base-font text-[#DD584F] font-normal text-[15px] sm:text-[14px]">
                  {exprience.companyName} - {exprience.workFrom}
                </p>
              </li>
              <li className="col:text-center col:mt-[10px]">
                <a
                  href={exprience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[16px] font-bold transition hover:text-[#FFE600] sm:w-1/2 sm:text-[14px] col:w-full col:text-center"
                >
                  Go to website
                  <i className="ti-arrow-right transition ml-4 mt-1 text-[16px] col:mr-[5px]"></i>
                </a>
              </li>

            </ul>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 col:top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
        <svg className="fill-[#E34E44] " width="1500" height="1500" fill="none">
          <g filter="url(#a)" opacity=".45">
            <circle cx="750" cy="750" r="200" />
          </g>
          <defs>
            <filter
              id="a"
              width="1500"
              height="1500"
              x="0"
              y="0"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_39_4212"
                stdDeviation="275"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Exprience;
