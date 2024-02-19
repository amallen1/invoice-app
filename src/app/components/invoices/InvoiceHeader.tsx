"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "../Button";

const InvoiceHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between pb-[102px] text-primary">
      <div>
        <h1 className="text-md md:text-lg">Invoices</h1>
        <span className="text-body_variant text-secondary">No invoices</span>
      </div>

      <div className="flex items-center relative">
        <button
          className="flex gap-1.5 mr-4 items-center relative"
          onClick={() => setIsOpen(!isOpen)}
        >
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
        </button>

        {isOpen && (
          <div className="bg-formInputColor w-[192px] px-6 py-6 absolute -left-12 top-14 rounded-md drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <ul>
              <li className="flex item-center mb-2 hover:text-lightPurple">
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales" className="ml-2 text-sm text-primary">
                  Draft
                </label>
              </li>
              <li className="flex item-center mb-2 hover:text-lightPurple">
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales" className="ml-2 text-sm text-primary">
                  Pending
                </label>
              </li>
              <li className="flex item-center mb-2 hover:text-lightPurple">
                <input type="checkbox" id="scales" name="scales" />
                <label htmlFor="scales" className="ml-2 text-sm text-primary">
                  Paid
                </label>
              </li>
            </ul>
          </div>
        )}
        <Button />
      </div>
    </div>
  );
};

export default InvoiceHeader;
