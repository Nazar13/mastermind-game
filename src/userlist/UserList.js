import React, { Component } from 'react';
import GuessForm from '../guessForm/GuessForm.js';
import { defaultUsers } from '../defaultUsersList.js'


class UserList extends Component {
    state = {
        "users": defaultUsers,
        "playerName": "Select user",
        "currentPlayer": {}
    };

    usersList() {
        const { users } = this.state;
        return users.map((user) => <option key={user.id} value={user.name}>{user.name}</option>)
    }

    changeUser = (event) => {
        this.setState({"playerName":event.target.value});
        this.setCurrentPlayer(event.target.value);
    }

    setCurrentPlayer(playerName){
        let arr = [...this.state.users];
        let selectedPlayer = arr.filter(user => user.name == playerName);
        this.setState({currentPlayer: selectedPlayer})
    }

    renderCurrentUser(){
        return this.state.playerName !== 'Select user' ?  <GuessForm player={this.state.currentPlayer}/> : null;
    }

    render() {
        console.log(this.state.currentPlayer);
        return (
            <>
                <div className="row mh100">
                    <div className="col-md-2">
                        <h3>Select User</h3>
                        <select className="form-control mt20" onChange={this.changeUser}>
                            <option value='Select user'>Select user</option>
                            { this.usersList() }
                        </select>
                    </div>
                    <div className="col-md-8 offset-md-1">
                        {this.renderCurrentUser()}
                    </div>
                </div>
            </>
        )
    }
}

export default UserList;