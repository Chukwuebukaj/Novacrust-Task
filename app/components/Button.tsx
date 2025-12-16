import React from "react";
import { ButtonProps } from "../types";

const Button: React.FC<ButtonProps> = ({ className, ...rest }) => {
  return (
    <button
      className={`rounded-4xl bg-[#013941] cursor-pointer text-[#E6FBF2] w-full py-5 font-bold ${className}`}
      {...rest}
    ></button>
  );
};

export default Button;
