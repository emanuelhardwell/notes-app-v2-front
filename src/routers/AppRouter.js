import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { NoteScreen } from "../components/note/NoteScreen";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={NoteScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/register" component={RegisterScreen} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </>
  );
};
