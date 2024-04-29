import { NavLink } from "react-router-dom";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import logo from "../assets/logo.png";
import { NavigationRoutes as routes } from "../utils/Navigation";

const TopBar = () => {
  return (
    <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
      <div className="brand">
        <img src={logo} alt="logo" className="max-w-full" width={100} />
      </div>

      <div className="links md:flex items-center hidden">
        {routes.map((route) => (
          <NavLink
            to={route.path}
            key={route.title}
            className={"text-slate-100 p-3 mx-2 flex items-center gap-3"}
          >
            {route.icon}
            {route.title}
          </NavLink>
        ))}
      </div>

      <WalletMultiButton className="bg-red-200" />
    </nav>
  );
};

export default TopBar;
