import React, { useState, useEffect } from "react";
import UserService from "../../services/users";

function UsersEditForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const initializeUser = async () => {
    const user = await JSON.parse(localStorage.getItem("user"));
    setName(user["name"]);
    setEmail(user["email"]);
  };

  useEffect(() => {
    initializeUser();
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UserService.update({ email: email, name: name });
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="ml-2 mr-2">
          <div className="field">
            <label className="label userLabel">Full Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={name || ""}
                onChange={(e) => setName(e.target.value)}
                required
                name="name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label userLabel">Email</label>
            <div className="Control">
              <input
                className="input"
                type="text"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
                required
                name="email"
              />
            </div>
          </div>

          <div className="field">
            <div className="Control">
              <div className="columns">
                <div className="column">
                  <button className="button userBtn">
                    <p className="contentBtn">Update</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {status == "error" && (
            <article class="message is-danger">
              <div class="message-body">Problem in update</div>
            </article>
          )}
          {status == "success" && (
            <article class="message is-primary">
              <div class="message-body">Updated with success</div>
            </article>
          )}
        </div>
      </form>
    </>
  );
}

export default UsersEditForm;
