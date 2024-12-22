import clsx from "clsx";
import chipDarkSrc from "../../../assets/icons/chip-white.png";
import chipSrc from "../../../assets/icons/chip-dark.png";
import visaCard from "../../../assets/visa_card.png";
import visaCardDark from "../../../assets/visa_card_dark.png";
import styles from "./styles.module.scss";
const CreditCard = ({ card }) => {
  const classes = clsx({
    [styles.dark]: card.type == "platinum",
    "border-[#dfeaf2] border": card.type !== "platinum",
    "bg-white": card.type !== "platinum",
  });

  const maskCardNumber = (cardNumber) => {
    // Remove any non-digit characters (like spaces or dashes)
    const cleanCardNumber = cardNumber.replace(/\D/g, "");

    // Ensure the card number has exactly 16 digits
    if (cleanCardNumber.length !== 16) {
      throw new Error("Invalid credit card number");
    }

    // Mask all digits except for the first 4 and last 4
    const maskedNumber =
      cleanCardNumber.slice(0, 4) + " **** **** " + cleanCardNumber.slice(12);

    // Add space between every 4 digits
    const formattedNumber = maskedNumber.replace(/(\d{4})(?=\d)/g, "$1 ");

    return formattedNumber;
  };
  return (
    <>
      <div
        className={`${classes} ${styles.card} shrink-0 h-[170px] lg:h-[235px] w-[265px] lg:w-[350px] rounded-[15px] lg:rounded-[25px] flex flex-col justify-between overflow-hidden font-lato`}
      >
        <div className="pt-[17px] lg:pt-[24px] px-[20px] lg:px-[26px]">
          <div className="flex justify-between">
            <div>
              <div className={`${styles.title} text-[11px] text-xs`}>
                Balance
              </div>
              <div className={`${styles.value} text-[16px] text-lg`}>
                ${card.amount}
              </div>
            </div>
            {card.type == "platinum" ? (
              <img
                className="grow-0 w-[29px] lg:w-[34px] h-[29px] lg:h-[34px]"
                src={chipDarkSrc}
                alt=""
              />
            ) : (
              <img
                className="grow-0 w-[29px] lg:w-[34px] h-[29px] lg:h-[34px]"
                src={chipSrc}
                alt=""
              />
            )}
          </div>
          <div className="mt-[12px] lg:mt-[33px] w-[193px] lg:w-[227px] flex justify-between">
            <div>
              <div className={`${styles.title} text-[10px] lg:text-xs`}>
                CARD HOLDER
              </div>
              <div className={`${styles.value} text-[13px] lg:text-sm`}>
                {card.name}
              </div>
            </div>
            <div>
              <div className={`${styles.title} text-[10px] lg:text-xs`}>
                VALID THRU
              </div>
              <div className={`${styles.value} text-[13px] lg:text-sm`}>
                {card.validity}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.cardBottom} h-[51px] lg:h-[70px] flex justify-between items-center px-[20px] lg:px-[26px]`}
        >
          <div className={`${styles.value} text-base lg:text-xl`}>
            {maskCardNumber(card.cardNo)}
          </div>
          {card.type == "platinum" ? (
            <img src={visaCard} className="grow-0 w-[27px] lg:w-[44px]" />
          ) : (
            <img src={visaCardDark} className="grow-0 w-[27px] lg:w-[44px]" />
          )}
        </div>
      </div>
    </>
  );
};

export default CreditCard;
