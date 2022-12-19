/* eslint @typescript-eslint/no-explicit-any: 0 */
import { css } from "@emotion/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Nav = () => {
  const isDarkMode: boolean = useSelector(
    (state: any) => state.darkMode.isDarkMode
  );
  const router = useRouter();
  // const ref = useRef(null);
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(ref.current, {
  //     ScrollTrigger: {},
  //   });
  // }, []);
  return (
    <>
      <nav
        className={
          "hidden sm:block " +
          (isDarkMode
            ? "bg-gray-900 text-white"
            : "bg-orange-200 text-slate-700")
        }
      >
        <ul className="font-bold flex justify-center gap-4">
          <li>
            <Link
              href="/about"
              css={router.pathname === "/about" ? linkActive : link}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/" css={router.pathname === "/" ? linkActive : link}>
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              css={router.pathname === "/contact" ? linkActive : link}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;

const link = css`
  position: relative;
  font-size: 1.2rem;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
  transition: 0.3s;
  &:hover {
    color: red;
  }
  &::before {
    content: "";
    width: 100%;
    height: 2px;
    background-color: red;
    position: absolute;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: 0.3s, transform-origin 0s;
  }
  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }
`;

const linkActive = css`
  position: relative;
  font-size: 1.2rem;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
  color: red;
  &::before {
    content: "";
    width: 100%;
    height: 2px;
    background-color: red;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
