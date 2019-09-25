import React from "react";
import PropTypes from "prop-types";
import { ButtonToolbar, Button, Row, Col } from "react-bootstrap";
import { onDeleleSave, onDeleteToggle } from "../../actions/actions.js";
import { connect } from "react-redux";
import { getPlayersList, getActivePlayer } from "../../selectors/selectors.js";

const DeletePlayer = props => {
  function deletePlayerHandler() {
    const id = props.activePlayer.id;
    const playersList = props.players.filter(player => {
      return player.id !== id;
    });
    props.onDeleteAction(playersList);
    props.cancelOnDeleteAction();
  }

  return (
    <Row>
      <Col md={12}>
        <h3 align="center">
          Do you want to delete{" "}
          <span className="font-weight-bold"> {props.activePlayer.name}?</span>
        </h3>
      </Col>
      <Col md={{ size: 5, offset: 7 }}>
        <ButtonToolbar>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={props.cancelOnDeleteAction}
          >
            Cancel
          </Button>
          <Button
            variant="outline-success"
            size="sm"
            onClick={deletePlayerHandler}
          >
            Yes
          </Button>
        </ButtonToolbar>
      </Col>
    </Row>
  );
};

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
