import React, { useState } from "react";
import logoImage from "../../assets/images/logo-white.png";
import "../../styles/header.scss";
import UserService from "../../services/users";
import { Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

function HeaderLogged(props) {
  const [redirectToHome, setRedirectToHome] = useState(false);

  const logOut = async () => {
    await UserService.logout();
    setRedirectToHome(true);
  };

  if (redirectToHome == true) return <Redirect to={{ pathname: "/" }} />;

  return (
    <section className="headerContainerLogged ">
      <nav
        className="navbar navLogged"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/notes">
            <img src={logoImage} width="120" height="450" />
          </a>
        </div>
        <div className="btnDiv">
          <button
            className="button mt-1 ml-1 btnList"
            color="white"
            onClick={() => props.setIsOpen(true)}
          >
            <FontAwesomeIcon icon={faList} inverse />
          </button>
        </div>
        <div
          id="navbarBasicExample"
          className="navbar-menu is-active navLogged"
        >
          <div className="navbar-end navLogged ">
            <div className="btnDiv">
              <a href="/users/edit">
                <button className="button mt-1">
                  <p>Edit profile</p>
                </button>
              </a>
            </div>
            <div className="btnDiv">
              <a href="/" onClick={(e) => logOut()}>
                <button className="button ml-4 mt-1 btnLogout">
                  <p>Logout</p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default HeaderLogged;
