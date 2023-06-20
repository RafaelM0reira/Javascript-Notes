import React from "react";
import "../../../styles/users.scss";
import HeaderLogged from "../../../components/header_logged";
import UsersEditForm from "../../../components/user_edit_form";
import UsersEditFormPassword from "../../../components/user_edit_password_form";
import UsersDelete from "../../../components/user_delete";

const UserEditScreen = () => (
  <>
    <HeaderLogged />
    <section className="section">
      <div className="columns">
        <div className="column is-half is-offset-3">
          <h1 className="title userTitle">Personal Information</h1>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <UsersEditForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-half is-offset-3">
          <h1 className="title userTitle">Password</h1>
          <div className="card">
            <div className="card-content">
              <div className="content">
                <UsersEditFormPassword />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column is-half is-offset-3 ">
          <UsersDelete />
        </div>
      </div>
    </section>
  </>
);

export default UserEditScreen;
