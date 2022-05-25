import { types } from "../types/types";

const authCheckingFinish = () => ({
  type: types.authCheckingFinish,
});

const startLogin = (user) => {
  return (dispatch) => {
    console.log("startLogin");
  };
};

const startRegister = (user) => {
  return (dispatch) => {
    console.log("startRegister");
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

const logout = () => ({
  type: types.authLogout,
});
