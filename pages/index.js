import Head from "next/head";
import React from "react";

import { Countries, Total, Spinner } from "../components";
import { fetchTotal } from "../redux/bus/totalReducer";

import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchTotal());
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
