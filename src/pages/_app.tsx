import Head from "next/head";
import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";

const Normalize = `
body{
  margin:0;
  padding:0;
}
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>TodoApp</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
      </Head>
      <Global
        styles={css`
          ${Normalize}
        `}
      />
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
