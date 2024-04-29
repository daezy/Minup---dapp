import { BiCalculator, BiUser, BiUserVoice } from "react-icons/bi";
import { FaCoins } from "react-icons/fa";

export const NavigationRoutes = [
  { path: "/", title: "Mining", icon: <FaCoins /> },
  { path: "/referral", title: "Referral", icon: <BiUser /> },
  { path: "/calculator", title: "Calculator", icon: <BiCalculator /> },
  { path: "/faq", title: "Faq", icon: <BiUserVoice /> },
];
