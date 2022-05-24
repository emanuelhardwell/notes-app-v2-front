import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { modalClose } from "../../actions/uiActions";
import {
  noteAdd,
  noteClearActive,
  noteUpdate,
} from "../../actions/noteActions";
import { v4 as uuidv4 } from "uuid";

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
  const { noteActive } = useSelector((state) => state.note);
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
      return Swal.fire(
        "Error",
        "Ingrese un titulo y una descripción igual o mayor a 5 letras",
        "error"
      );
    }
    // console.log(title, description);

    if (noteActive) {
      dispatch(noteUpdate(formValues));
      closeModal();
      dispatch(noteClearActive());
    } else {
      dispatch(noteAdd({ id: uuidv4(), title, description }));
      handleReset();
      closeModal();
    }
  };

  const closeModal = () => {
    dispatch(modalClose());
    dispatch(noteClearActive());
  };

  useEffect(() => {
    if (noteActive) {
      setFormValues(noteActive);
    } else {
      setFormValues(initialState);
    }
  }, [noteActive]);

  return (
    <>
      <Modal
        isOpen={modalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        // className="modal"
        overlayClassName="modal-fondo"
        contentLabel="Note Modal"
      >
        <h5 className="text-center">
          {" "}
          {noteActive ? "Editar nota" : "Registrar nueva nota"}{" "}
        </h5>
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
            <button className="btn btn-primary">
              {" "}
              {noteActive ? "Editar nota" : "Crear nota"}{" "}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};
