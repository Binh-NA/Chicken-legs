import React from 'react';
import type { NextPage } from 'next';
import { Layout } from 'components/layout';
import { Slogan } from 'components/slogan';

const TeamPage: NextPage = () => {
  return (
    <Layout title="Chicken legs">
      <Slogan />
    </Layout>
  );
};

export default TeamPage;
