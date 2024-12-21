import BalanceHistoryWidget from "../organisms/BalanceHistoryWidget/BalanceHistoryWidget";
import CreditCardWidget from "../organisms/CreditCardWidget/CreditCardWidget";
import QuickTransferWidget from "../organisms/QuickTransferWidget/QuickTransferWidget";
import RecentTransactionWidget from "../organisms/RecentTransactionWidget/RecentTransactionWidget";
import WeeklyActivityWidget from "../organisms/WeeklyActivityWidget/WeeklyActivityWidget";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col lg:flex-row gap-[22px] lg:gap-[30px]">
          <div className="lg:w-[730px] ">
            <CreditCardWidget></CreditCardWidget>
          </div>
          <div className="flex-1">
            <RecentTransactionWidget></RecentTransactionWidget>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[22px] lg:gap-[30px]">
          <div className="lg:w-[730px]">
            <WeeklyActivityWidget></WeeklyActivityWidget>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[22px] lg:gap-[30px]">
          <div className="lg:w-[445px]">
            <QuickTransferWidget></QuickTransferWidget>
          </div>
          <div className="flex-1 lg:w-[635px]">
            <BalanceHistoryWidget></BalanceHistoryWidget>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
