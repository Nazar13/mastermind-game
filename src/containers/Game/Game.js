import React, { Component } from 'react';
import GuessForm from '../../components/GuessForm/GuessForm.js';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class Game extends Component {
    state = {
        playerName: "Select user",
        currentPlayer: {},
    };

    generatePlayersList() {
        const { players } = this.props;
        return players.map((user) => <option key={user.id} value={user.name}>{user.name}</option>)
    }

    changePlayer = (event) => {
        this.setState({"playerName": event.target.value});
        this.setCurrentPlayer(event.target.value);
    }

    setCurrentPlayer(playerName) {
        const arr = [...this.props.players];
        const selectedPlayer = arr.filter(user => user.name === playerName);
        this.setState({currentPlayer: selectedPlayer});
        this.setState({currentPlayerId: selectedPlayer.id});
    }

    renderGameBoard() {
        return this.state.playerName !== 'Select user' && <GuessForm currentPlayer={this.state.currentPlayer}/>;
    }

    render() {
        return (
            <div className="row mh100">
                <div className="col-md-2">
                    <h3>Select Player</h3>
                    <select className="form-control mt20" onChange={this.changePlayer}>
                        <option value='Select user'>Select player</option>
                        {this.generatePlayersList()}
                    </select>
                </div>
                <div className="col-md-8 offset-md-1">
                    {this.renderGameBoard()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    players: state.players,
  };
};

export default connect(mapStateToProps)(Game);

Game.propTypes = {
    players: PropTypes.array,
  };