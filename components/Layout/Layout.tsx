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
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing Script&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/icons/favicon-32x32.png" />
      <meta name="application-name" content="PWA App" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="PWA App" />
      <meta name="description" content="Best PWA App in the world" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />

      <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/icons/touch-icon-ipad.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/touch-icon-iphone-retina.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="/icons/touch-icon-ipad-retina.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />

      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:url"
        content="https://ecommerce-nextjs-gilsonterra.vercel.app"
      />
      <meta name="twitter:title" content="PWA Lojinha by Gilson Terra" />
      <meta name="twitter:description" content="Lojinha by Gilson Terra" />
      <meta
        name="twitter:image"
        content="https://ecommerce-nextjs-gilsonterra.vercel.app/icons/android-chrome-192x192.png"
      />
      <meta name="twitter:creator" content="@gilsonterra" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="PWA Lojinha by Gilson Terra" />
      <meta property="og:description" content="Lojinha by Gilson Terra" />
      <meta property="og:site_name" content="PWA Lojinha by Gilson Terra" />
      <meta
        property="og:url"
        content="https://ecommerce-nextjs-gilsonterra.vercel.app"
      />
      <meta
        property="og:image"
        content="https://ecommerce-nextjs-gilsonterra.vercel.app/icons/apple-touch-icon.png"
      />

      <link
        rel="apple-touch-startup-image"
        href="/images/apple_splash_2048.png"
        sizes="2048x2732"
      />
      <link
        rel="apple-touch-startup-image"
        href="/images/apple_splash_1668.png"
        sizes="1668x2224"
      />
      <link
        rel="apple-touch-startup-image"
        href="/images/apple_splash_1536.png"
        sizes="1536x2048"
      />
      <link
        rel="apple-touch-startup-image"
        href="/images/apple_splash_1125.png"
        sizes="1125x2436"
      />
      <link
        rel="apple-touch-startup-image"
        href="/images/apple_splash_1242.png"
        sizes="1242x2208"
      />
      <link
        rel="apple-touch-startup-image"
        href="/images/apple_splash_750.png"
        sizes="750x1334"
      />
      <link
        rel="apple-touch-startup-image"
        href="/images/apple_splash_640.png"
        sizes="640x1136"
      />
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
