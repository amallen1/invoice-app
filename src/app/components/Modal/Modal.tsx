"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Form from "../Form/Form";

const Modal = ({
  title,
  modalOpen,
  setModalOpen,
}: {
  title: string;
  modalOpen: boolean;
  setModalOpen: Function;
}) => {
  const router = useRouter();

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  });

  const goBack = () => {
    setModalOpen(!modalOpen);
    router.back();
  };

  return (
    <div>
      <div className=" bg-white dark:bg-base h-[calc(100vh_-_72px)] overflow-scroll md:rounded-r-[20px] lg:h-screen">
        <div className="mb-6 pt-8 px-6 md:px-14">
          <button onClick={goBack} className="relative flex gap-5">
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
          <h1 className="text-md mb-6 px-6 md:px-14">{title}</h1>
          <Form modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
