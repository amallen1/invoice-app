import React, { useState } from "react";
import FormItem from "./FormItem";
import Image from "next/image";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <form action="">
        <div className="px-6 md:px-14">
          <p className="text-sm_variant text-purple mb-6">Bill From</p>
          <div className="flex flex-col">
            <div className="mb-6">
              <label htmlFor="">Street Address</label>
              <input type="text" />
            </div>

            <div className="flex gap-6 mb-6 flex-wrap">
              <div className="flex-1">
                <label htmlFor="">City</label>
                <input type="text" />
              </div>
              <div className="flex-1">
                <label htmlFor="">Post Code</label>
                <input type="text" />
              </div>
              <div className="w-full md:flex-1">
                <label htmlFor="">Country</label>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-6">
              <p className="text-sm_variant text-purple mb-6">Bill To</p>
              <label htmlFor="">Clients Name</label>
              <input type="text" />
            </div>
            <div className="mb-6">
              <label htmlFor="" className="">
                Client Email
              </label>
              <input type="text" />
            </div>
            <div className="mb-6">
              <label htmlFor="">Street Address</label>
              <input type="text" />
            </div>

            <div className="flex gap-6 mb-6 flex-wrap">
              <div className="flex-1">
                <label htmlFor="">City</label>
                <input type="text" />
              </div>
              <div className="flex-1">
                <label htmlFor="">Post Code</label>
                <input type="text" />
              </div>

              <div className="w-full md:flex-1">
                <label htmlFor="">Country</label>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="mb-12 md:flex md:flex-wrap md:gap-4">
            <div className="mb-6 flex-1 relative">
              <label htmlFor="">Invoice Date</label>
              <input type="date" data-date-format="DD MMMM YYYY" />
            </div>
            <div className="mb-6 flex-1">
              <label htmlFor="">Payment Terms</label>

              <div
                className="dropdown-container cursor-pointer relative flex items-center justify-between"
                onClick={() => setIsOpen(!isOpen)}
              >
                <p>Net 1 day</p>

                {isOpen && (
                  <div className="bg-formInputColor w-full absolute left-0 top-14 rounded-md drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <ul>
                      <li className="pl-4 py-4 border-b-[1px] border-[#DFE3FA] dark:border-[#1E2139] hover:text-lightPurple">
                        <p>Net 1 Day</p>
                      </li>
                      <li className="pl-4 py-4 border-b-[1px] border-[#DFE3FA] dark:border-[#1E2139] hover:text-lightPurple">
                        <p>Net 7 Days</p>
                      </li>
                      <li className="pl-4 py-4 border-b-[1px] border-[#DFE3FA] dark:border-[#1E2139] hover:text-lightPurple">
                        <p>Net 14 Days</p>
                      </li>
                      <li className="pl-4 py-4 border-b-[1px] border-[#DFE3FA] dark:border-[#1E2139] hover:text-lightPurple">
                        <p>Net 30 Days</p>
                      </li>
                    </ul>
                  </div>
                )}

                <Image
                  src="/icon-arrow-down.svg"
                  width={10}
                  height={10}
                  alt="Arrow down"
                />
              </div>
            </div>
            <div className="mb-6 md:w-full">
              <label htmlFor="">Project Description</label>
              <input type="text" />
            </div>
          </div>

          <div>
            <p className="text-[18px] font-bold text-[#777f98] mb-6">
              Item List
            </p>
            {/* TODO: render list of form items */}
            <FormItem />
            <div>
              <button className="bg-addItem py-4 w-full rounded-[24px] text-sm_variant text-formLabel">
                + Add New Item
                {/* TODO: create another form item once clicked */}
              </button>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0">
          <div className="h-[64px] bg-gradient-to-t from-black opacity-20" />
          <div className="bg-white dark:bg-base px-6 py-8 rounded-br-[20px] flex justify-center md:justify-between ">
            {/* If creating a new invoice, Show Discard, Save as Draft, and Save & Send*/}
            <button className="text-sm_variant text-mediumBlue dark:text-gray bg-paleGray dark:bg-lighterDarkBlue p-4 rounded-3xl">
              Discard
            </button>

            <div className="">
              <button className="text-sm_variant text-gray bg-[#373B53] p-4 rounded-3xl mr-2 md:mr-4">
                Save as Draft
              </button>
              <button className="text-sm_variant text-white bg-lightPurple p-4 rounded-3xl">
                Save & Send
              </button>
            </div>

            {/* If editing an invoice, show Cancel and Save Changes buttons */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
