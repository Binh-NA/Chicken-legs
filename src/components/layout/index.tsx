import React from 'react';
import Head from 'next/head';

export interface Props {
  title: string;
  children?: React.ReactNode;
}

export const Layout = (props: Props): React.ReactElement => (
  <>
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/icon-chicken-legs.png" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="⚡️ Chicken legs ⚡️, we find joy after tiring moments at work" />
      <meta name="keywords" content="chicken legs, chicken, legs" />
      <meta name="author" content="BinhNA" />
      <meta name="generator" content="BinhNA v1.0.0" />
      <meta name="distribution" content="Global" />
      <meta name="subject" content="Eat & Drink"></meta>
      <meta name="rating" content="General" />
      <meta property="og:title" content="💗 → Chicken legs ® ← 💗" />
      <meta property="og:type" content="Website" />
      <meta property="og:url" content="https://www.chickenlegs.fun/" />
      <meta property="og:image" content="https://www.chickenlegs.fun/banner.jpg" />
      <meta
        property="og:description"
        content="We are a non-profit group. All for one goal of relieving stress after work. laugh more laugh. us of the present."
      />
      <meta property="og:site_name" content="Chicken legs Co.,Ltd." />
      <meta property="fb:app_id" content="1559343007594130" />
    </Head>
    {props.children}
  </>
);
