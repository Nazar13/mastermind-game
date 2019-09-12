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

  export const updateHistory = player => {
    return {
      type: "UPDATE_HISTORY",
      payload: player
    }
  }

  export const clearHistory = player => {
    return {
      type: "CLEAN_HISTORY",
      payload: player
    }
  }