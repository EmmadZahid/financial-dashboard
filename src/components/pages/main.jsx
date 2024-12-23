import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Header from "../molecules/Header/Header";
import { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import clsx from "clsx";
import { ReactComponent as HomeIcon } from "../../assets/icons/sidebar/home.svg";
import { ReactComponent as TransactionIcon } from "../../assets/icons/sidebar/transaction.svg";
import { ReactComponent as AccountsIcon } from "../../assets/icons/sidebar/accounts.svg";
import { ReactComponent as InvestmentIcon } from "../../assets/icons/sidebar/investment.svg";
import { ReactComponent as CreditCardIcon } from "../../assets/icons/sidebar/credit-card.svg";
import { ReactComponent as LoanIcon } from "../../assets/icons/sidebar/loan.svg";
import { ReactComponent as ServiceIcon } from "../../assets/icons/sidebar/service.svg";
import { ReactComponent as PrevilegeIcon } from "../../assets/icons/sidebar/previlege.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/sidebar/settings.svg";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "../../store/currentUserSlice";

const MainPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarClasses = clsx({
    "translate-x-0": isSidebarOpen,
    "-translate-x-full": !isSidebarOpen,
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: HomeIcon },
    { name: "Transactions", path: "/about", icon: TransactionIcon },
    { name: "Accounts", path: "/services", icon: AccountsIcon },
    { name: "Investments", path: "/investments", icon: InvestmentIcon },
    { name: "Credit Cards", path: "/credit-cards", icon: CreditCardIcon },
    { name: "Loans", path: "/loans", icon: LoanIcon },
    { name: "Services", path: "/accounts", icon: ServiceIcon },
    { name: "My Previleges", path: "/previleges", icon: PrevilegeIcon },
    { name: "Settings", path: "/settings", icon: SettingsIcon },
  ];

  return (
    <div className="flex">
      <div
        className={`flex flex-col bg-white z-10 h-screen border-r w-[250px] fixed top-0 left-0 h-full transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${sidebarClasses}`}
      >
        <div className="h-[100px] pl-[38px] flex items-center">
          <Link to="/dashboard" onClick={closeSidebar}>
            <Logo></Logo>
          </Link>
        </div>
        <ul className="pt-[10px] font-inter font-medium overflow-y-auto max-h-full">
          {menuItems.map((item) => (
            <NavLink
              onClick={closeSidebar}
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center hover:bg-gray-100 active:bg-gray-200 py-[20px] pl-[41px] no-underline ${
                  isActive ? "text-black" : "text-gray-500"
                }`
              }
            >
              <item.icon
                className={`${
                  location.pathname == item.path
                    ? "fill-black"
                    : "fill-gray-500"
                }`}
              />
              <div className="pl-6 text-lg">{item.name}</div>
            </NavLink>
          ))}
        </ul>
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}
      <div className="w-full lg:flex-1 flex flex-col h-screen">
        <Header onMenuClick={toggleSidebar}></Header>
        <main className="flex-1 overflow-y-auto lg:bg-gray-100 px-[25px] lg:px-[40px] lg:py-[25px] justify-center flex">
          <div className="w-full lg:w-[1110px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainPage;
