import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { modalClose } from "../../actions/uiActions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const initialState = {
  title: "",
  description: "",
};

export const NoteModal = () => {
  const { modalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(initialState);

  const { title, description } = formValues;

  const handleChange = ({ target }) => {
    setFormValues({ ...formValues, [target.name]: target.value });
  };

  const handleReset = () => {
    setFormValues(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim().length < 5 || description.trim().length < 5) {
      Swal.fire(
        "Error",
        "Ingrese un titulo y una descripción igual o mayor a 5 letras",
        "error"
      );
    }
    console.log(title, description);
    handleReset();
  };

  const closeModal = () => {
    dispatch(modalClose());
  };

  return (
    <>
      <Modal
        isOpen={modalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Note Modal"
      >
        <h5> Registrar una nueva nota </h5>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Titulo"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Descripción"
              rows="2"
              name="description"
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="mb-3 d-grid gap-2">
            <button className="btn btn-primary">Crear nota</button>
          </div>
        </form>
      </Modal>
    </>
  );
};
