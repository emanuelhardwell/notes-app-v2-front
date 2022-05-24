import { types } from "../types/types";

const initialState = {
  notes: [
    {
      id: new Date().getTime(),
      title: "Hola bebe",
      description: "Hola bebe",
    },
    {
      id: new Date().getTime(),
      title: "Hola bebe 2",
      description: "Hola bebe 2",
    },
    {
      id: new Date().getTime(),
      title: "Hola bebe 3",
      description: "Hola bebe 3",
    },
  ],
  noteActive: null,
};

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.noteAdd:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    case types.noteUpdate:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };

    case types.noteDelete:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };

    default:
      return state;
  }
};
