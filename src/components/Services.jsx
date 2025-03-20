import React from "react";
import seoVector from "/card_seo_vector.svg";
import payVector from "/card-click-vector.svg";
import socialVector from "/card-smm-vector.svg";
import emailVector from "/card-email-vector.svg";
import contentVector from "/card-content-vector.svg";
import analysisVector from "/card-analys-vector.svg";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowCircleRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);
const Services = () => {

  useGSAP(()=>{
    gsap.from(".heading-container",{
      scrollTrigger:{
        trigger:".heading-container",
        start:"top bottom",

      },
      opacity:0,
      duration: 0.5,
      y: -100,
      ease: "power2.inOut",
    })
    gsap.from(".card",{
      scrollTrigger:{
        trigger:".card",
        start:"top bottom",
      },
      opacity:0,
      stagger: .4,
      duration: 1,
      ease: "power2.inOut",
      y: -200,
    })
  })
  return (
    <div>
      <div className="flex items-center w-full my-20 heading-container">
        <h1 className="text-[40px] font-main font-semibold bg-green text-black">
          Services
        </h1>
        <p className="text-[18px] font-main w-[600px] mx-10">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 my-10 drop-shadow-[0_10px_1px_rgba(0,0,0,1)]">
        <div className="card w-[600px] h-[310px] bg-smoke rounded-4xl p-10 flex  flex-row justify-between">
          <div className="flex flex-col w-full">
            <h3 className="text-[28px]/8 font-main font-semibold w-[300px] self-start">
              <span className="bg-green px-1 rounded-xl py-1">
                Search Engine Optimization (SEO)
              </span>
            </h3>
            <button className="mt-auto self-start px-4 py-2 rounded-lg flex items-center gap-2">
              <div className="rounded-full w-10 h-10 flex items-center justify-center bg-black">
                <FaArrowCircleRight className="text-green text-[20px] rotate-320" />
              </div>
              <span className="text-[20px] font-main font-thin font-main">
                Learn more
              </span>
            </button>
          </div>
          <img src={seoVector} alt="seo" className="w-[210px]" />
        </div>
        <div className="card w-[600px] h-[310px] bg-green rounded-4xl p-10 flex  flex-row justify-between">
          <div className="flex flex-col w-full">
            <h3 className="text-[28px]/8 font-main font-semibold w-[300px] self-start">
              <span className="bg-smoke px-1 rounded-xl py-1">
                Pay Per Click Advertising (PPC)
              </span>
            </h3>
            <button className="mt-auto self-start px-4 py-2 rounded-lg flex items-center gap-2">
              <div className="rounded-full w-10 h-10 flex items-center justify-center bg-black">
                <FaArrowCircleRight className="text-green text-[20px] rotate-320" />
              </div>
              <span className="text-[20px] font-main font-thin font-main">
                Learn more
              </span>
            </button>
          </div>
          <img src={payVector} alt="seo" className="w-[210px]" />
        </div>
        <div className="card w-[600px] h-[310px] bg-black rounded-4xl p-10 flex  flex-row justify-between">
          <div className="flex flex-col w-full">
            <h3 className="text-[28px]/8 font-main font-semibold w-[300px] self-start">
              <span className="bg-white color-black px-1 rounded-xl py-1">
                Social Media Marketing
              </span>
            </h3>
            <button className="mt-auto self-start px-4 py-2 rounded-lg flex items-center gap-2">
              <div className="rounded-full w-10 h-10 flex items-center justify-center bg-white">
                <FaArrowCircleRight className="text-black text-[20px] rotate-320" />
              </div>
              <span className="text-[20px] font-main font-thin text-white">
                Learn more
              </span>
            </button>
          </div>
          <img src={socialVector} alt="seo" className="w-[210px]" />
        </div>
        <div className="card w-[600px] h-[310px] bg-smoke rounded-4xl p-10 flex  flex-row justify-between">
          <div className="flex flex-col w-full">
            <h3 className="text-[28px]/8 font-main font-semibold w-[200px] self-start">
              <span className="bg-green px-1 rounded-xl py-1">
                Email Marketing
              </span>
            </h3>
            <button className="mt-auto self-start px-4 py-2 rounded-lg flex items-center gap-2">
              <div className="rounded-full w-10 h-10 flex items-center justify-center bg-black">
                <FaArrowCircleRight className="text-green text-[20px] rotate-320" />
              </div>
              <span className="text-[20px] font-main font-thin font-main">
                Learn more
              </span>
            </button>
          </div>
          <img src={emailVector} alt="seo" className="w-[210px]" />
        </div>
        <div className="card w-[600px] h-[310px] bg-green rounded-4xl p-10 flex  flex-row justify-between">
          <div className="flex flex-col w-full">
            <h3 className="text-[28px]/8 font-main font-semibold w-[200px] self-start">
              <span className="bg-white text-black px-1 rounded-xl py-1">
                Email Marketing
              </span>
            </h3>
            <button className="mt-auto self-start px-4 py-2 rounded-lg flex items-center gap-2">
              <div className="rounded-full w-10 h-10 flex items-center justify-center bg-black">
                <FaArrowCircleRight className="text-green text-[20px] rotate-320" />
              </div>
              <span className="text-[20px] font-main font-thin font-main">
                Learn more
              </span>
            </button>
          </div>
          <img src={contentVector} alt="seo" className="w-[210px]" />
        </div>
        <div className="card w-[600px] h-[310px] bg-black rounded-4xl p-10 flex  flex-row justify-between">
          <div className="flex flex-col w-full">
            <h3 className="text-[28px]/8 font-main font-semibold w-[300px] self-start">
              <span className="bg-green color-black px-1 rounded-xl py-1">
                Analytics and Tracking
              </span>
            </h3>
            <button className="mt-auto self-start px-4 py-2 rounded-lg flex items-center gap-2">
              <div className="rounded-full w-10 h-10 flex items-center justify-center bg-white">
                <FaArrowCircleRight className="text-black text-[20px] rotate-320" />
              </div>
              <span className="text-[20px] font-main font-thin text-white">
                Learn more
              </span>
            </button>
          </div>
          <img src={analysisVector} alt="seo" className="w-[210px]" />
        </div>
      </div>
    </div>
  );
};

export default Services;
