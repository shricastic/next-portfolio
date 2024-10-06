"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Image from 'next/image';
import profile from '../app/images/profile.jpeg'
import {FlipWords} from './ui/flip-words' 
import Socials from './Socials'

export default function() {
  const words = ["Computer Science Engineer", "Photographer", "Coder", "Traveller"];

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div className="flex justify-center pb-6">
          <Image 
            src={profile} 
            width={250} 
            height={250} 
            alt="profile picture"
            className="rounded-full"/>
        </div>  
        Shrikrushna C Gundre <br /> 
        <FlipWords words={words} className="text-center md:text-5xl"/> <br />
        <div className="pt-5 flex justify-center"><Socials /></div>
      </motion.h1>
      
     
    </LampContainer>
  );
}
