/* eslint @typescript-eslint/no-explicit-any: 0 */

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import Head from "next/head";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Footer from "src/components/Layout/Footer";
import Header from "src/components/Layout/Header";
import Nav from "src/components/Nav";
import NavSp from "src/components/NavSp";

export default function Home() {
  const refH2_1 = useRef(null);
  const refH2_2 = useRef(null);
  const refH2_3 = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      refH2_1.current,
      {
        x: 50,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: refH2_1.current,
          start: "top bottom-=20%",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      refH2_2.current,
      {
        x: -10,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: refH2_2.current,
          start: "top bottom-=20%",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      refH2_3.current,
      {
        x: 50,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: refH2_3.current,
          start: "top bottom-=20%",
          // markers: true,
        },
      }
    );
  }, []);

  const isDarkMode: boolean = useSelector(
    (state: any) => state.darkMode.isDarkMode
  );
  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = "#1f2937";
    } else {
      document.body.style.backgroundColor = "#ffedd5";
    }
  }, [isDarkMode]);
  return (
    <>
      <Head>
        <title>about</title>
      </Head>
      <Header></Header>
      <Nav></Nav>
      <main>
        <article>
          <section className="w-full h-[500px] p-4 flex flex-col justify-center gap-10 bg-[url('https://1.bp.blogspot.com/-aC2jXDBJcuY/VpjBp16ShbI/AAAAAAAA25w/pL6seXQvsM0/s1600/bg_natural_sougen.jpg')] bg-cover">
            <div className="container max-w-screen-lg mx-auto">
              <h2
                className="text-gray-800 text-xl md:text-3xl font-bold text-end"
                ref={refH2_1}
              >
                東京生まれ。東京育ち。25歳。
                <br />
                ルート営業として、二社で就業。
                <br />
                フロントエンドの領域を勉強中。
              </h2>
            </div>
          </section>
          <section className="w-full h-[500px] p-4 flex flex-col justify-center gap-10 bg-[url('https://1.bp.blogspot.com/-0XUYPcO40n8/X5OcHdsaQTI/AAAAAAABb5M/9FW4NZlp5oklDgUSqAa9i3cekGp8PjGQACNcBGAsYHQ/s1920/bg_natural_river.jpg')] bg-cover">
            <div className="container max-w-screen-lg mx-auto">
              <h2
                className="text-gray-800 text-xl md:text-3xl font-bold text-start"
                ref={refH2_2}
              >
                HTML/CSS/Javascriptは勿論、
                <br />
                React/Next.js/WordPress等も使用可能。
              </h2>
            </div>
          </section>
          <section className="w-full h-[500px] p-4 flex flex-col justify-center gap-10 bg-[url('https://3.bp.blogspot.com/-oCO1xX92HUU/XLAcxF0IyZI/AAAAAAABSSw/EOF44Yd3TMAMKhvT20yX4oO9viIU6vO7QCLcBGAs/s800/bg_chiheisen_brown.jpg')] bg-cover">
            <div className="container max-w-screen-lg mx-auto">
              <h2
                className="text-gray-800 text-xl md:text-3xl font-bold text-end"
                ref={refH2_3}
              >
                休日はゲームをしたり、
                <br />
                アニメを見たり、
                <br />
                もっぱらインドア派。
              </h2>
            </div>
          </section>
        </article>
      </main>
      <NavSp></NavSp>
      <Footer></Footer>
    </>
  );
}
