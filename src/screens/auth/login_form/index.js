import React, { useState } from "react";
import "../../../styles/register.scss";
import UserService from "../../../services/users";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await UserService.login({
        email: email,
        password: password,
      });

      window.location.href = "/notes";
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          <a href="/register" className="button  is-outlined loginBtn">
            <p className="colorBtn">Register</p>
          </a>
          <button className="button is-white" type="submit">
            <p className="colorBtn">Login</p>
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
export default LoginForm;
