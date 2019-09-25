import Player from "../../components/Player/Player.js";
import { connect } from "react-redux";
import { addNewPlayer, onAddToggle, onEditToggle, setActivePlayer, onDeleteToggle } from "../../actions/actions.js";
import { getPlayersList, getOnAdd, getOnEdit, getOnDelete } from "../../selectors/selectors.js";

const mapStateToProps = state => {
  return {
    players: getPlayersList(state),
    onAdd: getOnAdd(state),
    onEdit: getOnEdit(state),
    onDelete: getOnDelete(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddHandler: () => {
      dispatch(onAddToggle());
    },
    cancelOnAddAction: () => {
      dispatch(onAddToggle());
    },
    onEditHandler: id => {
      dispatch(onEditToggle(id));
    },
    setActivePlayerHandler: player => {
      dispatch(setActivePlayer(player));
    },
    onDeleteHandler: () => {
      dispatch(onDeleteToggle());
    },
    addNewPlayer: newPlayer => {
      dispatch(addNewPlayer(newPlayer));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
