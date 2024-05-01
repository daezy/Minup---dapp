import { NavLink } from "react-router-dom";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import logo from "../assets/logo.png";
import { NavigationRoutes as routes } from "../utils/Navigation";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const TopBar = () => {
  const [dropOpen, setDropOpen] = useState<boolean>(false);
  const ctx = useContext(AppContext);

  const toggleDropdown = () => {
    setDropOpen((drop) => !drop);
  };
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

      <div>
        <div className="flex justify-end items-center gap-3">
          <div>
            <div className="dropdown">
              <button
                className="text-slate-100  py-4 px-3 rounded-2xl  flex justify-between gap-3 items-center mr-3 capitalize text-sm font-medium shadow bg-slate-700"
                onClick={() => toggleDropdown()}
              >
                <img
                  src="./img/sol.png"
                  className="max-w-full"
                  width={27}
                  alt="sol"
                />{" "}
                <span className="hidden md:block">
                  {" "}
                  {ctx.network && ctx.network}
                </span>
              </button>
              <div
                id="myDropdown"
                className={`dropdown-content ${dropOpen ? "show" : ""}`}
              >
                <a
                  href="#"
                  onClick={() => {
                    ctx.setNetwork("mainnet-beta");
                    toggleDropdown();
                  }}
                >
                  Mainnet
                </a>
                <a
                  href="#"
                  onClick={() => {
                    ctx.setNetwork("testnet");
                    toggleDropdown();
                  }}
                >
                  Testnet
                </a>
                <a
                  href="#"
                  onClick={() => {
                    ctx.setNetwork("devnet");
                    toggleDropdown();
                  }}
                >
                  Devnet
                </a>
              </div>
            </div>
          </div>
          <WalletMultiButton className="bg-red-200" />
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
