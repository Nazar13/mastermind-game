import React from "react";
import GuessForm from "../../components/GuessForm/GuessForm.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useState } from "react";
import { setCurrentPlayerAction } from "../../actions/actions.js";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const Game = props => {
  console.log(props);
  const [playerName, setPlayerName] = useState("Select player");

  function generatePlayersList() {
    return props.players.map(player => (
      <option key={player._id} value={player.username}>
        {player.username}
      </option>
    ));
  }

  const changePlayer = event => {
    setPlayerName(event.target.value);
    if (event.target.value !== "Select player") {
      const currentPlayer = props.players.filter(
        player => player.name === event.target.value
      );
      props.setCurrentPlayer(currentPlayer[0]);
    }
  };

  return (
    <Row>
      <Col md="2">
        <h3>Select Player</h3>
        <Form.Group controlId="formGridState">
          <Form.Control as="select" onChange={changePlayer}>
            <option>Select player</option>
            {generatePlayersList()}
          </Form.Control>
        </Form.Group>
      </Col>
      <Col md={{ size: 8, offset: 1 }}>
        {/*  Turned off the game board for now */}
        {/* {playerName !== "Select player" && <GuessForm />} */}
      </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    players: state.managePlayers.players,
    currentPlayer: state.currentPlayer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentPlayer: currentPlayer => {
      dispatch(setCurrentPlayerAction(currentPlayer));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

Game.propTypes = {
  players: PropTypes.array,
  currentPlayer: PropTypes.object,
  setCurrentPlayer: PropTypes.func
};
