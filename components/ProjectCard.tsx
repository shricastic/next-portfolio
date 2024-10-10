import React from "react";
import { Meteors } from "./ui/meteors";
import Link from 'next/link'
import {IconArrowRight, IconBrandGithub, IconPointFilled} from '@tabler/icons-react'

export interface Content{
      title: string; 
      desc: string; 
      tech: string; 
      github: string;
      live: string; 
      page: string;
}


export function ProjectCard(props: Content) {
  return (
    <div className="m-5 transition-translate duration-500 hover:scale-110">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative min-h-80 shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-evenly items-start">
          <div className=" mb-4 ">
            <a href={props.github} className="font-bold text-xl text-blue-300">
              <IconBrandGithub className="inline mr-2"/>             
              <h1 className="font-bold text-xl inline mb-4 relative z-50"> {props.title} </h1>
            </a> 
          </div>

          <p className="font-bold text-slate-500 mb-4 relative z-50">{props.desc} </p>
          
          <div className="flex gap-x-2 pb-4 text-green-400 font-bold"> <IconPointFilled className='text-blue-500' size={30} /> <p>{props.tech}</p></div>
          <Link href={`/projects/${props.page}`} >
            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
              Explore
            </button>
          </Link>

          {/* Meaty part - Meteor effect */}
          <Meteors number={30} />
        </div>
      </div>
    </div>
  );
}

export function MoreProjectCard() {
  return (
    <Link href={'/projects'}>
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-4 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <IconArrowRight className='w-7 h-7' color='white'/>
          
        {/* Meaty part - Meteor effect */}
        <Meteors number={30} />
        </div>
      </div>
    </Link>
  );
}
