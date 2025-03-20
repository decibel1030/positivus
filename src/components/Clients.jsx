import React from 'react'
import amazon from "/clients/amazon.svg"
import arrible from "/clients/arrible.svg"
import hubspot from "/clients/hubspot.svg"
import netflix from "/clients/netflix.svg"
import notion from "/clients/notion.svg"
import zoom from "/clients/zoom.svg"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Clients = () => {
    useGSAP(()=>{
        gsap.from(".client-img", {
            stagger: 0.2,
            opacity: 0,
            y: -100,
            duration: 0.5,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".clients-container",
                end: "bottom 10%",
                scrub: true,
            }
        })
    })
  return (
    <div className='flex items-center justify-between w-full clients-container mb-[30px]'>
            <img src={amazon} alt="amazon" className="client-img" />
            <img src={arrible} alt="arrible" className="client-img" />
            <img src={hubspot} alt="hubspot" className="client-img" />
            <img src={netflix} alt="netflix" className="client-img" />
            <img src={notion} alt="notion" className="client-img" />
            <img src={zoom} alt="zoom" className="client-img" />
    </div>
  )
}

export default Clients;