import styles from "./Header.module.scss";
import ProfileImg from "../../atoms/ProfileImg/ProfileImg";
import BellIcon from "../../../icons/BellIcon";
import MenuBarIcon from "../../../icons/MenuBarIcon";
import SettingsIcon from "../../../icons/SettingsIcon";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Header = () => {
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
        <MenuBarIcon className={"lg:hidden cursor-pointer"}></MenuBarIcon>
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
          <ProfileImg></ProfileImg>
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
