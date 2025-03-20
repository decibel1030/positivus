import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Case = () => {

  useGSAP(() => {
    gsap.from(".case", {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
        trigger: ".case",
        start: "top bottom",
        end: "bottom top",
      },
    });
  });

  return (
    <div className="flex justify-evenly items-center w-full bg-[#191A23]  rounded-3xl p-10 my-10 case">
      <div className="w-[30%] flex flex-col items-start pr-10 border-r-2 border-white">
        <p className="text-[18px] font-main text-white">
          For a local restaurant, we implemented a targeted PPC campaign that
          resulted in a 50% increase in website traffic and a 25% increase in
          sales.
        </p>
        <button className="text-[#A3FF12] mt-6 flex items-center gap-2">
          <span>Learn More</span>
          <FaArrowRightLong />
        </button>
      </div>

      <div className="w-[30%] flex flex-col items-start px-10 border-r-2 border-white">
        <p className="text-[18px] font-main text-white">
          For a B2B software company, we developed an SEO strategy that resulted
          in a first page ranking for key keywords and a 200% increase in
          organic traffic.
        </p>
        <button className="text-[#A3FF12] mt-6 flex items-center gap-2">
          <span>Learn More</span>
          <FaArrowRightLong />
        </button>
      </div>


      <div className="w-[30%] flex flex-col items-start pl-10">
        <p className="text-[18px] font-main text-white">
          For a national retail chain, we created a social media marketing
          campaign that increased followers by 25% and generated a 20% increase
          in online sales.
        </p>
        <button className="text-[#A3FF12] mt-6 flex items-center gap-2">
          <span>Learn More</span>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Case;
