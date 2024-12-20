import { useEffect, useState } from "react";
import RecentTransactionItem from "../../molecules/RecentTransactionItem/RecentTransactionItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecentTransactions } from "../../../store/recentTransactionsSlice";

const RecentTransactionWidget = () => {
  const dispatch = useDispatch();
  const { recentTransactions, isFetched } = useSelector(
    (state) => state.recentTransactions
  );
  useEffect(() => {
    if (!isFetched) dispatch(fetchRecentTransactions());
  }, [dispatch]);
  return (
    <>
      <div className="flex flex-col gap-[22px] lg:gap-[20px]">
        <div className="heading-text text-lg lg:text-xl">
          Recent Transaction
        </div>
        <div className="bg-white rounded-[25px] p-[18px] lg:p-[25px] flex flex-col gap-[12px] lg:gap-[10px]">
          {recentTransactions.slice(0, 3).map((t) => (
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
