import React from "react";
import InvoiceCard from "./InvoiceCard";
import data from "../../data.json";
import NoInvoices from "./NoInvoices";

const InvoiceList = () => {
  return (
    <div>
      {/* TODO: if there is at least one invoice in the list render the list of invoices
      otherwise, render NoInvoices component */}
      {data ? (
        <div className="py-8">
          {data.map((item) => (
            <InvoiceCard data={item} key={item.toString()} />
          ))}
        </div>
      ) : <NoInvoices />}
    </div>
  );
};

export default InvoiceList;
