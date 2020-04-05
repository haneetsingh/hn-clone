import Head from 'next/head';

function Layout({ children }) {
  return(
    <>
      <Head>
        <title>Hacker News Clone</title>
        <meta name="referrer" content="origin" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/style.css" />
      </Head>
      {children}
    </>
  )
}

export default Layout;
