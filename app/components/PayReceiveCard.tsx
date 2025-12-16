import { InputProps, PayReceiveCardProps } from "../types";
import InputField from "./InputField";
import { formatNumberWithCommas, formatToTwoDecimals } from "../utils/helpers";
import Dropdown from "./Dropdown";

const PayReceiveCard = <T, O>({
  isPay,
  amount,
  inputProps,
  dropdownProps,
}: PayReceiveCardProps<T, O>) => {
  return (
    <div className="flex flex-col w-full rounded-4xl gap-2 p-6 border">
      <span className="font-medium text-[#828282]">
        You {isPay ? "pay" : "receive"}
      </span>
      <div className="flex w-full justify-between items-center">
        {isPay ? (
          <InputField
            value={amount || ""}
            placeholder={formatToTwoDecimals(0)}
            {...(inputProps as InputProps)}
          />
        ) : (
          <div>
            <span className="font-semibold text-2xl text-[#000E10]">
              {amount
                ? formatNumberWithCommas(amount)
                : formatToTwoDecimals(amount)}
            </span>
          </div>
        )}
        <Dropdown {...dropdownProps} />
      </div>
    </div>
  );
};

export default PayReceiveCard;
