/* eslint @typescript-eslint/no-explicit-any: 0 */
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap/dist/gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

type props = {
  link: string;
  img: string;
  imgAlt: string;
  title: string;
  text: string;
};

const Card = (props: props) => {
  // const ref = useRef([]);
  // const setAnimation = (): void => {
  //   gsap.from(ref.current, {
  //     scrollTrigger: {},
  //   });
  // };
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   setAnimation();
  // }, []);

  const isDarkMode = useSelector((state: any) => state.darkMode.isDarkMode);

  return (
    <article
      className={
        "w-full min-w-full md:h-[450px] lg:h-[500px] border rounded-md shadow-md " +
        (isDarkMode
          ? "bg-gray-900 border-gray-700"
          : "bg-orange-300 border-gray-200")
      }
    >
      <Link href={`/${props.link}`}>
        <img
          className="w-full h-2/3 rounded-t-md object-fill"
          src={props.img}
          alt={props.imgAlt}
        />
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5
            className={
              "mb-2 text-2xl font-bold tracking-tight overflow-hidden whitespace-nowrap w-full overflow-ellipsis " +
              (isDarkMode ? "text-white" : "text-gray-900")
            }
          >
            {props.title}
          </h5>
        </Link>
        <p
          className={
            "mb-2 font-normal overflow-hidden whitespace-nowrap w-full overflow-ellipsis " +
            (isDarkMode ? "text-gray-400" : "text-gray-700")
          }
        >
          {props.text}
        </p>
        <Link
          href={`/${props.link}`}
          className={
            "inline-flex items-center px-3 py-2 text-sm font-medium text-center shadow-md rounded-md focus:ring-4 focus:outline-none duration-300 active:translate-y-1 sm:w-fit relative z-auto before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:rounded-md before:origin-left " +
            (isDarkMode
              ? "bg-primary-600 before:bg-primary-700 focus:ring-primary-800 shadow-primary-600 text-white"
              : "bg-orange-400 before:bg-orange-600 focus:ring-orange-700 shadow-orange-600")
          }
        >
          <span className="relative z-0">読む</span>
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default Card;
