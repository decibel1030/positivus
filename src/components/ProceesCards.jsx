import React from "react";
import { FaMinusCircle } from "react-icons/fa";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProceesCards = () => {
  
  useGSAP(() => {
    gsap.from(".process-card", {
      opacity: 0,
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".process-cards",
        start: "top bottom",
        end: "bottom top",
      },
      stagger: 0.5,
    });
  });

    const cardClickHandler = (event) => {
        gsap.timeline({}).to(event.currentTarget, {
            backgroundColor: "#b9ff66",
            duration: 0.5,
            ease: "power2.inOut",
            height: "320px"
        })
        .to(event.currentTarget.querySelector(".paragraph"), {
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
            display: "block"
        })
        gsap.to(event.currentTarget.querySelector(".icon"), {
            rotate: 90,
            duration: 0.5,
            ease: "power2.inOut"
        })
      };

  const cards = [
    {
      title: "Research and Strategy Development",
      description:
        "We begin by understanding your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      title: "Implementation",
      description:
        "We will then implement the strategy we have developed, ensuring that it is executed effectively and efficiently. This includes creating and managing social media accounts, creating content, and engaging with your audience.",
    },
    {
      title: "Monitoring and Optimization",
      description:
        "We will then monitor the progress of the campaign and evaluate its effectiveness. This will allow us to make any necessary adjustments to the strategy.",
    },
    {
      title: "Reporting and Communication",
      description:
        "We will then report on the progress of the campaign and communicate the results to you. This will allow you to see the impact of our work and make any necessary adjustments to your strategy.",
    },
    {
      title: "Continual Improvement",
      description:
        "We will then continually improve our services to ensure that they are always up to date and effective. This includes staying up to date with the latest trends and technologies in the industry.",
    },
  ];
  return (
    <div className="flex flex-wrap gap-10 flex-col process-card">
      <div className="flex flex-col w-full bg-green rounded-4xl drop-shadow-[0_5px_1px_rgba(0,0,0,1)] p-10">
        {/* rework border */}
        <div className="flex justify-between w-full border-b-2 border-black pb-4">
          <div className="flex items-center gap-8">
            <h1 className="text-[60px] font-main font-semibold">01</h1>
            <h2 className="text-[28px] font-main font-semibold">
              Consultation
            </h2>
          </div>
          <div>
            <FaMinusCircle className="w-[50px] h-[50px] text-white bg-black rounded-full" />
          </div>
        </div>
        <div>
          <p className="text-[20px] font-main my-10">
            During the initial consultation, we will discuss your business goals
            and objectives, target audience, and current marketing efforts. This
            will allow us to understand your needs and tailor our services to
            best fit your requirements.
          </p>
        </div>
      </div>
      {cards.map((card, index) => {
        return (
          <div className="flex flex-col h-[150px] w-full bg-smoke rounded-4xl drop-shadow-[0_5px_1px_rgba(0,0,0,1)] p-10 process-card" key={index}
          onClick={cardClickHandler}
          >
            <div className="flex justify-between w-full pb-4">
              <div className="flex items-center gap-8">
                <h1 className="text-[60px] font-main font-semibold">0{index + 2}</h1>
                <h2 className="text-[28px] font-main font-semibold">
                  {card.title}
                </h2>
              </div>
              <div>
                <FaMinusCircle className="w-[50px] h-[50px] text-white bg-black rounded-full icon" />
              </div>
            </div>
            <div>
              <p className="text-[20px] font-main my-10 paragraph" style={{display: "none"}}>
                During the initial consultation, we will discuss your business
                goals and objectives, target audience, and current marketing
                efforts. This will allow us to understand your needs and tailor
                our services to best fit your requirements.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProceesCards;
