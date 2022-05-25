import Swal from "sweetalert2";
import { fetchWithOutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await fetchWithOutToken("auth", { email, password }, "POST");
      const body = await res.json();

      if (body.ok) {
        // console.log(body);
        localStorage.setItem("token", body.token);
        localStorage.setItem("token-init-date", new Date().getTime());
        dispatch(login({ name: body.name, uid: body.uid }));
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      Swal.fire("Error", "Error no esperado", "error");
    }
  };
};

export const startRegister = (name, email, password) => {
  return async (dispatch) => {
    try {
      const res = await fetchWithOutToken(
        "auth/new",
        { email, password, name },
        "POST"
      );
      const body = await res.json();

      if (body.ok) {
        localStorage.setItem("token", body.token);
        localStorage.setItem("token-init-date", new Date().getTime());
        dispatch(login({ name: body.name, uid: body.uid }));
      } else {
        Swal.fire("Error", body.msg, "error");
      }
    } catch (error) {
      Swal.fire("Error", "Error no esperado", "error");
    }
  };
};

export const startAuthCheckingFinish = () => {
  return async (dispatch) => {
    try {
      const res = await fetchWithToken("auth/renew");
      const body = await res.json();

      if (body.ok) {
        console.log(body);
        localStorage.setItem("token", body.token);
        localStorage.setItem("token-init-date", new Date().getTime());
        dispatch(login({ name: body.name, uid: body.uid }));
      } else {
        Swal.fire("Error", body.msg, "error");
        dispatch(authCheckingFinish());
      }
    } catch (error) {
      Swal.fire("Error", "Error no esperado", "error");
    }
  };
};

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

const authCheckingFinish = () => ({
  type: types.authCheckingFinish,
});

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

const logout = () => ({
  type: types.authLogout,
});
