import { useState } from "react";
import CreditCard from "../molecules/CreditCard/CreditCard";
import RecentTransactionWidget from "../molecules/RecentTransactionWidget/RecentTransactionWidget";
import CreditCardWidget from "../organisms/CreditCardWidget/CreditCardWidget";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-[22px] lg:gap-[30px]">
        <div className="lg:w-[730px] ">
          <CreditCardWidget></CreditCardWidget>
        </div>
        <div className="flex-1">
          <RecentTransactionWidget></RecentTransactionWidget>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
