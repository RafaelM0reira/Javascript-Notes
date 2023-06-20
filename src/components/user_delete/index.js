import React, { useState } from "react";
import UserService from "../../services/users";

function UsersDelete() {
  const deleteUser = async () => {
    if (window.confirm("Are you sure you wish to delete this account?")) {
      UserService.delete();
      window.location.href = "/";
    }
  };

  return (
    <button className="button is-danger" onClick={() => deleteUser()}>
      Excluir conta
    </button>
  );
}

export default UsersDelete;
