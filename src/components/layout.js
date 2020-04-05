import Head from 'next/head';
import Header from './header';

function Layout({ children }) {
  return(
    <>
      <Head>
        <title>Hacker News Clone</title>
        <meta name="referrer" content="origin" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="./static/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="./static/style.css" />
      </Head>
      <center>
        <table
          id="hnmain"
          border="0"
          cellPadding="0"
          cellSpacing="0"
          width="85%"
          style={{ backgroundColor: '#f6f6ef' }}
        >
          <tbody>
            <Header />
            {children}
          </tbody>
        </table>
      </center>
    </>
  )
}

export default Layout;
