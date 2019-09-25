import {
  ADD_PLAYER,
  ONADD_TOGGLE,
  ONEDIT_TOGGLE,
  SET_ACTIVE_PLAYER,
  EDIT_SAVE,
  ONDELETE_TOGGLE,
  DELETE_SAVE
} from "../actions/actionsList.js";
import { defaultPlayers } from "../../src/defaultPlayersList.js";

const intialState = {
  players: defaultPlayers,
  onAdd: false,
  onEdit: false,
  onDelete: false,
  activePlayer: {}
};

const managePlayers = (state = intialState, action) => {
  const newState = { ...state };
  let toggle;
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

    default:
      return state;
  }
};

export default managePlayers;
