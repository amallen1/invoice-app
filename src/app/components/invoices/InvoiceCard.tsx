"use client";
import React from "react";
import moment from "moment";
import useWindowDimensions from "@/app/hooks/useWindowSize";
import Status from "../Status";

interface InvoiceItem {
  id: string;
  clientName: string;
  status: string;
  paymentDue: string;
  total: number;
}

const InvoiceCard = ({ data }: { data: InvoiceItem }) => {
  const { width } = useWindowDimensions();

  return (
    <div>
      {width < 768 ? <MobileLayout {...data} /> : <DesktopLayout {...data} />}
    </div>
  );
};

const MobileLayout = (data: InvoiceItem) => {
  const { id, clientName, status, paymentDue, total } = data;
  return (
    <div className="bg-invoiceCard rounded-lg p-6 text-primary mb-6 hover:border hover:border-lightPurple">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm_variant">
          <span className="text-mediumBlue">#</span>
          {id}
        </p>
        <p className="text-body text-gray dark:text-white">{clientName}</p>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="text-body_variant text-invoiceContent mb-2">
            Due {moment(paymentDue).format("DD MMM YYYY")}
          </p>
          <p className="text-sm">
            $
            {total?.toLocaleString(undefined, {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>

        <Status status={status} />
      </div>
    </div>
  );
};

const DesktopLayout = (data: InvoiceItem) => {
  const { id, clientName, status, paymentDue, total } = data;
  return (
    <div className="bg-invoiceCard rounded-lg p-6 text-primary mb-6 grid grid-cols-5 items-center lg:py-4 hover:border hover:border-lightPurple">
      <p className="text-sm_variant">
        <span className="text-mediumBlue">#</span>
        {id}
      </p>
      <p className="text-body_variant text-invoiceContent">
        Due {moment(paymentDue).format("DD MMM YYYY")}
      </p>
      <p className="text-body text-gray dark:text-white">{clientName}</p>

      <p className="text-sm">
        $
        {total?.toLocaleString(undefined, {
          minimumFractionDigits: 2,
        })}
      </p>

      <Status status={status} />
    </div>
  );
};

export default InvoiceCard;
