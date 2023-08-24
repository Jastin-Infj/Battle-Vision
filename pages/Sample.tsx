import React from "react";

import '../src/frontend/scss/sample.scss';
import Head from "next/head";

export default function Sample() {
  return (
    <>
      <Head>
        <title>Gridを使おう</title>
        <meta property="og:title" content="Gridを使おう" />
      </Head>
      <div>
        <header>header</header>
        <nav>left</nav>
        <main>main</main>
        <aside>right</aside>
        <footer>footer</footer>
      </div>
    </>
  );
}