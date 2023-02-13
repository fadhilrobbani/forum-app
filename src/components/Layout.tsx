import Head from 'next/head';
import React, { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout({ children, pageTitle }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
    </>
  );
}
