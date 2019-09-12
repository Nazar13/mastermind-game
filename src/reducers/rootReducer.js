
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
    const newState = { ... state};
    switch (action.type) {
      case 'ADD_PLAYER':
        newState.players.push(action.payload);
        return newState;

      case 'SAVE_PLAYER':
          return {
            ...state,
            players: action.payload
          };
        
          case 'DELEET_PLAYER':
              return {
                ...state,
                players: action.payload
              };

          case 'UPDATE_HISTORY':
            const pl = newState.players;
            const attempt = {
              number: action.payload.number,
              result: action.payload.result,
            };
            pl.forEach(player => {
              if(player.id === action.payload.id) {
                  player.history[action.payload.activeMod].push(attempt);
              }
          });
           
              return {
                ...state,
              };    
      default:
        return state
    }
  }
  
  export default rootReducer