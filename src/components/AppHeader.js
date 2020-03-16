import React from 'react';
import logo from './logo_bb.svg';
import styled from '@emotion/styled';

const Header = styled.header`
  display: flex;
  height: 15vh;
  justify-content: center;
`;

function AppHeader() {
  return (
    <Header>
      <img src={logo} alt="logo breaking bad"></img>
    </Header>
  );
}
export default AppHeader;
