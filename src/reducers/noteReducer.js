import { types } from "../types/types";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  notes: [
    {
      id: uuidv4(),
      title: "Hola bebe",
      description: "Hola bebe",
    },
    {
      id: uuidv4(),
      title: "Hola bebe 2",
      description: "Hola bebe 2",
    },
    {
      id: uuidv4(),
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

    case types.noteActive:
      return {
        ...state,
        noteActive: action.payload,
      };

    case types.noteClearActive:
      return {
        ...state,
        noteActive: null,
      };

    default:
      return state;
  }
};
