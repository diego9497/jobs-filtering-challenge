import React from "react";
import { GlobalStyles } from "../../styles/GlobalStyles";
import Head from "next/head";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Jobs filtering</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
    </>
  );
};
export default Layout;
