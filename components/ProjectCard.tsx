import React from "react";
import { Meteors } from "./ui/meteors";

interface Content{
      title: string; 
      desc: string; 
      stack: string; 
      github: string;
      live: string; 
      page: string;
}


export default function(props: Content) {
  return (
    <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className=" mb-4 ">
            <a href="https://github.com/shricastic" className="font-bold text-xl text-blue-300">
              <svg className="h-7 w-7 inline mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#99c1f1" stroke="#99c1f1"><g id="SVGRepo_iconCarrier"> <title>github</title><path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path></g></svg>
            <h1 className="font-bold text-xl inline text-white mb-4 relative z-50"> {props.title} </h1>
            </a> 
          </div>

          <p className="font-bold text-slate-500 mb-4 relative z-50">{props.desc} </p>
          
          <div className="flex gap-x-2 pb-4 text-green-400 font-bold"><div className="w-3 h-3 bg-blue-500 rounded-full"></div><p>{props.stack}</p></div>

          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
