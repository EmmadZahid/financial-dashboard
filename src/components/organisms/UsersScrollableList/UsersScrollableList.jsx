import { useState } from "react";

import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg";
import UserShortProfile from "../../molecules/UserShortProfile/UserShortProfile";

const UsersScrollableList = ({ users, onSelection }) => {
  const [selectedUser, setSelecteUser] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const onNavClick = (next) => {
    if (next) {
      setStartIndex((prevValue) => {
        if (prevValue + 3 < users.length) return prevValue + 1;
      });
    } else {
      setStartIndex((prevValue) => {
        if (prevValue > 0) return prevValue - 1;
        return prevValue;
      });
    }
  };
  return (
    <div className="flex flex-row justify-between items-center">
      {startIndex > 0 ? (
        <div
          className="rounded-full min-w-[40px] w-[40px] min-h-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white drop-shadow-xl flex items-center justify-center cursor-pointer hover:opacity-70 active:opacity-100 active:outline active:outline-gray"
          onClick={() => onNavClick(false)}
        >
          <ArrowIcon className={"rotate-180"}></ArrowIcon>
        </div>
      ) : (
        ""
      )}

      {users.slice(startIndex, startIndex + 3).map((u) => (
        <div
          className={"cursor-pointer"}
          onClick={() => {
            if (selectedUser?.id == u.id) {
              setSelecteUser(null);
              onSelection(null);
            } else {
              setSelecteUser(u);
              onSelection(u);
            }
          }}
        >
          <UserShortProfile
            key={u.id}
            user={u}
            selected={selectedUser?.id == u.id}
          ></UserShortProfile>
        </div>
      ))}
      {startIndex + 3 < users.length ? (
        <div
          className="rounded-full min-w-[40px] w-[40px] min-h-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-white drop-shadow-xl flex items-center justify-center cursor-pointer hover:opacity-70 active:opacity-100 active:outline active:outline-gray"
          onClick={() => onNavClick(true)}
        >
          <ArrowIcon></ArrowIcon>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default UsersScrollableList;
