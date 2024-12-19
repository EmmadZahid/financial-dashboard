import { useState } from "react";
import CreditCard from "../molecules/CreditCard/CreditCard";
import RecentTransactionWidget from "../molecules/RecentTransactionWidget/RecentTransactionWidget";
import CreditCardWidget from "../organisms/CreditCardWidget/CreditCardWidget";

const Dashboard = () => {
  const [creditCards, setCreditCards] = useState([]);
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-[22px] lg:gap-[30px]">
        <div className="flex flex-col lg:w-[730px] gap-[22px] lg:gap-[20px]">
          <CreditCardWidget></CreditCardWidget>
        </div>
        <div className="flex flex-col flex-1 gap-[20px]">
          <RecentTransactionWidget></RecentTransactionWidget>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
