"use client";

import React from "react";
import Socials from './Socials';

export default function Contact() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="bg-[url('/images/contact.jpg')] bg-center bg-cover h-1/2 w-11/12 flex flex-col items-center sm:w-1/2 overflow-hidden hover:shadow-black shadow-[0px_0px_10px_0px_#6cd3eb] rounded-lg transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform hover:scale-110">
        <h1 className="font-bold text-6xl pt-10 pb-20  md:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">Let's talk!</h1> 
        <div className='fit-content rounded-full bg-black'>
          <h1 className="text-2xl p-2 pl-4 pr-4 md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-600">shricse07@gmail.com</h1>
        </div>
      </div>    
  
      <div className="pt-20"><Socials /></div>
    </div>
  );
}

