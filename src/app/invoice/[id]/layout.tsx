import React from "react";

const InvoiceDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pt-8 px-6 md:pt-[60px] md:px-12 lg:pt-[71px] lg:px-40 xl:px-64">
      {children}
    </div>
  );
};

export default InvoiceDetailLayout;
