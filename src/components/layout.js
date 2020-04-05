import Head from 'next/head';
import Header from './Header';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Hacker News Clone</title>
      <meta name="referrer" content="origin" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="./static/favicon.ico" />
      <link rel="stylesheet" type="text/css" href="./static/styles.css" />
    </Head>
    <Header />
    { children }
  </>
);

export default Layout;
