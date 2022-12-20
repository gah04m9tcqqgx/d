import Head from "next/head";
import Link from "next/link";
import Header from "src/components/Layout/Header";
import Footer from "src/components/Layout/Footer";
import Nav from "src/components/Nav";
import NavSp from "src/components/NavSp";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { css } from "@emotion/react";
import { useEffect, useRef } from "react";

export default function TestGsap(): JSX.Element {
  const ref = useRef(null);
  // console.log(ref.current.child);
  useEffect((): void => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".box",
      {
        y: 100,
      },
      { y: 0, duration: 2, repeat: -1 }
    );
  }, []);
  return (
    <>
      <Head>
        <title>GSAPのテストページ</title>
      </Head>
      <div className="l-container" css={container}>
        <div className="box" css={[box, red]}></div>
        <div className="box" css={[box, blue]}></div>
        <div className="box" css={[box, yellow]}></div>
        <div className="box" css={[box, green]}></div>
        <div className="box" css={[box, purple]} ref={ref}></div>
      </div>
    </>
  );
}

const container = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
  @media screen and (min-width: 586px) {
    max-width: 530px;
  }
  @media screen and (min-width: 768px) {
    max-width: 720px;
  }
`;

const box = css`
  width: 10vmin;
  height: 10vmin;
`;

const red = css`
  background-color: red;
`;
const blue = css`
  background-color: blue;
`;
const yellow = css`
  background-color: yellow;
`;
const green = css`
  background-color: green;
`;
const purple = css`
  background-color: purple;
`;
const pink = css`
  background-color: pink;
`;
