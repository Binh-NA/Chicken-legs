import React from 'react';
import type { NextPage } from 'next';
import { Layout } from 'components/layout';
import { Invitation } from 'components/invitation';

const InvitationPage: NextPage = () => {
  return (
    <Layout title="Chicken legs | Invitation">
      <Invitation />
    </Layout>
  );
};

export default InvitationPage;
