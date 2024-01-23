"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Form from "@/app/components/Form/Form";

const CreateInvoiceModal = () => {
  const router = useRouter();
  return (
    <div className="fixed top-[72px] bottom-0 w-full h-full">
      <div className="max-w-[504px] absolute top-0 bg-white z-40 ">
        <div className="mb-6 pt-8 px-6">
          <button onClick={() => router.back()} className="relative flex gap-5">
            <Image
              src="/icon-arrow-left.svg"
              width={8}
              height={4}
              alt="Left arrow"
              className=""
            />
            <span className="text-sm_variant">Go back</span>
          </button>
        </div>

        <div>
          <h1 className="text-md mb-6 px-6">New Invoice</h1>
          <Form />
        </div>
      </div>
      <div className="fixed z-60 w-full h-full bg-black opacity-50 overflow-scroll">
        testingkjnkjnjk
      </div>
    </div>
  );
};

export default CreateInvoiceModal;
