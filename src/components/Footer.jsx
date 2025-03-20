import React from 'react'
import logo from "/Logo_.svg"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='w-full h-[200px] bg-black text-white rounded-t-4xl p-16'>
        <div className="flex justify-between items-center mb-15">
            <img src={logo} alt="logo" />
            <div className="flex gap-10 text-[20px] font-thin">
                <a href="#" className="underline">Home</a>
                <a href="#" className="underline">About</a>
                <a href="#" className="underline">Services</a>
                <a href="#" className="underline">Contact</a>
            </div>
            <div className="flex gap-10 items-center">
                <FaFacebook className='text-[24px]' />
                <FaInstagram className='text-[24px]' />
                <FaTwitter className='text-[24px]' />
            </div>
        </div>
        <p className='text-[16px] font-thin'>
            Copyright 2025. All rights reserved.
        </p>
    </div>
  )
}

export default Footer