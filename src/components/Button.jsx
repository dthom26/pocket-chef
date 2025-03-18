import React from "react";

const Button = ({ toggleModal }) => {
  return (
    <button
      onClick={toggleModal}
      className="font-inter font-medium text-sm text-[#FAFAF8] bg-[#141413] rounded-[6px] border-none w-[60px] h-[30px]"
    >
      Info
    </button>
  );
};

export default Button;
