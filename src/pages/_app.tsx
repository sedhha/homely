import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import store from "../app/store";
import 'bootstrap/dist/css/bootstrap.css'
import { ChakraProvider } from '@chakra-ui/react';


import BaseWrapper from '@homely-components/Base/BaseWrapper';


export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Provider store={store}>
      <ChakraProvider>
        <BaseWrapper Component={<Component {...pageProps} />} />
      </ChakraProvider>
    </Provider>
  );
}

// Details about PWA: https://bestofreactjs.com/repo/shadowwalker-next-pwa-react-nextjs-extensions
