"use client";
import React from "react";
import Modal from "@/app/components/Modal/Modal";
import Overlay from "@/app/components/Overlay";

const CreateInvoiceModal = () => {

  return (
    <div className="">
      <Modal title={"New Invoice"}/>
      <Overlay />
    </div>
  );
};

export default CreateInvoiceModal;
