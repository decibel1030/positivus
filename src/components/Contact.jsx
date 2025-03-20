import React from "react";
import ContactForm from "./ContactForm";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useGSAP(() => {
    gsap.from(".contactSubhead", {
      opacity: 0,
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".contactSubhead",
        start: "top bottom",
        end: "bottom top",
      }
    });
  });
  return (
    <div className="contactSubhead">
      <div className="flex items-center my-20">
        <h1 className="text-[40px] font-main font-semibold bg-green text-black">
          Contact Us
        </h1>
        <p className="text-[18px] font-main w-[600px] mx-10">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
