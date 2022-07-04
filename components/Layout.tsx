import React from "react";
import Head from "next/head";
import css from "./layout.module.css";
import Header from "./Header";

interface ILayoutProps {
  title: string;
  children?: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className={css.container}>{children}</main>
    </>
  );
};

export default Layout;
