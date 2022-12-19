/* eslint @typescript-eslint/no-explicit-any: 0 */

import { useSelector } from "react-redux";

const Footer = (): JSX.Element => {
  const isDarkMode: boolean = useSelector(
    (state: any) => state.darkMode.isDarkMode
  );

  return (
    <footer
      className={
        "w-full p-2 after:content-[''] after:block after:w-full after:h-[60px] sm:after:hidden " +
        (isDarkMode ? "bg-gray-900 text-white" : "bg-orange-200 text-slate-700")
      }
    >
      <small className="block text-center">© JoeAoki 2022</small>
    </footer>
  );
};

export default Footer;
