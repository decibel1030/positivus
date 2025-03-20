import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const CaseSubhead = () => {
  useGSAP(() => {
    gsap.from(".case-subhead", {
      opacity: 0,
      y: -100,
      duration: 1,
      scrollTrigger: {
        trigger: ".case-subhead",
        start: "bottom bottom",
        end: "bottom top",
      },
    });
  });
  return (
    <div className="flex items-center my-20 case-subhead">
      <h1 className="text-[40px] font-main font-semibold bg-green text-black">
        Case studies
      </h1>
      <p className="text-[18px] font-main w-[600px] mx-10">
        Explore Real-Life Examples of Our Proven Digital Marketing Success
        through Our Case Studies
      </p>
    </div>
  );
};

export default CaseSubhead;
