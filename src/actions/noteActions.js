import { types } from "../types/types";

export const noteAdd = (note) => ({
  type: types.noteAdd,
  payload: note,
});

export const noteUpdate = (note) => ({
  type: types.noteUpdate,
  payload: note,
});

export const noteDelete = (noteId) => ({
  type: types.noteDelete,
  payload: {
    id: noteId,
  },
});

export const noteActive = (note) => ({
  type: types.noteActive,
  payload: note,
});

export const noteClearActive = () => ({
  type: types.noteClearActive,
});
