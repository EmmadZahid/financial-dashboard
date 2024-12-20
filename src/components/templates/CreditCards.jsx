import { useEffect, useState } from "react";
import CreditCard from "../molecules/CreditCard/CreditCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../../store/creditCardSlice";

const CreditCards = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.cards);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col gap-[22px] lg:gap-[20px]">
        <div className="flex justify-between items-center">
          <div className="heading-text text-lg lg:text-xl">All Cards</div>
        </div>
        <div className="flex gap-[20px] lg:gap-[30px] flex-wrap">
          {cards.map((c) => (
            <CreditCard key={c.id} card={c}></CreditCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default CreditCards;
