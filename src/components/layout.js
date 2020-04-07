import Head from 'next/head';
import Header from './header';

const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
      <meta name="description" content="Hacker news clone with Next.js" />
      <meta name="keywords" content="Next.js, React, PWA" />
      <meta name="referrer" content="origin" />
      <title>Hacker News Clone</title>

      <link rel="shortcut icon" href="./favicon.ico" />
      <link rel="stylesheet" type="text/css" href="./styles.css" />
      <link rel="manifest" href="./manifest.json" />
      <link rel="apple-touch-icon" href="./icons/icon-192x192.png"></link>
      <meta name="theme-color" content="#ff6660"/>
    </Head>
    <Header />
    { children }
  </>
);

export default Layout;
