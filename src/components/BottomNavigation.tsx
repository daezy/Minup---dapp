import { BiCalculator, BiUserVoice } from "react-icons/bi";
import { FaCoins } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { NavigationRoutes as routes } from "../utils/Navigation";

const BottomNavigation = () => {
  return (
    <div className="bg-white fixed bottom-0 w-screen shadow-md bottom md:hidden">
      <div className="flex items-center justify-around">
        {routes.map((route) => (
          <NavLink
            to={route.path}
            key={route.title}
            className={"text-slate-700 p-4 flex items-center flex-col gap-1"}
          >
            {route.icon}
            {route.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
