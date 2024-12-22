import clsx from "clsx";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";

const SearchBar = ({ searchText, onTextChange, size = "lg" }) => {
  const classes = clsx({
    "h-[50px]": size === "lg",
    "h-[40px]": size === "sm",
  });
  return (
    <>
      <div
        className={`${classes} w-full lg:w-[255px] bg-gray px-[25px] flex items-center rounded-3xl`}
      >
        <SearchIcon className="shrink-0"></SearchIcon>
        <input
          value={searchText}
          onChange={(e) => onTextChange(e.target.value)}
          className="font-inter text-gray-800 border-0 text-base bg-gray ml-[15px] outline-0 flex placeholder:text-gray-800 w-full"
          type="text"
          placeholder="Search for something"
        />
      </div>
    </>
  );
};

export default SearchBar;
