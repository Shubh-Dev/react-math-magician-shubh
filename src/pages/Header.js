import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <span href="/">
      <Link style={{ textDecoration: 'none', color: '#fff', fontSize: '70px' }} to="/">Math Magicians</Link>
    </span>
    <div className="navigation">
      <Link className="nav" to="/">Home</Link>
      <Link className="nav" to="/calculator">Calculator</Link>
      <Link className="nav" to="/quote">Quote</Link>
    </div>
  </header>
);

export default Header;
