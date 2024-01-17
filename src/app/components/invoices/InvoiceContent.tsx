import React from "react";
import InvoiceHeader from "./InvoiceHeader";
import NoInvoices from "./NoInvoices";


const InvoiceContent = () => {
  return (
    <div className="pt-8 px-6 h-full lg:px-20 lg:relative">
      <InvoiceHeader />
      <NoInvoices />
    </div>
  );
};

export default InvoiceContent;
