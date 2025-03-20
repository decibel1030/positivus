import React, { useState } from "react";
import star1 from "/Vector.svg"
import star2 from "/star2.svg"
const ContactForm = () => {
  return (
    <div className="w-full h-[700px] bg-smoke rounded-4xl px-25 py-10 font-main justify-center">
      <form className="w-1/2 flex gap-10 flex-col font-main ">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input className="bg-white border-2 border-black rounded-lg pl-6 h-[60px]"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input className="bg-white border-2 border-black rounded-lg pl-6 h-[60px]"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea className="bg-white border-2 border-black rounded-lg p-6 h-[190px]"
            name="message"
            id="message"
            placeholder="Message"
          />
        </div>
        <button className="bg-black text-white rounded-lg pl-6 h-[60px]"
        type="submit">Submit</button>
      </form>
        <img src={star1} alt="" className="relative top-[-550px] right-[-800px]" />
        <img src={star2} alt="" className="relative top-[-500px] right-[-800px]" />
    </div>
  );
};

export default ContactForm;
