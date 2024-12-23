import clsx from "clsx";
import { ReactComponent as CardTransationIcon } from "../../../assets/icons/card-transaction.svg";
import { ReactComponent as PaypalIcon } from "../../../assets/icons/paypal.svg";
import { ReactComponent as MoneyIcon } from "../../../assets/icons/dollar.svg";
const RecentTransactionItem = ({ transaction }) => {
  const classes = clsx({
    "bg-[#FFF5D9]": transaction.type == "card",
    "bg-[#E7EDFF]": transaction.type == "paypal",
    "bg-[#DCFAF8]": transaction.type == "dollar",
  });

  const formatDollarAmount = (amount, showCents = false) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: showCents ? 2 : 0,
      maximumFractionDigits: showCents ? 2 : 0,
    }).format(amount);
  };
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
            <span className="text-warn">
              {formatDollarAmount(transaction.amount)}
            </span>
          ) : (
            <span className="text-success">
              {formatDollarAmount(transaction.amount)}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default RecentTransactionItem;
