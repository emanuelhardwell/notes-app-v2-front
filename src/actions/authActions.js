import Swal from "sweetalert2";
import { fetchWithOutToken } from "../helpers/fetch";
import { types } from "../types/types";

// const authCheckingFinish = () => ({
//   type: types.authCheckingFinish,
// });

export const startLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await fetchWithOutToken("auth", { email, password }, "POST");
      const body = await res.json();

      if (body.ok) {
        console.log(body);
        localStorage.setItem("x-token", body.token);
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

export const startRegister = (user) => {
  return (dispatch) => {
    console.log("startRegister");
  };
};

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});

// const logout = () => ({
//   type: types.authLogout,
// });
