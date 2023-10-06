import React from 'react';
import Logo from './assets/img/choripan.png';

const Header = () => {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
          <h1>Choripan-HTML</h1>
          <img className="logo" src={Logo} alt="" />
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="index.html#hero" className="bolds">Inicio</a></li>
            <li><a href="index.html#team">Team</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

      </div>
    </header>
  );
}

export default Header;
