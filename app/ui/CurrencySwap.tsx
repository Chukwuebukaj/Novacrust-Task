"use client";
import { useState } from "react";
import Tabs from "../components/Tabs";
import { currencySwapTabs } from "../utils/constants";
import ComingSoon from "./ComingSoon";
import CryptoToCash from "./CryptoToCash";
import { useSearchParams } from "next/navigation";

const CurrencySwap = () => {
  const searchParams = useSearchParams();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const params = new URLSearchParams(searchParams.toString());
  const currentStep = params.get("step");

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {(currentStep === "1" || !currentStep) && (
        <Tabs
          tabNames={currencySwapTabs}
          activeTab={currencySwapTabs[0]}
          onClickTab={(_, index = 0) => setActiveIndex(index)}
        />
      )}
      {!activeIndex ? (
        <CryptoToCash />
      ) : (
        <ComingSoon activeTab={currencySwapTabs[activeIndex]} />
      )}
    </div>
  );
};

export default CurrencySwap;
