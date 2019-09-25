import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { addNewPlayer, onAddToggle } from "../../actions/actions.js";
import { getPlayersList } from "../../selectors/selectors.js";
import { connect } from "react-redux";
import { InputGroup, FormControl, ButtonToolbar, Button, Row, Col } from "react-bootstrap";

function AddPlayer(props) {
  const [name, setName] = useState("");

  function inputHandler(e) {
    setName(e.target.value);
  }

  function saveOnAddAction() {
    const playerName = { name };
    const len = props.players[props.players.length - 1].id + 1;
    const newPlayer = {
      id: len,
      name: playerName.name,
      history: {
        Easy: [],
        Medium: [],
        Hard: []
      }
    };
    props.addNewPlayerAction(newPlayer);
    props.cancelOnAddAction();
  }

  return (
    <Row>
      <Col md={8}>
        <br/>
        <h3 align="center">Enter Player Name</h3>
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder="Username"
            onChange={inputHandler}
          />
        </InputGroup>
        <ButtonToolbar>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={props.cancelOnAddAction}
          >
            Cancel
          </Button>
          <Button variant="outline-success" 
            size="sm" 
            onClick={saveOnAddAction}
          >
            Save
          </Button>
        </ButtonToolbar>
      </Col>
    </Row>
  );
}

const mapStateToProps = state => {
  return {
    players: getPlayersList(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    cancelOnAddAction: () => {
      dispatch(onAddToggle());
    },
    addNewPlayerAction: newPlayer => {
      dispatch(addNewPlayer(newPlayer));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPlayer);

AddPlayer.propTypes = {
  players: PropTypes.array,
  addNewPlayerAction: PropTypes.func,
  cancelOnAddAction: PropTypes.func
};
