import React from "react";
import speaker from "/speaker.svg";
import circleHeart from "/circleHeart.svg";
import circleShare from "/circleShare.svg";
import circlePlay from "/circlePlay.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Clients from "./Clients";

const Hero = () => {
  useGSAP(() => {
    gsap.from("#hero-text", {
      opacity: 0,
      duration: 0.5,
      x: -100,
      ease: "power2.inOut",
    });
    gsap
      .timeline({ duration: 0.3 })
      .from("#speaker", {
        opacity: 0,
        y: -100,
        x: -100,
        ease: "power2.inOut",
      })
      .from("#circleHeart", {
        opacity: 0,
        y: 100,
        x: -100,
        ease: "power2.inOut",
      })
      .from("#circleShare", {
        opacity: 0,
        y: 50,
        x: -100,
        ease: "power2.inOut",
      })
      .from("#circlePlay", {
        opacity: 0,
        y: -100,
        x: -100,
        ease: "power2.inOut",
      });
  });
  return (
    <div className="flex justify-between items-center min-h-[80vh]">
      <div className="w-[535px]" id="hero-text">
        <h1 className="text-[56px]/16  font-bold mb-[30px] font-main">
          Navigating the digital landscape for success
        </h1>
        <p className="mb-4 font-main text-[20px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <div>
          <button className="bg-[#191a23] text-white font-main px-8 py-4 rounded-lg w-[264px] mt-[30px] hover:bg-green hover:text-black">
            Book a consultation
          </button>
        </div>
      </div>
      <div className="relative w-[400px] h-[400px]">
        <img
          src={speaker}
          id="speaker"
          alt="speaker"
          className="absolute top-0 left-[-70px]"
        />
        <img
          src={circleHeart}
          id="circleHeart"
          alt="circleHeart"
          className="absolute top-[-50px] left-[200px]"
        />
        <img
          src={circleShare}
          id="circleShare"
          alt="circleShare"
          className="absolute top-[70px] left-[270px]"
        />
        <img
          src={circlePlay}
          id="circlePlay"
          alt="circlePlay"
          className="absolute top-[220px] left-[240px]"
        />
      </div>
    </div>
  );
};

export default Hero;
