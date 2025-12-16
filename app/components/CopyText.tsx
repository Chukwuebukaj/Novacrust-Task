import React from "react";
import { Option } from "../types";
import CopyIcon from "../assets/icons/CopyIcon";
import { copyToClipboard } from "../utils/helpers";
import { toast } from "react-toastify";

const CopyText: React.FC<Pick<Option, "label"> & { isGreen?: boolean }> = ({
  label,
  isGreen,
}) => {
  return (
    <div
      className={`flex items-center gap-2 rounded-4xl text-[#013941] w-fit px-4 py-2 cursor-pointer ${
        isGreen ? "border border-[#CCF6E5] bg-[#E6FBF2]" : ""
      }`}
      onClick={() =>
        copyToClipboard(label).then((res) =>
          toast[res ? "success" : "error"](res ? "Copied!" : "Copy failed")
        )
      }
    >
      <span>{label}</span> <CopyIcon />
    </div>
  );
};

export default CopyText;
