"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);
  function toggleTheme() {
    if (document.documentElement.classList.contains("light")) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }
  return (
    <div className="bg-header h-[72px] flex justify-between items-center relative md:h-[80px] lg:fixed lg:h-full lg:w-[103px] lg:flex-col lg:rounded-r-[20px]">
      <Link
        href="/"
        className="bg-purple w-[72px] h-full rounded-r-[20px] flex justify-center relative overflow-hidden md:w-[80px] lg:h-[103px] lg:w-full"
      >
        <Image
          src="/logo.svg"
          alt="Logo"
          width="28"
          height="28"
          className="self-center z-10 lg:w-[40px] lg:h-[40px]"
        />
        <div className="bg-lightPurple w-full h-full rounded-l-[20px] absolute top-9 lg:top-[50px]" />
      </Link>

      <button
        className="absolute right-[105px] lg:right-auto lg:bottom-36 "
        onClick={toggleTheme}
      >
        {darkMode ? (
          <Image
            src="/icon-sun.svg"
            width="20"
            height="20"
            alt="Light mode button"
          />
        ) : (
          <Image
            src="/icon-moon.svg"
            width="20"
            height="20"
            alt="Dark mode button"
          />
        )}
      </button>
      <span className="h-full w-[1px] bg-[#494E6E] absolute bottom-0 right-[80px] lg:h-[1px] lg:w-full lg:bottom-20 lg:right-0" />
      <div className="mr-6 lg:mr-0 lg:mb-6">
        <Image
          src="/image-avatar.jpg"
          width="32"
          height="32"
          alt="Profile Image"
          className="rounded-full lg:w-[40px] lg:h-[40px]"
        />
      </div>
    </div>
  );
};

export default Sidebar;
