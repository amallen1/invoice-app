import React from "react";
import { useRouter } from "next/navigation";

const Overlay = () => {
  const router = useRouter();

  return (
    <div
      className="absolute top-[72px] w-full bg-black opacity-50 h-[calc(100vh_-_72px)] z-10 md:top-[80px] lg:top-0 lg:h-screen"
      onClick={() => router.back()}
    >
      Overlay text goes here
    </div>
  );
};

export default Overlay;
