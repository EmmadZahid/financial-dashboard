import RecentTransactionItem from "../RecentTransactionItem/RecentTransactionItem";

const RecentTransactionWidget = () => {
  return (
    <>
      <div className="heading-text text-lg lg:text-xl">Recent Transaction</div>
      <div className="bg-white rounded-[25px] p-[18px] lg:p-[25px] flex flex-col gap-[12px] lg:gap-[10px]">
        <RecentTransactionItem
          transaction={{ type: "card", amount: "-$850" }}
        ></RecentTransactionItem>
        <RecentTransactionItem
          transaction={{ type: "paypal", amount: "$2500" }}
        ></RecentTransactionItem>
        <RecentTransactionItem
          transaction={{ type: "dollar", amount: "$3000" }}
        ></RecentTransactionItem>
      </div>
    </>
  );
};

export default RecentTransactionWidget;
