"use client";

import React from "react";
import {BlogCard, MoreBlogsCard} from '../components/BlogCard'
import {blogs} from '../public/content/blogs'
import {BlogContent} from '../components/BlogCard'

export default function() {
  return (
    <div className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl font-bold text-center text-white relative z-20 pb-3"> Blogs </h1>
      <h4 className="text-md">read my latest blogs</h4>
      <div className='w-full pt-10 gap-x-10 flex flex-wrap justify-center items-center'>
        { blogs.map((blog:BlogContent) => <BlogCard props={blog}/>)}
        <MoreBlogsCard />
      </div> 
    </div>

  );
}
