import React from "react";
import Image from "next/image";
import Button from "../Button";

const InvoiceHeader = () => {
  return (
    <div className="flex justify-between px-6 pt-8 pb-[102px] text-primary">
      <div>
        <h1 className="text-2xl font-bold tracking-[-0.75px]">Invoices</h1>
        <span className="text-xs text-secondary">No invoices</span>
      </div>

      <div className="flex items-center">
        <div className="flex gap-1.5 mr-4 items-center">
          <p className="text-md font-bold">Filter</p>
          <Image
            src="/icon-arrow-down.svg"
            width="10"
            height="6"
            alt="Filter Arrow Icon"
            className="flex items-center"
          />
        </div>
        <Button />
      </div>
    </div>
  );
};

export default InvoiceHeader;
