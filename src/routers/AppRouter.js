import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { NoteScreen } from "../components/note/NoteScreen";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={NoteScreen} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </>
  );
};
