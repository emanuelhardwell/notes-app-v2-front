import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { startAuthCheckingFinish } from "../actions/authActions";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { NoteScreen } from "../components/note/NoteScreen";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startAuthCheckingFinish());
  }, [dispatch]);

  if (checking) {
    return <h5> LOADING .................... </h5>;
  }

  return (
    <>
      <Router>
        <div>
          <Switch>
            <PrivateRouter
              exact
              path="/"
              component={NoteScreen}
              isAuthenticated={!!uid}
            />
            <PublicRouter
              exact
              path="/login"
              component={LoginScreen}
              isAuthenticated={!!uid}
            />
            <PublicRouter
              exact
              path="/register"
              component={RegisterScreen}
              isAuthenticated={!!uid}
            />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </>
  );
};
