import * as React from "react";
import Header from "./header";
import Head from "next/head";
export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Checkie web manager app" />
      </Head>
      <Header />
      <main className="flex-1 mt-[80px]">{children}</main>
    </div>
  );
};
