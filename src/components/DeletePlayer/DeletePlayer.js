import React from "react";
import PropTypes from "prop-types";
import { ButtonToolbar, Button, Row, Col } from "react-bootstrap";

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

export default DeletePlayer;

DeletePlayer.propTypes = {
  players: PropTypes.array,
  activePlayer: PropTypes.object,
  onDeleteAction: PropTypes.func,
  cancelOnDeleteAction: PropTypes.func
};
