import { useEffect, useState } from "react";
import CreditCard from "../../molecules/CreditCard/CreditCard";

const CreditCardWidget = () => {
  const [creditCards, setCreditCards] = useState([]);

  useEffect(() => {
    fetch("/cards")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCreditCards(data);
      });
  }, []);
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="heading-text text-lg lg:text-xl">My Cards</div>
        <div className="heading-text">
          <a href="#">See All</a>
        </div>
      </div>
      <div className="flex gap-[20px] lg:gap-[30px] overflow-x-auto">
        {creditCards.slice(0, 2).map((c) => (
          <CreditCard key={c.id} card={c}></CreditCard>
        ))}
      </div>
    </>
  );
};

export default CreditCardWidget;
