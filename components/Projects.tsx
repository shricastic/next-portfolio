"use client";

import React from "react";
import {ProjectCard, MoreProjectCard, Content} from './ProjectCard'
import {projects} from '../public/content/projects'

export default function() {  
  return (
    <div className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl font-bold text-center text-white relative z-20 pb-10"> Projects</h1>

      <div className="w-1/2 flex flex-wrap justify-center items-center gap-x-3 gap-y-4 md:gap-x-7">
        {projects.map((project:Content)=> <ProjectCard {...project}/>)}
        <MoreProjectCard />    
      </div>

    </div>
  );
}
