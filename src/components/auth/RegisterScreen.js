import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { startRegister } from "../../actions/authActions";
import { useForm } from "../../hooks/useForm";

const initialState = {
  rname: "Juan",
  remail: "juan@gmail.com",
  rpassword1: "123456",
  rpassword2: "123456",
};

export const RegisterScreen = () => {
  const [formRegisterValues, handleRegisterInputChange] = useForm(initialState);

  const { rname, remail, rpassword1, rpassword2 } = formRegisterValues;

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    if (rname.trim().length < 3 || remail.trim().length < 3) {
      return Swal.fire("Error", "El nombre y el email son necesarios", "error");
    }

    if (rpassword1 !== rpassword2) {
      return Swal.fire(
        "Error",
        "Las contraseñas deben coincidir y ser mayor o igual a 6 caracteres",
        "error"
      );
    }
    dispatch(startRegister(rname, remail, rpassword1));
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 p-5 mx-auto">
            <div className="card">
              <div className="card-body">
                <h4 className="text-center mb-4"> Registrate gratis </h4>
                <form onSubmit={handleRegister}>
                  <div className="mb-3 input-group">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa-solid fa-user"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="rname"
                      value={rname}
                      onChange={handleRegisterInputChange}
                    />
                  </div>
                  <div className="mb-3 input-group">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa-solid fa-envelope"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="remail"
                      value={remail}
                      onChange={handleRegisterInputChange}
                    />
                  </div>
                  <div className="mb-3 input-group">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="rpassword1"
                      value={rpassword1}
                      onChange={handleRegisterInputChange}
                    />
                  </div>
                  <div className="mb-3 input-group">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa-solid fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password repeat"
                      name="rpassword2"
                      value={rpassword2}
                      onChange={handleRegisterInputChange}
                    />
                  </div>
                  <div className="mb-5 d-grid gap-2">
                    <button type="submit" className="btn btn-success">
                      Crear cuenta <span></span>
                      <i className="fa-solid fa-user-shield"></i>
                    </button>
                  </div>
                </form>
                <hr />

                <div className="mb-3">
                  <p className="text-center">
                    ¿Ya tienes una cuenta? <span></span>
                    <Link to="/login"> Iniciar sesión </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
