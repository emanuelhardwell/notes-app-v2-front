import { combineReducers } from "redux";
import { noteReducer } from "./noteReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  note: noteReducer,
});
