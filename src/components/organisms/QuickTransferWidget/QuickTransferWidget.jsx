import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../store/usersSlice";
import Button from "../../atoms/Button/Button";
import { ReactComponent as SendIcon } from "../../../assets/icons/send.svg";
import UsersScrollableList from "../UsersScrollableList/UsersScrollableList";
import { addTransaction } from "../../../store/recentTransactionsSlice";
import sendSrc from "../../../assets/icons/send.png";
import clsx from "clsx";
const QuickTransferWidget = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [transferAmount, setTransferAmount] = useState("");
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const disabledClass = clsx({
    "cursor-not-allowed": selectedUser ? false : true,
  });
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <>
      <div className="flex flex-col gap-[22px] lg:gap-[20px]">
        <div className="heading-text text-lg lg:text-xl">Quick Transfer</div>
        <div className="bg-white rounded-[25px] px-[18px] py-[20px] lg:px-[25px] lg:py-[35px] flex flex-col gap-[22px] lg:gap-[29px]">
          <UsersScrollableList
            users={users}
            onSelection={(user) => setSelectedUser(user)}
          ></UsersScrollableList>

          <div className="flex justify-between items-center gap-[25px]">
            <div className="dim-text text-sm lg:text-base font-inter">
              Write Amount
            </div>
            <div className="rounded-[50px] bg-gray h-[40px] lg:h-[50px] flex-1 flex items-center pl-[15px] lg:pl-[30px] justify-between">
              <input
                maxLength={4}
                disabled={selectedUser ? false : true}
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                className={`font-inter text-gray-800 border-0 text-base bg-gray outline-0 flex placeholder:text-gray-800 w-[60px] ${disabledClass}`}
                type="text"
                placeholder="Amount"
              />
              <Button
                onClick={() => {
                  if (transferAmount) {
                    dispatch(
                      addTransaction({
                        id: Math.random(),
                        type: "paypal",
                        amount: "-" + transferAmount,
                      })
                    );
                    setTransferAmount("");
                  }
                }}
                className={
                  "px-[21px] py[21px] lg:px-[24px] lg:py-[14px] h-full lg:w-[125px] w-[100px] rounded-[50px]"
                }
              >
                <div className="text-sm font-medium lg:text-base flex justify-between items-center">
                  <span>Send</span>
                  <img
                    className={"w-[16px] lg:w-[26px]"}
                    src={sendSrc}
                    alt=""
                  />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickTransferWidget;
