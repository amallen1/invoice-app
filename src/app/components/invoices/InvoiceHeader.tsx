import React from "react";
import Image from "next/image";
import Button from "../Button";

const InvoiceHeader = () => {
  return (
    <div className="flex justify-between pb-[102px] text-primary">
      <div>
        <h1 className="text-md md:text-lg">Invoices</h1>
        <span className="text-body_variant text-secondary">No invoices</span>
      </div>

      <div className="flex items-center">
        <div className="flex gap-1.5 mr-4 items-center">
          <p className="text-sm_variant">
            Filter <span className="hidden md:inline">by status</span>
            {/* TODO: Finish the dropdown menu */}
          </p>
          <Image
            src="/icon-arrow-down.svg"
            width="10"
            height="6"
            alt="Filter Arrow Icon"
          />
        </div>
        <Button />
      </div>
    </div>
  );
};

export default InvoiceHeader;
