import React from "react";
import GoBackBtn from "../components/GoBackBtn";
import { CryptoToCashTypes, RecepientDetailsProps } from "../types";
import CopyText from "../components/CopyText";
import InfoIcon from "../assets/icons/InfoIcon";
import Button from "../components/Button";

const TxSummary: React.FC<
  Pick<
    RecepientDetailsProps<any> & CryptoToCashTypes,
    | "onClickBack"
    | "amountPaid"
    | "cryptoCurrency"
    | "walletPaidFrom"
    | "onClickSubmit"
  >
> = ({
  onClickBack,
  amountPaid,
  cryptoCurrency,
  walletPaidFrom,
  onClickSubmit,
}) => {
  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <div className="flex items-center w-full justify-center">
        <GoBackBtn onClick={() => onClickBack(2)} />
        <span className="font-medium text-xl mr-auto">
          Send ETH to the address below
        </span>
      </div>
      <CopyText isGreen label={"4LiV4YjbxsL6739MKghUd"} />
      <div className="w-full rounded-[10px] bg-[#F7F7F7] px-6 py-4 flex flex-col gap-6">
        <div className="w-full flex items-center justify-between">
          <span>Amount to send</span>
          <span>
            <CopyText label={`${amountPaid} ${cryptoCurrency}`} />
          </span>
        </div>
        <p className="w-full flex items-center justify-between">
          <span>Network</span>
          <span>{cryptoCurrency}</span>
        </p>
        <p className="w-full flex items-center justify-between">
          <span>Wallet</span>
          <span>{walletPaidFrom}</span>
        </p>
      </div>
      <div className="flex w-full gap-2">
        <InfoIcon />
        <p className="w-[93.75%]">
          Only send {"{USDT}"} to this address. Ensure the sender is on the{" "}
          {"{CELO}"} network otherwise you might lose your deposit
        </p>
      </div>
      <Button onClick={() => onClickSubmit({})}>I have sent it</Button>
    </div>
  );
};

export default TxSummary;
