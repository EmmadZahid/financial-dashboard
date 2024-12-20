import clsx from "clsx";
import CardTransationIcon from "../../../icons/CardTransationIcon";
import PaypalIcon from "../../../icons/PaypalIcon";
import MoneyIcon from "../../../icons/MoneyIcon";

const RecentTransactionItem = ({ transaction }) => {
  const classes = clsx({
    "bg-[#FFF5D9]": transaction.type == "card",
    "bg-[#E7EDFF]": transaction.type == "paypal",
    "bg-[#DCFAF8]": transaction.type == "dollar",
  });
  return (
    <>
      <div className="flex items-center">
        <div
          className={`rounded-full h-[50px] lg:h-[55px] w-[50px] lg:w-[55px] shirnk-0 flex items-center justify-center ${classes}`}
        >
          {transaction.type == "card" ? (
            <CardTransationIcon></CardTransationIcon>
          ) : transaction.type == "paypal" ? (
            <PaypalIcon></PaypalIcon>
          ) : transaction.type == "dollar" ? (
            <MoneyIcon></MoneyIcon>
          ) : (
            ""
          )}
        </div>
        <div className="flex-1 ml-[15px] lg:ml-[17px] flex flex-col font-inter">
          <div>
            {transaction.amount > 0 ? (
              <span>Deposit</span>
            ) : (
              <span>Transfer</span>
            )}{" "}
            from my card
          </div>
          <div className="dim-text text-sm">21 January 2021</div>
        </div>
        <div className="text-xs lg:text-base">
          {transaction.amount < 0 ? (
            <span className="text-warn">-${transaction.amount * -1}</span>
          ) : (
            <span className="text-success">${transaction.amount}</span>
          )}
        </div>
      </div>
    </>
  );
};

export default RecentTransactionItem;
