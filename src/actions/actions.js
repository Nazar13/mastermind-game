 export const addNewPlayer = newPlayer => {
    return {
      type: "ADD_PLAYER",
      payload: newPlayer
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

  export const onAddToggle = () => {
    return {
      type: "ONADD_TOGGLE",
    }
  }

  export const onEditToggle = () => {
    return {
      type: "ONEDIT_TOGGLE",
    }
  }

  export const setActivePlayer = (player) => {
    return {
      type: "SET_ACTIVE_PLAYER",
      payload: player
    }
  }


  export const onEditSave = (players) => {
    return {
      type: "EDIT_SAVE",
      payload: players
    }
  }

  export const onDeleteToggle = () => {
    return {
      type: "ONDELETE_TOGGLE",
    }
  }

  export const onDeleleSave = (players) => {
    return {
      type: "DELETE_SAVE",
      payload: players
    }
  }

  export const setCurrentPlayerAction = (currentPlayer) => {
    return {
      type: "SET_CURRENT_PLAYER",
      payload: currentPlayer
    }
  }

  export const auth = (status) => {
    return {
      type: "AUTH",
      payload: status
    }
  }


  