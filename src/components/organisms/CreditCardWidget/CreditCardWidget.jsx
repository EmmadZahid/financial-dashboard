import { useEffect, useState } from "react";
import CreditCard from "../../molecules/CreditCard/CreditCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../../../store/creditCardSlice";
import { Link } from "react-router-dom";

const CreditCardWidget = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col gap-[22px] lg:gap-[20px]">
        <div className="flex justify-between items-center">
          <div className="heading-text text-lg lg:text-xl">My Cards</div>
          <div className="heading-text hover:opacity-70">
            <Link to={"/credit-cards"}>See All</Link>
          </div>
        </div>
        <div className="flex gap-[20px] lg:gap-[30px] overflow-x-auto">
          {cards.map((c) => (
            <CreditCard key={c.id} card={c}></CreditCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default CreditCardWidget;
