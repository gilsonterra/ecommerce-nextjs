import React, { ReactNode } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children, title, description }: Props): JSX.Element => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link href="https://fonts.googleapis.com/css2?family=Dancing Script&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NextSeo
      title={title}
      description={description}
      openGraph={{ title, description }}
    />
   {children}
  </div>
);

export default Layout;
