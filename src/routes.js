import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/home";
import RegisterScreen from "./screens/auth/register";
import LoginScreen from "./screens/auth/login";
import NotesScreen from "./screens/notes/index";
import UsersEditScreen from "./screens/users/edit";
import PrivateRoute from "./screens/auth/private_router";

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={HomeScreen} />
    <Route exact path="/register" component={RegisterScreen} />
    <Route exact path="/login" component={LoginScreen} />
    <PrivateRoute exact path="/notes" component={NotesScreen} />
    <PrivateRoute exact path="/users/edit" component={UsersEditScreen} />
  </BrowserRouter>
);
export default Routes;
