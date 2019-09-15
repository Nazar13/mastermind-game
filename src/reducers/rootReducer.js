import { ADD_PLAYER, SAVE_PLAYER, DELETE_PLAYER, UPDATE_HISTORY, CLEAR_HISTORY } from '../actions/actionsList.js';
const intialState =  {
        players: [
          {
              "id": 1,
              "name": "Jack",
              "history": {
                  "Easy": [],
                  "Medium": [],
                  "Hard": []
             }
          },
          {   
              "id": 2,
              "name": "Tom",
              "history": {
                  "Easy": [],
                  "Medium": [],
                  "Hard": []
              }
          },
      ]
};

const rootReducer = (state = intialState, action) => {
    const newState = {...state};
    const playerList = [...state.players];
    const players = [...state.players];
    switch (action.type) {
      case ADD_PLAYER:
        newState.players.push(action.payload);
        return newState;

      case SAVE_PLAYER:
        return {
          ...state,
          players: action.payload
        };
        
      case DELETE_PLAYER:
        return {
          ...state,
          players: action.payload
        };

      case UPDATE_HISTORY:
        players.forEach(player => {
          if(player.id === action.payload.id) {
              player.history[action.payload.activeMode].push({
                number: action.payload.number,
                result: action.payload.result
              });
          }
        });  
        return {
          ...state,
          players: players,
        };

        case CLEAR_HISTORY:
          playerList.forEach(player => {
            if(player.id === action.payload.id) {
                player.history[action.payload.mode] = [];
            }
          });
          return {
            ...state,
            players: playerList
          };

      default:
        return state
    }
  }
  
  export default rootReducer