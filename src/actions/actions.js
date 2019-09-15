 export const addNewPlayer = newPlayer => {
    return {
      type: "ADD_PLAYER",
      payload: newPlayer
    }
  }

  export const savePlayer = players => {
    return {
      type: "SAVE_PLAYER",
      payload: players
    }
  }

  export const deletePlayer = players => {
    return {
      type: "DELETE_PLAYER",
      payload: players
    }
  }

  export const updateHistory = history => {
    return {
      type: "UPDATE_HISTORY",
      payload: history
    }
  }

  export const clearHistory = (payload)=> {
    return {
      type: "CLEAR_HISTORY",
      payload: payload
    }
  }