import "../styles/globals.css";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import store from "../app/store";
import Script from "next/script";



import "bootstrap/dist/css/bootstrap.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Provider store={store}>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
      />
      <Component {...pageProps} />
    </Provider>
  );
}
