import {
  ADD_PLAYER,
  ONADD_TOGGLE,
  ONEDIT_TOGGLE,
  SET_ACTIVE_PLAYER,
  EDIT_SAVE,
  ONDELETE_TOGGLE,
  DELETE_SAVE,
  AUTH,
  UPDATE_HISTORY,
  CLEAR_HISTORY,
  LOGIN_USER_SUCCESS
} from "../actions/actionsList.js";
import { defaultPlayers } from "../../src/defaultPlayersList.js";

const intialState = {
  players: defaultPlayers,
  onAdd: false,
  onEdit: false,
  onDelete: false,
  activePlayer: {},
  isAuthenticated: false
};

const managePlayers = (state = intialState, action) => {
  let toggle;
  const newState = { ...state };
  const playerList = [...state.players];
  const players = [...state.players];
  switch (action.type) {
    case ADD_PLAYER:
      newState.players.push(action.payload);
      return newState;

    case ONADD_TOGGLE:
      toggle = state.onAdd;
      return {
        ...state,
        onAdd: !toggle
      };

    case ONEDIT_TOGGLE:
      toggle = state.onEdit;
      return {
        ...state,
        onEdit: !toggle
      };

    case SET_ACTIVE_PLAYER:
      return {
        ...state,
        activePlayer: action.payload
      };

    case EDIT_SAVE:
      return {
        ...state,
        players: action.payload
      };

    case ONDELETE_TOGGLE:
      toggle = state.onDelete;
      return {
        ...state,
        onDelete: !toggle
      };

    case DELETE_SAVE:
      return {
        ...state,
        players: action.payload
      };

    case AUTH:
      return {
        ...state,
        isAuthenticated: action.payload
      };

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

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        players: action.response,
        isAuthenticated: true,
      };

    default:
      return state;
  }
};

export default managePlayers;
