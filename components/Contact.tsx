"use client";

import React, {useState} from "react";
import Socials from './Socials'

export default function() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, subject, message });
  };


  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20 pb-10"> Contact Me</h1>
      
      <div className="flex w-1/2 justify-center">
        <form onSubmit={handleSubmit} className="space-y-2 w-full md:w-1/2">
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg p-3 w-full"
              placeholder="shricse07@gmail.com"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="rounded-lg p-3 w-full"
              placeholder="Let us know how I can help you"
              required
            />
          </div>
          
          <div className="sm:col-span-2"> 
            <textarea
              id="message"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-lg p-3 w-full"
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          <button type="submit" className="rounded-lg bg-blue-500 p-2 w-full">
            Send message
          </button>
        </form>
      </div>  
      
      <div className="pt-10 md:pt-20"> <Socials /> </div>

    </div>
  );
}
