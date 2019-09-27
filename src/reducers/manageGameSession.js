import { UPDATE_HISTORY, CLEAR_HISTORY } from "../actions/actionsList.js";
import { defaultPlayers } from "../../src/defaultPlayersList.js";

const intialState = {
  players: defaultPlayers
};

const manageGameSession = (state = intialState, action) => {
  const playerList = [...state.players];
  const players = [...state.players];
  switch (action.type) {
    case UPDATE_HISTORY:
      players.forEach(player => {
        if (player.id === action.payload.id) {
          player.history[action.payload.activeMode].push({
            number: action.payload.number,
            result: action.payload.result
          });
        }
      });
      return {
        ...state,
        players: players
      };

    case CLEAR_HISTORY:
      playerList.forEach(player => {
        if (player.id === action.payload.id) {
          player.history[action.payload.mode] = [];
        }
      });
      return {
        ...state,
        players: playerList
      };

    default:
      return state;
  }
};

export default manageGameSession;
