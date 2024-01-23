import React from "react";
import InvoiceHeader from "./InvoiceHeader";
import NoInvoices from "./NoInvoices";


const InvoiceContent = () => {
  return (
    <div className="pt-8 px-6 md:pt-[60px] md:px-12 lg:pt-[71px] lg:px-40 xl:px-64">
      <InvoiceHeader />
      <NoInvoices />
    </div>
  );
};

export default InvoiceContent;
