import React from 'react'
import img from "/smile.svg"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
const CtaBlock = () => {
    useGSAP(()=>{
        gsap.from(".block", {
            scrollTrigger:{
                trigger:".block",
                start:"top bottom",
                end:"bottom bottom",
            },
            opacity:0,
            duration:1,
            delay:0.5,
            y: -100,
            ease:"power2.inOut",
        })
    })

  return (
    <div className='flex justify-between w-full h-[350px] bg-smoke rounded-4xl p-10 pr-30 my-30 block'>
        <div className="flex flex-col w-1/2 justify-between" >
            <h1 className="text-[40px] font-main font-semibold text-black">Let’s make things happen</h1>
            <p>
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>
            <button className='bg-black px-4 py-4 rounded-lg text-white w-1/2'>
                Get your free proposal
            </button>
        </div>
        <img src={img} alt="smile"/>
    </div>
  )
}

export default CtaBlock