import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface CommonButtonProps {
  text: string;
  mobileButton: boolean;
}

const CommonButton = ({ text, mobileButton }: CommonButtonProps) => {
  return (
    <button
      className={
        mobileButton
          ? "md:hidden bg-black text-white py-3 px-5 md:py-5 md:px-7 rounded-xl flex items-center mt-4 text-sm w-11/12 justify-center"
          : "hidden md:flex bg-black text-white py-3 px-5 md:py-5 md:px-7 rounded-xl items-center mt-4 text-sm"
      }
    >
      {text} <FaArrowRight className="ml-2 bounce-right" />
    </button>
  );
};

export default CommonButton;
