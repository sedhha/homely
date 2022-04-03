import '../styles/globals.css';

import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import BaseWrapper from '@homely-components/Base/BaseWrapper';
import store from '../app/store';
import { ChakraProvider } from '@chakra-ui/react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <BaseWrapper Component={<Component {...pageProps} />} />
      </ChakraProvider>
    </Provider>
  );
}

// Details about PWA: https://bestofreactjs.com/repo/shadowwalker-next-pwa-react-nextjs-extensions
