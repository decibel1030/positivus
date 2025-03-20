import React from "react";
import ProceesCards from './ProceesCards'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  useGSAP(() => {
    gsap.from(".subhead", {
      opacity: 0,
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".subhead",
        start: "top bottom",
        end: "bottom top",
      },
    });
  });
  return (
    <div>
      <div className="flex items-center my-20 subhead">
        <h1 className="text-[40px] font-main font-semibold bg-green text-black">
          Our Working Process
        </h1>
        <p className="text-[18px] font-main w-[400px] mx-10">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <ProceesCards />
    </div>
  );
};

export default Process;
