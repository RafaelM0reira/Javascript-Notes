import React from "react";
import logoImage from "../../assets/images/logo.png";
import "../../styles/header.scss";

function Header() {
  return (
    <section className="headerContainer">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logoImage} width="120" height="450" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu is-active ">
          <div className="navbar-end">
            <div className="xd">
              <a href="/register">
                <button className="button is-white ">
                  <p className="colorBtn">Register</p>
                </button>
              </a>

              <a href="/login">
                <button className="button is-outlined ml-2 loginBtn  ">
                  <p className="colorBtn">Login</p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;
