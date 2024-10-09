"use client";

import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconUser } from "@tabler/icons-react";

export default function NavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Blogs",
      link: "/blogs",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

