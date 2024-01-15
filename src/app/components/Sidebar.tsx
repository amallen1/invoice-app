"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  function toggleTheme() {
    if (document.documentElement.classList.contains("light")) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }
  return (
    <div className="bg-header h-[72px] flex justify-between items-center relative">
      <Link
        href="/"
        className="bg-purple w-[72px] h-full rounded-r-[20px] flex justify-center relative overflow-hidden"
      >
        <Image
          src="/logo.svg"
          alt="Logo"
          width="28"
          height="28"
          className="self-center z-10"
        />
        <div className="bg-lightPurple w-[72px] h-full rounded-l-[20px] absolute top-9"></div>
      </Link>

      <button className="absolute right-[105px]" onClick={toggleTheme}>
        <Image
          src="/icon-moon.svg"
          width="20"
          height="20"
          alt="Dark mode button"
        />
      </button>
      <span className="h-full w-[1px] bg-[#494E6E] absolute bottom-0 right-[80px] " />
      <div className="mr-6">
        <Image
          src="/image-avatar.jpg"
          width="32"
          height="32"
          alt="Profile Image"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Sidebar;
