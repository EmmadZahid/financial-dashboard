import styles from "./Header.module.scss";
import ProfileImg from "../../atoms/ProfileImg/ProfileImg";
import { ReactComponent as BellIcon } from "../../../assets/icons/notification.svg";
import { ReactComponent as MenuBarIcon } from "../../../assets/icons/menu.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/icons/settings.svg";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Header = ({ onMenuClick }) => {
  const [searchText, setSearchText] = useState("");
  const location = useLocation();

  // Map routes to titles
  const routeTitles = {
    "/": "Overview",
    "/dashboard": "Overview",
    "/credit-cards": "Credit Cards",
  };

  const title = routeTitles[location.pathname];

  return (
    <>
      <div
        className={`h-[35px] lg:h-[101px] mt-7 lg:mt-0 px-[25px] lg:px-10 lg:border-b border-gray flex flex-row items-center justify-between`}
      >
        <div className={"lg:hidden cursor-pointer"} onClick={onMenuClick}>
          <MenuBarIcon></MenuBarIcon>
        </div>
        <div>
          <h2 className="heading-text text-2xl lg:text-3xl">{title}</h2>
        </div>

        <div className="space-x-9 flex flex-row items-center ">
          <div className="hidden lg:block">
            <SearchBar
              searchText={searchText}
              onTextChange={(value) => setSearchText(value)}
            ></SearchBar>
          </div>
          <div className="bg-gray items-center rounded-full w-[50px] h-[50px] justify-center hidden lg:flex">
            <SettingsIcon></SettingsIcon>
          </div>
          <div className="bg-gray items-center rounded-full w-[50px] h-[50px] justify-center hidden lg:flex">
            <BellIcon></BellIcon>
          </div>
          <ProfileImg className="w-[35px] h-[35px] lg:w-[60px] lg:h-[60px]"></ProfileImg>
        </div>
      </div>
      <div className="block px-[25px] lg:hidden mt-6 mb-6">
        <SearchBar
          size="sm"
          searchText={searchText}
          onTextChange={(value) => setSearchText(value)}
        ></SearchBar>
      </div>
    </>
  );
};

export default Header;
