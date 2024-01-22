"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Create = () => {
  const router = useRouter();
  return (
    <div className="bg-white dark:bg-black h-full">
      <button
        onClick={() => router.back()}
        className="block bg-red-500 p-6 rounded-lg text-white"
      >
        Close modal
      </button>
      <h1 className="text-white">
        This is the create invoice page
      </h1>
    </div>
  );
};

export default Create;
