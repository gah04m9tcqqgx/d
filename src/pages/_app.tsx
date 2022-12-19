import type { AppProps } from "next/app";
import "src/styles/globals.css";
import "animate.css";
import { Provider } from "react-redux";
import { store } from "src/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}