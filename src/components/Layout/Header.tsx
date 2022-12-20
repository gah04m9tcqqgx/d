/* eslint @typescript-eslint/no-explicit-any: 0 */

import { useSelector } from "react-redux";
import DarkModeButton from "src/components/DarkModeButton";

const Header = () => {
  const isDarkMode: boolean = useSelector(
    (state: any) => state.darkMode.isDarkMode
  );
  return (
    <header
      className={
        isDarkMode ? "bg-gray-900 text-white" : "bg-orange-200 text-slate-700"
      }
    >
      <div className="container mx-auto text-center relative h-[150px] flex justify-center items-center">
        <DarkModeButton></DarkModeButton>
        <p className="animate__animated animate__lightSpeedInLeft font-bold text-4xl md:text-6xl">
          JoeAokiの備忘録
        </p>
      </div>
    </header>
  );
};

export default Header;
