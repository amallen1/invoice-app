import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Form from "../Form/Form";

const Modal = () => {
  const router = useRouter();

  return (
    <div
      className="z-20 text-primary max-w-[616px] absolute left-0 top-[72px] md:top-[80px] lg:top-[0px] lg:max-w-[719px] lg:h-screen"
    >
      {/* px-6 md:px-14 */}
      <div className=" bg-white dark:bg-base h-[calc(100vh_-_72px)] overflow-scroll md:rounded-r-[20px] lg:h-screen">
        {" "}
        {/* px-6 md:px-14 */}
        <div className="mb-6 pt-8 px-6 md:px-14">
          <button onClick={() => router.back()} className="relative flex gap-5">
            <Image
              src="/icon-arrow-left.svg"
              width={8}
              height={4}
              alt="Left arrow"
              className=""
            />
            <span className="text-sm_variant">Go back</span>
          </button>
        </div>
        <div>
          <h1 className="text-md mb-6 px-6 md:px-14">New Invoice</h1>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Modal;
