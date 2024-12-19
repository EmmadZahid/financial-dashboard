import RecentTransactionWidget from "../molecules/RecentTransactionWidget/RecentTransactionWidget";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-[22px] lg:gap-[30px]">
        <div className="flex flex-col w-[730px] ">
          <div className="flex justify-between items-center">
            <div className="heading-text text-lg lg:text-xl">My Cards</div>
            <div className="heading-text">See All</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-[20px]">
          <RecentTransactionWidget></RecentTransactionWidget>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
