import React from "react";
import Header from "../../../components/header";
import logoImg from "../../../assets/images/logo.png";
import "../../../styles/register.scss";
import RegisterForm from "../register_form";
const RegisterScreen = () => (
  <>
    <Header />

    <section className="section is-medium register">
      <div className="columns">
        <div className="column"></div>
        <div className="column is-3">
          <div className="card ">
            <div className="card-content">
              <figure className="image is-4by1">
                <img src={logoImg} alt="Placeholder image" />
              </figure>
              <div className="content has-text-centered">
                Your notes on the cloud
              </div>
              <RegisterForm />
            </div>
          </div>
        </div>
        <div className="column"></div>
      </div>
    </section>
  </>
);

export default RegisterScreen;
