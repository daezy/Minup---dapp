import "./App.css";
import TopBar from "./components/TopBar";
import { Routes, Route } from "react-router-dom";
import Mining from "./pages/Mining";
import Mine from "./pages/Mine";
import BottomNavigation from "./components/BottomNavigation";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useEffect, useState } from "react";
import { AppContext, AppContextProvider } from "./context/AppContext";
import ReferralPage from "./pages/ReferralPage";
import WalletContextProvider from "./context/WalletContextProvider";

function App() {
  const [network, setNetwork] = useState<"devnet" | "mainnet-beta" | "testnet">(
    "mainnet-beta"
  );

  return (
    <>
      <WalletContextProvider network={network}>
        <AppContextProvider network={network} setNetwork={setNetwork}>
          <div>
            <Toast />
            <ToastContainer
              position="bottom-right"
              transition={Slide}
              theme="dark"
            />
            <TopBar />
            <main>
              <div className="container md:w-[45%] mx-auto px-4 py-7 flex flex-col gap-7 mb-20 md:mb-auto">
                <Routes>
                  <Route path="/" element={<Mining />} />
                  <Route path="/app/mine" element={<Mine />} />
                  <Route path="/referral" element={<ReferralPage />} />
                </Routes>
              </div>
            </main>
            <BottomNavigation />
          </div>
        </AppContextProvider>
      </WalletContextProvider>
    </>
  );
}

const Toast = () => {
  const ctx = useContext(AppContext);

  useEffect(() => {
    if (ctx.error) {
      toast.error(ctx.error);
    }
    if (ctx.success) {
      toast.success(ctx.success);
    }
  }, [ctx.error, ctx.success]);

  return <></>;
};

export default App;
