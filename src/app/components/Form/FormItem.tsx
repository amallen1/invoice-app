import React from "react";
import Image from "next/image";

const FormItem = () => {
  return (
    <div className="flex items-center gap-4 flex-wrap mb-12">
      {/* TODO: grab data from inputs*/}
      <div className="mb-2 w-full md:flex-[1_1_35%] md:mb-0">
        <label htmlFor="">Item Name</label>
        <input type="text" />
      </div>
      <div className="flex-1">
        <label htmlFor="">Qty.</label>
        <input type="number" />
      </div>

      <div className="flex-[1_1_10%] md:flex-[1_1_10%]">
        <label htmlFor="">Price</label>
        <input type="number" />
      </div>

      <div className="flex-[1_1_10%] self-start md:flex-[1_1_5%]">
        <label htmlFor="">Total</label>
        <p className="py-3 text-sm text-secondary">400.00</p> 
      </div>

      {/* TODO: delete item from list */}
      <button className="mt-4"> 
        <Image
          src="/icon-delete.svg"
          alt="Delete icon"
          width={12}
          height={16}
        />
      </button>
    </div>
  );
};

export default FormItem;
