import React from "react";
import GuessForm from "../../components/GuessForm/GuessForm.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useState } from "react";
import { setCurrentPlayerAction } from "../../actions/actions.js";
import { Form } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";
import { requestPlayers } from "../../saga/sagas.js";

const Game = props => {
  const [playerName, setPlayerName] = useState("Select player");

  function generatePlayersList() {
    return props.players.map(player => (
      <option key={player.id} value={player.name}>
        {player.name}
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

  // const fetchPlayer = () => {
  //   return { type: "REQUEST_PLAYERS_SUCCESS" };
  // };
  const showMongoUsers = () => {
    let lis = "2222";
    if (props.mongoUsers !== undefined) {
      lis = props.mongoUsers.map(item => {
        return <p>{item.username}</p>;
      });
    }
    console.log(lis);
    return lis;
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
        <Button onClick={props.disFetchPlayers} variant="outline-primary">
          Fetch Players
        </Button>
        <p>{showMongoUsers()}</p>
      </Col>
      <Col md={{ size: 8, offset: 1 }}>
        {playerName !== "Select player" && <GuessForm />}
      </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    players: state.managePlayers.players,
    currentPlayer: state.currentPlayer,
    mongoUsers: state.managePlayers.tempState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentPlayer: currentPlayer => {
      dispatch(setCurrentPlayerAction(currentPlayer));
    },
    disFetchPlayers: () => {
      dispatch({ type: "FETCH_PLAYERS" });
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
  setCurrentPlayer: PropTypes.func,
  disFetchPlayers: PropTypes.func,
  mongoUsers: PropTypes.array,
  username: PropTypes.array
};
