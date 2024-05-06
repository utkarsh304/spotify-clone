import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
// import { Provider } from 'react-redux';
// import store from '../store/index'
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div>
      <Head>
        <title>Spotify</title>
        <meta name='description' content='NextJS Events' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <SessionProvider session={session}>
        {/* <Provider store={store} >
          <Component {...pageProps} />
        </Provider> */}
        <RecoilRoot >
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </div>);
}

export default MyApp;
