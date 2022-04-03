import '../styles/globals.css';

import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import BaseWrapper from '@homely-components/Base/BaseWrapper';

import store from '../app/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <BaseWrapper Component={<Component {...pageProps} />} />
    </Provider>
  );
}

// Details about PWA: https://bestofreactjs.com/repo/shadowwalker-next-pwa-react-nextjs-extensions
