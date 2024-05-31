'use client';
import React from 'react';

import { Navigation } from 'components/Navigation';
import { Layout as AntdLayout } from 'antd';

import { itemsList } from 'components/Navigation/itemsList';

const { Header, Footer, Content } = AntdLayout;
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AntdLayout>
        <Header style={{ position: 'fixed', backgroundColor: 'transparent' }}>
          <Navigation itemsList={itemsList}></Navigation>
        </Header>
      </AntdLayout>

      <AntdLayout>
        <Content>{children}</Content>
      </AntdLayout>

      <AntdLayout>
        <Footer>
          <div>TEST FOOTER</div>
        </Footer>
      </AntdLayout>
    </>
  );
}
