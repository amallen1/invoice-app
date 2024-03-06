import React from "react";

const InvoiceCard = ({ data }: { data: any }) => {
  return (
    <div className="bg-invoiceCard rounded-lg p-6 text-primary mb-6">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm_variant">
          <span className="text-mediumBlue">#</span>{data.id}
        </p>
        <p className="text-body text-gray dark:text-white">{data.clientName}</p>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="text-body_variant text-invoiceContent mb-2">
            Due 19 Aug 2021
          </p>
          <p className="text-sm">£ 1,800.90</p>
        </div>

        <div className="bg-paleBlue p-4 w-[104px] text-center rounded-md">
          <p className="text-sm_variant text-blue flex items-center justify-center gap-2">
            <span className="w-2 h-2 block rounded-full bg-blue" />
            Pending
            {/* newly created invoices are marked as pending by default  */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
