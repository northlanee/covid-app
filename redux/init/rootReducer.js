import { combineReducers } from "redux";
import { totalReducer } from "../bus/totalReducer";

export const rootReducer = combineReducers({ total: totalReducer });
