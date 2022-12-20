/* eslint @typescript-eslint/no-explicit-any: 0 */
import Head from "next/head";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "src/components/Layout/Footer";
import Header from "src/components/Layout/Header";
import Nav from "src/components/Nav";
import NavSp from "src/components/NavSp";

const Contact = () => {
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
        <title>contact</title>
      </Head>
      <Header></Header>
      <Nav></Nav>
      <main>
        <section
          className={
            "animate__animated animate__fadeIn " +
            (isDarkMode
              ? "bg-gray-800 text-white"
              : "bg-orange-100 text-slate-700")
          }
        >
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2
              className={
                "mb-4 text-4xl tracking-tight font-extrabold text-center  " +
                (isDarkMode ? "text-white" : "text-slate-900")
              }
            >
              Contact
            </h2>
            <p
              className={
                "mb-8 lg:mb-16 font-light text-center sm:text-xl " +
                (isDarkMode ? "text-white" : "text-slate-900")
              }
            >
              ご意見、ご要望等はこちらのフォームから連絡をお願いします。
            </p>
            <form
              action="https://ssgform.com/s/vc7RjrMBwK05"
              className="space-y-8"
              method="post"
            >
              <div>
                <label
                  htmlFor="email"
                  className={
                    "block mb-2 text-sm font-medium " +
                    (isDarkMode ? "text-white" : "text-slate-900")
                  }
                >
                  メールアドレス
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={
                    "shadow-sm border text-sm rounded-lg block w-full p-2.5 " +
                    (isDarkMode
                      ? "bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                      : "bg-gray-50 border-gray-300 text-slate-700 focus:ring-primary-500 focus:border-primary-500")
                  }
                  placeholder="メールアドレスを入力してください"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className={
                    "block mb-2 text-sm font-medium " +
                    (isDarkMode ? "text-white" : "text-slate-900")
                  }
                >
                  件名
                </label>
                <input
                  type="text"
                  name="text"
                  id="subject"
                  className={
                    "block p-3 w-full text-sm rounded-lg border  shadow-sm " +
                    (isDarkMode
                      ? "bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                      : "bg-gray-50 border-gray-300 text-slate-700 focus:ring-primary-500 focus:border-primary-500")
                  }
                  placeholder="件名を入力してください"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className={
                    "block mb-2 text-sm font-medium" +
                    (isDarkMode ? "text-white" : "text-slate-900")
                  }
                >
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className={
                    "block p-2.5 w-full text-sm rounded-lg shadow-sm border " +
                    (isDarkMode
                      ? "bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                      : "bg-gray-50 border-gray-300 text-slate-700 focus:ring-primary-500 focus:border-primary-500")
                  }
                  placeholder="お問い合わせ内容を入力してください"
                ></textarea>
              </div>
              <div className="mx-auto w-fit">
                <button
                  type="submit"
                  className={
                    "py-3 px-5 text-sm font-medium text-center text-white rounded-md shadow-md duration-300 active:translate-y-1 sm:w-fit relative z-auto before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:scale-x-0 hover:before:scale-x-100 before:duration-300 before:rounded-md before:origin-left focus:ring-4 focus:outline-none focus:ring-primary-300 " +
                    (isDarkMode
                      ? "bg-primary-600 before:bg-primary-700 focus:ring-primary-800 shadow-primary-600"
                      : "bg-orange-400 before:bg-orange-600 focus:ring-orange-700 shadow-orange-600")
                  }
                >
                  <span className="relative z-0">送信</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <NavSp></NavSp>
      <Footer />
    </>
  );
};

export default Contact;
