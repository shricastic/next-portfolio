"use client";

import React from "react";
import ProjectCard from './ProjectCard'

export default function() {
  const projects = [
    {
      title: "BlockCertify",
      desc: "Certificate Generation and Verification using Block Chain",
      stack: "React, Express, Truffle, Ganache, Mongo, Node",
      github: "https://github.com/shricastic",
      live: "https://shricastic.in",
      page: "soon"
    }
  ]
  
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20 pb-10"> Projects</h1>

      <div className="w-1/2 flex flex-wrap justify-center gap-x-3 gap-y-2">
           <ProjectCard {...projects[0]} />
      </div>

    </div>
  );
}
