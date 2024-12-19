import { Outlet } from "react-router-dom";
import Header from "../molecules/Header/Header";

const MainPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header></Header>
      <main class="flex-1 overflow-y-auto lg:bg-gray-100 px-[25px] lg:px-[40px] lg:py-[25px] justify-center flex">
        <div className="w-full lg:w-[1110px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainPage;
