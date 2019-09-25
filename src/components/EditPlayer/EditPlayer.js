import React from "react";
import PropTypes from "prop-types";
import { getPlayersList, getActivePlayer } from "../../selectors/selectors.js";
import { InputGroup, FormControl, ButtonToolbar, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { onEditSave, onEditToggle } from "../../actions/actions.js";
import { connect } from "react-redux";

function EditPlayer(props) {
  const [name, setName] = useState(props.activePlayer.name);

  function inputHandler(e) {
    setName(e.target.value);
  }

  function saveOnEdit() {
    const id = props.activePlayer.id;
    const { players } = props;
    const playerName = { name };
    players.forEach(player => {
      if (player.id === id) {
        player.name = playerName.name;
      }
    });
    props.saveOnEditAction(players);
    props.cancelOnEditAction();
  }
  return (
    <Row>
      <Col>
        <h3 align="center">Enter Player Name</h3>
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Username"
            value={name}
            onChange={inputHandler}
          />
        </InputGroup>
        <ButtonToolbar>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={props.cancelOnEditAction}
          >
            Cancel
          </Button>
          <Button variant="outline-success" size="sm" onClick={saveOnEdit}>
            Save
          </Button>
        </ButtonToolbar>
      </Col>
    </Row>
  );
}

const mapStateToProps = state => {
  return {
    players: getPlayersList(state),
    activePlayer: getActivePlayer(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveOnEditAction: players => {
      dispatch(onEditSave(players));
    },
    cancelOnEditAction: () => {
      dispatch(onEditToggle());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPlayer);

EditPlayer.propTypes = {
  players: PropTypes.array,
  activePlayer: PropTypes.object,
  saveOnEditAction: PropTypes.func,
  cancelOnEditAction: PropTypes.func
};
