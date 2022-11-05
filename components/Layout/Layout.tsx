import React, { ReactNode } from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

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
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing Script&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="/ios/16.png" />
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

      <link rel="apple-touch-icon" href="/ios/64.png" />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/ios/152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/ios/180.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="/ios/167.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/ios/32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/ios/16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="mask-icon"
        href="/ios/16.png"
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
        content="https://ecommerce-nextjs-gilsonterra.vercel.app/android/android-launchericon-192-192.png"
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
        content="https://ecommerce-nextjs-gilsonterra.vercel.app/ios/16.png"
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
