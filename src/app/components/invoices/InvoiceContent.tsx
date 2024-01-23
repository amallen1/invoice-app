import React from "react";
import InvoiceHeader from "./InvoiceHeader";
import NoInvoices from "./NoInvoices";


const InvoiceContent = () => {
  return (
    <div className="pt-8 px-6">
      <InvoiceHeader />
      <NoInvoices />
    </div>
  );
};

export default InvoiceContent;
