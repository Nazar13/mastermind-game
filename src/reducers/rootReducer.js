import { combineReducers } from "redux";
import managePlayers from "./managePlayers.js";
import currentPlayer from "./currentPlayer";

const rootReducer = combineReducers({
  managePlayers,
  currentPlayer
});

export default rootReducer;
