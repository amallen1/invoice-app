import React from "react";
import FormItem from "./FormItem";

const Form = () => {
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

          <div className="mb-12">
            <div className="mb-6">
              <label htmlFor="">Invoice Date</label>
              <input type="date" className="pr-4" />
            </div>
            <div className="mb-6">
              <label htmlFor="">Payment Terms</label>
              <input type="text" />
            </div>
            <div className="mb-6">
              <label htmlFor="">Project Description</label>
              <input type="text" />
            </div>
          </div>

          <div>
            <p className="text-[18px] font-bold text-[#777f98] mb-6">Item List</p>
            {/* TODO: render list of form items */}
            <FormItem />
          </div>
        </div>

        <div className="sticky bottom-0">
          <div className="h-[64px] bg-gradient-to-t from-black opacity-20"></div>
          <div className="bg-white dark:bg-base px-6 py-8 flex justify-between rounded-br-[20px]">
            {/* <button onClick={() => closeModal()}>Discard</button> */}
            <button>Save as Draft</button>
            <button>Save & Send</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
