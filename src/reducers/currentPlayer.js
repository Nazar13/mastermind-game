import { SET_CURRENT_PLAYER } from "../actions/actionsList.js";

const intialState = {
  currentPlayer: {
    id: 1,
    name: "Jack",
    history: {
      Easy: [],
      Medium: [],
      Hard: []
    }
  }
};

const currentPlayer = (state = intialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PLAYER:
      return {
        currentPlayer: action.payload
      };
    default:
      return state;
  }
};

export default currentPlayer;