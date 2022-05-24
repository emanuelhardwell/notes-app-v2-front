import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalOpen } from "../../actions/uiActions";
import { Navbar } from "../ui/Navbar";
import { NoteModal } from "./NoteModal";
import MUIDataTable from "mui-datatables";

export const NoteScreen = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.note);

  const handleClick = () => {
    dispatch(modalOpen());
  };

  const deleteProducts = () => {
    console.log("delete products");
  };

  const colums = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: false,
        sort: true,
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
                console.log(value);
                console.log(tableMeta.rowData[0]);
                // console.log(updateValue);
                // const dataNew = products.filter(
                //   (p) => p.id !== tableMeta.rowData[0]
                // );
                // console.log(dataNew);
                // setProducts(dataNew);
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
    onRowsDelete: (rowsDeleted, data, dataIndex) => {
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
