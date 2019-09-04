import React, { Component } from 'react';
import GuessForm from '../../GuessForm.js';
import { defaultPlayers } from '../../../defaultPlayersList.js'

class Game extends Component {
    state = {
        players: defaultPlayers,
        playerName: "Select user",
        currentPlayer: {}
    };

    generatePlayersList() {
        const { players } = this.state;
        return players.map((user) => <option key={user.id} value={user.name}>{user.name}</option>)
    }

    changePlayer = (event) => {
        this.setState({"playerName": event.target.value});
        this.setCurrentPlayer(event.target.value);
    }

    setCurrentPlayer(playerName) {
        const arr = [...this.state.players];
        const selectedPlayer = arr.filter(user => user.name === playerName);
        this.setState({currentPlayer: selectedPlayer})
    }

    renderGameBoard() {
        return this.state.playerName !== 'Select user' ?  <GuessForm player={this.state.currentPlayer}/> : null;
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

export default Game;