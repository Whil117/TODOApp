import type { AppProps } from "next/app";
import { Global, css } from '@emotion/react'
import Head from "next/head";

const Normalize = `
body{
  margin:0;
  padding:0;
}
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      </Head>
      <Global styles={css`${Normalize}`}/>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
