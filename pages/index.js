import Head from "next/head";
import React from "react";

import { Countries, Total } from "../components";

import API from "../api";

export default function Home() {
  React.useEffect(() => {
    API.get("totals").then((result) => console.log(result.data));
  }, []);

  return (
    <div>
      <Head>
        <title>COVID-19 Statistics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Total />
      </main>
    </div>
  );
}
