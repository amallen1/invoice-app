import React from "react";
import { useRouter } from "next/navigation";

const Overlay = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: Function;
}) => {
  const router = useRouter();

  const goBack = () => {
    setModalOpen(!modalOpen);
    router.back();
  };

  return (
    <div
      className="fixed -z-10 top-[72px] w-full bg-black opacity-50 h-[calc(100vh_-_72px)]  md:top-[80px] lg:top-0 lg:h-screen"
      onClick={goBack}
    />
  );
};

export default Overlay;
