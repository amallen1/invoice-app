import React from "react";
import Link from "next/link";
import Image from "next/image";

const Button = () => {
  return (
    <Link
      href="/invoices/new-invoice"
      className="bg-purple rounded-3xl p-[6px] text-white font-bold hover:bg-lightPurple flex items-center justify-around"
    >
      <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
        <Image src="/icon-plus.svg" width="10" height="10" alt="Plus Icon" />
      </div>
      <p className="text-sm mx-2.5">
        New <span className="hidden md:inline">Invoice</span>
      </p>
    </Link>
  );
};

export default Button;
