"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Image from 'next/image';
import profile from '/public/images/profile.jpeg'
import {FlipWords} from './ui/flip-words' 
import Socials from './Socials'

export default function Intro() {
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
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
      >
        <div className="flex justify-center pb-6">
          <Image 
            src={profile} 
            width={200} 
            height={200} 
            alt="profile picture"
            className="rounded-full shadow-[5px_-2px_11px_2px_#000000]"/>
        </div>  
        Shrikrushna Gundre <br /> 
        <FlipWords words={words} className="text-center text-2xl md:text-3xl"/> <br />
        <div className="pt-5 flex justify-center"><Socials /></div>
      </motion.h1>
      
     
    </LampContainer>
  );
}
