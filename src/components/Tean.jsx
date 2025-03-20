import TeamSubhead from "./TeamSubhead";
import { FaLinkedinIn } from "react-icons/fa";

import team1 from "/team/1.png";
import team2 from "/team/2.png";
import team3 from "/team/3.png";
import team4 from "/team/4.png";
import team5 from "/team/5.png";
import team6 from "/team/6.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tean = () => {
  useGSAP(() => {
    gsap.from(".team", {
      opacity: 0,
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: ".team",
        start: "top bottom",
        end: "bottom top",
      },
      stagger: 0.5,
    });
  });
  const team = [
    {
      name: "John Smith",
      speciality: "SEO and Founder",
      discription:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      image: team1,
    },
    {
      name: "Jane Doe",
      speciality: "Director of Marketing",
      discription:
        "She is a marketing expert with a passion for helping businesses grow",
      image: team2,
    },
    {
      name: "Michael Brown",
      speciality: "Senior SEO Specialist",
      discription:
        "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      image: team3,
    },
    {
      name: "Emily Johnson",
      speciality: "PPC Specialist",
      discription:
        "She is a marketing expert with a passion for helping businesses grow",
      image: team4,
    },
    {
      name: "Daniel Lee",
      speciality: "Content Strategist",
      discription:
        "Content Strategist with a knack for creating engaging and SEO-friendly content",
      image: team5,
    },
    {
      name: "Olivia Davis",
      speciality: "Social Media Manager",
      discription:
        "Social Media Manager with a passion for helping businesses grow",
      image: team6,
    },
  ];
  return (
    <div>
      <TeamSubhead />
      <div className="grid grid-cols-3 gap-10 w-full">
        {team.map((item, index) => (
          <div className="w-[400px] h-[330px] border-b-5 border-2 border-black rounded-4xl p-6 team" key={index}>
            <div className="w-full h-1/2 flex justify-between border-b-1 border-black pb-4">
              <img className="w-25 h-25" src={item.image} alt={item.name} />
              <div className="flex flex-col gap-2 my-auto">
                <h1 className="font-semibold text-xl">{item.name}</h1>
                <span>{item.speciality}</span>
              </div>
              <div className="bg-black rounded-full p-1 h-10 w-10 flex justify-center items-center">
                <FaLinkedinIn className="text-green" />
              </div>
            </div>
            <div className="w-full h-1/2 mt-4">
              <span>{item.discription}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tean;
