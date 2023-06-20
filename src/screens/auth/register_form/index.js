import React, { useState } from "react";
import "../../../styles/register.scss";
import UserService from "../../../services/users";
import { Redirect } from "react-router-dom";
function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await UserService.register({
        name: name,
        email: email,
        password: password,
      });
      setRedirectToLogin(true);
    } catch (error) {
      setError(true);
    }
  };
  if (redirectToLogin == true) return <Redirect to={{ pathname: "/login" }} />;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label ">Name:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="e.g Alex Smith"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label ">Email:</label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="e.g. alexsmith@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label ">Password:</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="******"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="control registerBtn">
          <a href="/login" className="button  is-outlined loginBtn">
            <p className="colorBtn">Login</p>
          </a>
          <button className="button is-white" type="submit">
            <p className="colorBtn">Register</p>
          </button>
        </div>
        {error && (
          <>
            <br />
            <article className="message is-danger ">
              <div className="message-body is-danger">
                Invalid email or password
              </div>
            </article>
          </>
        )}
      </form>
    </>
  );
}
export default RegisterForm;
