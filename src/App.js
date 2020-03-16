import React from 'react';
import AppHeader from './components/AppHeader';
import Quote from './components/Quote';
import styled from '@emotion/styled';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
`;

function App() {
  return (
    <Layout>
      <AppHeader />
      <Main>
        <Quote />
      </Main>
    </Layout>
  );
}

export default App;
