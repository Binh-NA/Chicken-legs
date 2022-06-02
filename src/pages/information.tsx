import React from 'react';
import type { NextPage } from 'next';
import { Layout } from 'components/layout';
import { Information } from 'components/information';

const InformationPage: NextPage = () => {
  return (
    <Layout title="Chicken leg | Information">
      <Information />
    </Layout>
  );
};

export default InformationPage;
