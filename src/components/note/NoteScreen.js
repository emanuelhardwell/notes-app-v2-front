import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalOpen } from "../../actions/uiActions";
import { Navbar } from "../ui/Navbar";
import { NoteModal } from "./NoteModal";
import MUIDataTable from "mui-datatables";
import { noteActive, noteDelete } from "../../actions/noteActions";

export const NoteScreen = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.note);

  const handleClick = () => {
    dispatch(modalOpen());
  };

  const deleteProducts = () => {
    console.log("delete products");
  };

  const handleDelete = (id) => {
    dispatch(noteDelete(id));
  };

  const handleUpdate = (id) => {
    const note = notes.filter((note) => note.id === id);
    // console.log(note[0]);

    dispatch(noteActive(note[0]));
    dispatch(modalOpen());
  };

  const colums = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: false,
        sort: true,
        display: false,
      },
    },
    { name: "title", label: "TITLE", options: { filter: false, sort: false } },
    {
      name: "description",
      label: "DESCRIPTION",
      options: { filter: false, sort: false },
    },
    {
      name: "delete",
      options: {
        filter: false,
        sort: false,
        empty: true,

        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <button
              className="btn btn-danger btn-sm"
              onClick={() => {
                // console.log(value);
                // console.log(tableMeta.rowData[0]);
                // console.log(updateValue);
                // const dataNew = products.filter(
                //   (p) => p.id !== tableMeta.rowData[0]
                // );
                // console.log(dataNew);
                // setProducts(dataNew);
                handleDelete(tableMeta.rowData[0]);
              }}
            >
              Delete
            </button>
          );
        },
      },
    },
    {
      name: "edit",
      options: {
        filter: false,
        sort: false,
        empty: true,

        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <button
              className="btn btn-success btn-sm"
              onClick={() => {
                // updateProdut(tableMeta.rowData[0]);
                // console.log(tableMeta);
                // console.log(tableMeta.tableData);
                handleUpdate(tableMeta.rowData[0]);
              }}
            >
              Edit
            </button>
          );
        },
      },
    },
  ];

  const options = {
    filterType: "checkbox",
    selectableRows: "none",
    responsive: "standard",
    tableBodyHeight: "400px",
    onRowsDelete: (rowsDeleted, data, dataIndex) => {
      console.log(rowsDeleted.data);
      console.log(data);
      console.log(dataIndex);
      deleteProducts(rowsDeleted);
    },
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="mt-3 text-center">Listado de notas</h1>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <button className="btn btn-primary" onClick={handleClick}>
                Agregar
              </button>
            </div>

            <MUIDataTable
              title={"Lista de notas"}
              columns={colums}
              data={notes}
              options={options}
            />
          </div>
        </div>
      </div>
      <NoteModal />
    </>
  );
};
