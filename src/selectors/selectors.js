export const getPlayersList = state => {
  return state.managePlayers.players;
};

export const getOnAdd = state => {
  return state.managePlayers.onAdd;
};

export const getOnEdit = state => {
  return state.managePlayers.onEdit;
};

export const getActivePlayer = state => {
  return state.managePlayers.activePlayer;
};

export const getOnDelete = state => {
  return state.managePlayers.onDelete;
};

export const getAuthStatus = state => {
  return state.managePlayers.isAuthenticated;
};
