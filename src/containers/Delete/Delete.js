import DeletePlayer from "../../components/DeletePlayer/DeletePlayer.js";
import { onDeleleSave, onDeleteToggle } from "../../actions/actions.js";
import { connect } from "react-redux";
import { getPlayersList, getActivePlayer } from "../../selectors/selectors.js";
import PropTypes from "prop-types";

const mapStateToProps = state => {
  return {
    players: getPlayersList(state),
    activePlayer: getActivePlayer(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteAction: players => {
      dispatch(onDeleleSave(players));
    },
    cancelOnDeleteAction: () => {
      dispatch(onDeleteToggle());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeletePlayer);

DeletePlayer.propTypes = {
  players: PropTypes.array,
  activePlayer: PropTypes.object,
  onDeleteAction: PropTypes.func,
  cancelOnDeleteAction: PropTypes.func
};
