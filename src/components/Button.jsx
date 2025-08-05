import React from "react";

const Button = ({btnText}) => {
  return (
    <>
      <a href="#" className=" text-[18px] font-semibold bg-[#FF5538] text-white rounded-[14px] py-[14px] px-[28px] ${bg-transparent} ">
       {btnText}
      </a>
    </>
  );
};

export default Button;
