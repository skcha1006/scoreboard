import {combineReducers} from "redux";
import {playerReducer} from "./players";

export const allReducers = combineReducers( {
  player: playerReducer
});