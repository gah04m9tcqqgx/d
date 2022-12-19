/* eslint @typescript-eslint/no-explicit-any: 0 */
import Head from "next/head";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Articles from "src/components/Articles";
import Footer from "src/components/Layout/Footer";
import Header from "src/components/Layout/Header";
import Nav from "src/components/Nav";
import NavSp from "src/components/NavSp";

export default function Home() {
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
        <title>index2</title>
      </Head>
      <Header></Header>
      <Nav></Nav>
      <Articles />
      <NavSp></NavSp>
      <Footer />
    </>
  );
}
