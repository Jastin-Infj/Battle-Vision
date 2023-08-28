import React from "react";
import Head from "next/head";

import Messages from '../src/frontend/json/Strings.json';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{Messages.Title}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}