import React, { useEffect, useState } from "react";
import { TabsProps } from "../types";

const Tabs: React.FC<TabsProps> = ({ tabNames, onClickTab, activeTab }) => {
  const [currentTab, setCurrentTab] = useState<string>("");

  const handleClickTab = (tabName: string, index: number) => {
    setCurrentTab(tabName);
    onClickTab(tabName, index);
  };

  useEffect(() => {
    if (!currentTab && activeTab) {
      setCurrentTab(activeTab);
    }
  }, [activeTab]);

  return (
    <div className="bg-[#F2F2F2] rounded-4xl flex items-center overflow-hidden w-fit">
      {tabNames.map((tab, index) => (
        <span
          key={tab}
          className={`font-medium md:text-sm text-xs px-4 py-2 rounded-4xl cursor-pointer whitespace-nowrap ${
            currentTab === tab
              ? "bg-[#013941] text-[#F8FEFB]"
              : "text-[#828282]"
          }`}
          onClick={() => handleClickTab(tab, index)}
        >
          {tab}
        </span>
      ))}
    </div>
  );
};

export default Tabs;
