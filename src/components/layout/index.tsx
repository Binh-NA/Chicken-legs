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
      <meta name="description" content="Chicken legs" />
      <link rel="icon" href="/icon-chicken-legs.png" />
    </Head>
    {props.children}
  </>
);
