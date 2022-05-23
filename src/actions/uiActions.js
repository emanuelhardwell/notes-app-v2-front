import { types } from "../types/types";

export const modalOpen = () => ({
  type: types.uiOpenModal,
});

export const modalClose = () => ({
  type: types.uiCloseModal,
});
