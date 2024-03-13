import React from "react";
import InvoiceCard from "./InvoiceCard";
import data from "../../data.json";
import NoInvoices from "./NoInvoices";
import Link from "next/link";

const InvoiceList = () => {
  return (
    <div>
      {data ? (
        <div className="py-8">
          {data.map((item) => (
            <Link
              href={`/invoice/${item.id}`}
              key={item.id}
            >
              <InvoiceCard data={item} key={item.toString()} />
            </Link>
          ))}
        </div>
      ) : (
        <NoInvoices />
      )}
    </div>
  );
};

export default InvoiceList;
