"use client";

import React from "react";
import {ProjectCard, MoreProjectCard, Content} from './ProjectCard'
import {projects} from '../public/content/projects'

export default function Projects() {  
  return (
    <div className="min-h-screen relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl font-bold text-center text-white relative z-20 pb-10"> Projects</h1>

      <div className="w-full flex flex-wrap justify-center items-center gap-x-3 gap-y-4 md:gap-x-7">
        {projects.map((project:Content, index:number)=> <ProjectCard key={index} {...project}/>)}
        <MoreProjectCard />    
      </div>

    </div>
  );
}
