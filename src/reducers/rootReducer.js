import { combineReducers } from "redux";
import managePlayers from "./managePlayers.js";
import manageGameSession from "./manageGameSession.js";
import currentPlayer from "./currentPlayer";

const rootReducer = combineReducers({
  managePlayers,
  manageGameSession,
  currentPlayer
});

export default rootReducer;
