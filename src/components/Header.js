import React from 'react';
import './Header.css';
import logo from './logo_bb.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo breaking bad"></img>
    </header>
  );
}
export default Header;
