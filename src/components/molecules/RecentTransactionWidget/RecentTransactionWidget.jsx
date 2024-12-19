import { useEffect, useState } from "react";
import RecentTransactionItem from "../RecentTransactionItem/RecentTransactionItem";

const RecentTransactionWidget = () => {
  const [transations, setTransactions] = useState([]);
  useEffect(() => {
    fetch("/recentTransactions")
      .then((res) => {
        return res.json();
      })
      .then((data) => setTransactions(data));
  }, []);
  return (
    <>
      <div className="flex flex-col gap-[22px] lg:gap-[20px]">
        <div className="heading-text text-lg lg:text-xl">
          Recent Transaction
        </div>
        <div className="bg-white rounded-[25px] p-[18px] lg:p-[25px] flex flex-col gap-[12px] lg:gap-[10px]">
          {transations.map((t) => (
            <RecentTransactionItem
              key={t.id}
              transaction={t}
            ></RecentTransactionItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentTransactionWidget;
