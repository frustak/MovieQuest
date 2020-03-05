import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';

const Header = props => (
  <header className={styles.Header}>
    <h1>Quest The Movie</h1>
    <img src={logo} alt="logo" />
  </header>
);

export default Header;
