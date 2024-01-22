import React from "react";

const Form = () => {
  return (
    <div>
      <form action="">
        <div className="px-6">
          <p className="text-sm_variant text-purple mb-6">Bill From</p>
          <div className="flex flex-col">
            <div className="mb-6">
              <label htmlFor="">Street Address</label>
              <input type="text" value={"19 Union Terrace"} />
            </div>

            <div className="flex gap-6 mb-6 flex-wrap">
              <div className="flex-1">
                <label htmlFor="">City</label>
                <input type="text" value={"London"} />
              </div>
              <div className="flex-1">
                <label htmlFor="">Post Code</label>
                <input type="text" value={"E1 3EZ"} />
              </div>
              <div className="w-full md:flex-1">
                <label htmlFor="">Country</label>
                <input type="text" value={"United Kingdom"} />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-6">
              <p className="text-sm_variant text-purple mb-6">Bill To</p>
              <label htmlFor="">Clients Name</label>
              <input type="text" value={"Alex Grim"} />
            </div>
            <div className="mb-6">
              <label htmlFor="" className="">
                Client Email
              </label>
              <input type="text" value={"alexgrim@mail.com"} />
            </div>
            <div className="mb-6">
              <label htmlFor="">Street Address</label>
              <input type="text" value={"84 Church Way"} />
            </div>

            <div className="flex gap-6 mb-6 flex-wrap">
              <div className="flex-1">
                <label htmlFor="">City</label>
                <input type="text" value={"Bradford"} />
              </div>
              <div className="flex-1">
                <label htmlFor="">Post Code</label>
                <input type="text" value={"BD1 9PB"} />
              </div>

              <div className="w-full md:flex-1">
                <label htmlFor="">Country</label>
                <input type="text" value={"United Kingdom"} />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="">Invoice Date</label>
            <input type="date" />
          </div>
          <div className="mb-6">
            <label htmlFor="">Payment Terms</label>
            <input type="text" />
          </div>
          <div className="mb-6">
            <label htmlFor="">Project Description</label>
            <input type="text" />
          </div>

          <div>dropshadow</div>
        </div>

        <div className="px-6 py-4 flex justify-between">
          <button>Discard</button>
          <button>Save as Draft</button>
          <button>Save & Send</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
