import React, { useState } from "react";
import UserService from "../../services/users";

function UsersEditFormPassword() {
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (password == password_confirmation) {
      try {
        await UserService.updatePassword({ password: password });
        setStatus("success");
      } catch (err) {
        setStatus("error");
      }
    } else {
      setStatus("error_confirmation_password");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <label className="label userLabel">Password</label>
            <input
              className="input"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              name="password"
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label userLabel">Confirm Password</label>
            <input
              className="input"
              type="text"
              value={password}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
              name="password_confirmation"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <div className="columns">
              <div className="column">
                <button className="button userBtn">
                  <p className="contentBtn">Update Password</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {status == "error_update" && (
          <article class="message is-danger">
            <div class="message-body">Problem in password update</div>
          </article>
        )}
        {status == "error_confirmation_password" && (
          <article class="message is-danger">
            <div class="message-body">Password don't match</div>
          </article>
        )}
        {status == "success" && (
          <article class="message is-danger">
            <div class="message-body">Updated with success</div>
          </article>
        )}
      </form>
    </>
  );
}

export default UsersEditFormPassword;
