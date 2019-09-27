import React from "react";
import GuessForm from "../../components/GuessForm/GuessForm.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useState } from "react";
import { setCurrentPlayerAction } from "../../actions/actions.js";
import { Form } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";


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
        {playerName !== "Select player" && <GuessForm />}
      </Col>
    </Row>
  );
}

const mapStateToProps = state => {
  return {
    players: state.manageGameSession.players,
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



//   class Game extends Component {
//     state = {
//         playerName: "Select user",
//         currentPlayer: {},
//     };

//     generatePlayersList() {
//         const { players } = this.props;
//         return players.map((user) => <option key={user.id} value={user.name}>{user.name}</option>)
//     }

//     changePlayer = (event) => {
//         this.setState({"playerName": event.target.value});
//         this.setCurrentPlayer(event.target.value);
//     }

//     setCurrentPlayer(playerName) {
//         const arr = [...this.props.players];
//         const selectedPlayer = arr.filter(user => user.name === playerName);
//         this.setState({currentPlayer: selectedPlayer});
//         this.setState({currentPlayerId: selectedPlayer.id});
//     }

//     renderGameBoard() {
//         return this.state.playerName !== 'Select user' && <GuessForm currentPlayer={this.state.currentPlayer}/>;
//     }

//     render() {
//         return (
//             <div className="row mh100">
//                 <div className="col-md-2">
//                     <h3>Select Player</h3>
//                     <select className="form-control mt20" onChange={this.changePlayer}>
//                         <option value='Select user'>Select player</option>
//                         {this.generatePlayersList()}
//                     </select>
//                 </div>
//                 <div className="col-md-8 offset-md-1">
//                     { props.currentPlayer.name !== 'Select user' && <GuessForm /> }
//                     {this.renderGameBoard()}
//                 </div>
//             </div>
//         )
//     }
// }