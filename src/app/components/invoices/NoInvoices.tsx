import React from "react";
import Image from "next/image";

const NoInvoices = () => {
  return (
    <div className="text-center max-w-[241px] m-auto mt-[102px]">
      <div className="mb-10 lg:mb-16">
        <Image
          src="/illustration-empty.svg"
          width={193}
          height={160}
          alt="No invoices image"
          className="m-auto md:w-[241px]"
        />
      </div>

      <div>
        <h2 className="text-md mb-6 text-primary">There is nothing here</h2>
        <p className="text-body_variant text-secondary px-7">
          Create an invoice by clicking the
          <span className="font-bold">
            {" "}
            New <span className="hidden md:inline-block">Invoice</span>
          </span>{" "}
          button and get started
        </p>
      </div>
    </div>
  );
};

export default NoInvoices;
