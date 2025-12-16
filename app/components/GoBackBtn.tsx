import React from "react";
import BackArrow from "../assets/icons/BackArrow";
import { IconProps } from "../types";
import { useRouter } from "next/navigation";

const GoBackBtn: React.FC<Partial<Pick<IconProps, "onClick">>> = ({
  onClick,
}) => {
  const { back } = useRouter();
  return <BackArrow className="cursor-pointer mr-auto" onClick={onClick || back} />;
};

export default GoBackBtn;
