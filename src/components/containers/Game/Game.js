import React, { Component } from 'react';
import GuessForm from '../../GuessForm.js';
import { defaultPlayers } from '../../../defaultPlayersList.js'

class Game extends Component {
    state = {
        "players": defaultPlayers,
        "playerName": "Select user",
        "currentPlayer": {}
    };

    playersList() {
        const { players } = this.state;
        return players.map((user) => <option key={user.id} value={user.name}>{user.name}</option>)
    }

    changePlayer = (event) => {
        this.setState({"playerName":event.target.value});
        this.setCurrentPlayer(event.target.value);
    }

    setCurrentPlayer(playerName){
        let arr = [...this.state.players];
        let selectedPlayer = arr.filter(user => user.name == playerName);
        this.setState({currentPlayer: selectedPlayer})
    }

    renderCurrentPlayer(){
        return this.state.playerName !== 'Select user' ?  <GuessForm player={this.state.currentPlayer}/> : null;
    }

    render() {
        console.log(this.state.currentPlayer);
        return (
                <div className="row mh100">
                    <div className="col-md-2">
                        <h3>Select Player</h3>
                        <select className="form-control mt20" onChange={this.changePlayer}>
                            <option value='Select user'>Select player</option>
                            { this.playersList() }
                        </select>
                    </div>
                    <div className="col-md-8 offset-md-1">
                        {this.renderCurrentPlayer()}
                    </div>
                </div>
        )
    }
}

export default Game;