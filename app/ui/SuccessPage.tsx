import React from "react";
import NovacrustLogo from "../assets/icons/NovacrustLogo";
import { RecepientDetailsProps } from "../types";
import Button from "../components/Button";
import CopyText from "../components/CopyText";
import { FaCheckCircle } from "react-icons/fa";

const SuccessPage: React.FC<
  Pick<RecepientDetailsProps<any>, "onClickBack">
> = ({ onClickBack }) => {
  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <NovacrustLogo />
      <FaCheckCircle className="text-6xl" fill="#219653" />
      <p className="font-medium text-2xl text-[#000E10]">Your transaction is processing.</p>
      <p className="text-xl">The recipient will receive it shortly.</p>
      <div className="rounded-[10px] bg-[#F7F7F7] py-4 px-6 flex items-center justify-between w-full">
        <span>Transaction ID</span> <CopyText label={"NC123456789"} />
      </div>
      <Button
        className="bg-transparent! text-[#013941]! text-base!"
        onClick={() => onClickBack(0)}
      >
        Go back to home
      </Button>
    </div>
  );
};

export default SuccessPage;
