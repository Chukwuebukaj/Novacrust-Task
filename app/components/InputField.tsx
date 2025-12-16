import React from "react";
import { InputProps } from "../types";

const InputField = <T,>({
  label,
  required,
  errors,
  touched,
  name,
  className,
  leftIcon,
  ...rest
}: InputProps<T>) => {
  const isTouched = touched?.[name as keyof T];
  const errorMsg = errors?.[name as keyof T] as string;

  return (
    <label htmlFor="" className="flex flex-col gap-2 w-full">
      {label && (
        <span className="text-[#013941]">
          {label}
          {required && <b className="text-red-500">*</b>}
        </span>
      )}
      <div className="relative w-full flex flex-col">
        <input
          name={name as string}
          className={`border border-[#E0E0E0] outline-0 px-6 py-4 rounded-4xl text-[#013941] ${
            leftIcon && "pl-10"
          } ${className}`}
          {...rest}
        />
        {leftIcon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            {leftIcon}
          </div>
        )}
      </div>
      {isTouched && errorMsg && (
        <span className="text-sm text-red-500">{errorMsg}</span>
      )}
    </label>
  );
};

export default InputField;
