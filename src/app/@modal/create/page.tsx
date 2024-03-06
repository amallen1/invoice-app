"use client";
import React, { useState } from "react";
import Modal from "@/app/components/Modal/Modal";
import Overlay from "@/app/components/Overlay";

const CreateInvoiceModal = () => {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className="z-10 text-primary max-w-[616px] absolute left-0 top-[72px] md:top-[80px] lg:top-[0px] lg:max-w-[719px] lg:h-screen">
      <Modal
        title={"New Invoice"}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <Overlay modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default CreateInvoiceModal;
