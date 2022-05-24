import React from "react";
import { useDispatch } from "react-redux";
import { modalOpen } from "../../actions/uiActions";
import { Navbar } from "../ui/Navbar";
import { NoteModal } from "./NoteModal";

export const NoteScreen = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(modalOpen());
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="mt-3 text-center">Listado de notas</h1>
        <div className="row">
          <div className="col-md-12">
            <button className="btn btn-primary" onClick={handleClick}>
              {" "}
              Agregar
            </button>
            <ul>
              <li>jjjajja</li>
              <li>jjjajja</li>
              <li>jjjajja</li>
            </ul>
          </div>
        </div>
      </div>
      <NoteModal />
    </>
  );
};
