import "./App.css";
import TopBar from "./components/TopBar";
import { Routes, Route } from "react-router-dom";
import Mining from "./pages/Mining";
import Mine from "./pages/Mine";
import BottomNavigation from "./components/BottomNavigation";

function App() {
  return (
    <>
      <TopBar />
      <main>
        <div className="container md:w-[45%] mx-auto px-4 py-7 flex flex-col gap-7 mb-20 md:mb-auto">
          <Routes>
            <Route path="/" element={<Mining />} />
            <Route path="/Mine" element={<Mine />} />
          </Routes>
        </div>
      </main>
      <BottomNavigation />
    </>
  );
}

export default App;
