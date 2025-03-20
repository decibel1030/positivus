import React from "react";
import gsap from "gsap";  
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TeamSubhead = () => {
  useGSAP(() => {
    gsap.from(".team-subhead", {
      opacity: 0,
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".team-subhead",
        start: "top bottom",
        end: "bottom top",
      },
    });
  });
  return (
    <div className="flex items-center my-20 team-subhead">
      <h1 className="text-[40px] font-main font-semibold bg-green text-black">
        Team
      </h1>
      <p className="text-[18px] font-main w-[600px] mx-10">
      Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
      </p>
    </div>
  );
};

export default TeamSubhead;
