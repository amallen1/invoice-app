"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Form from "@/app/components/Form/Form";

const NewInvoice = () => {
  return (
    <div className="h-full max-w-[504px] overflow-scroll">
      <div className="mb-6 pt-8 px-6">
        <Link href="/" className="relative">
          <Image
            src="/icon-arrow-left.svg"
            width={8}
            height={4}
            alt="Left arrow"
            className="absolute bottom-[2.5px]"
          />
          <span className="ml-6 text-sm_variant">Go back</span>
        </Link>
      </div>

      <div>
        <h1 className="text-md mb-6 px-6">New Invoice</h1>
        <Form />
      </div>
    </div>
  );
};

export default NewInvoice;
