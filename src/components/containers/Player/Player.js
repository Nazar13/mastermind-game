import React, { Component } from 'react';
import { defaultPlayers } from '../../../defaultPlayersList.js';
import AddPlayer from '../../AddPlayer.js';
import EditPlayer from '../../EditPlayer.js';
import DeletePlayer from '../../DeletePlayer.js';

class Player extends Component {
    state = {
        players: defaultPlayers,
        create: false,
        edit: false,
        delete: false,
        editedPlayer: null,
        newPlayer: '',
    }

    addNewPlayer = (name) => {
        const len = defaultPlayers[defaultPlayers.length-1].id + 1;
        defaultPlayers.push({   
            "id": len,
            "name": name,
            "history": {
                "Easy": [],
                "Medium": [],
                "Hard": []
            }
        });
        this.setState({players: defaultPlayers});
        this.setState({create: false});
    }

    onAdd = () => {
        this.setState({create: true});
    }

    onEdit = (id) => {
        const currentUser = this.state.players.filter((player) => player.id === id);
        this.setState({editedPlayer: currentUser});
        this.setState({edit: true});
    }

    onDelete = (id) => {
        let currentUser = this.state.players.filter((player) => player.id === id);
        this.setState({editedPlayer: currentUser});
        this.setState({delete: true});
    }

    cancelPlayerModifyAction = (obj) => {   
        this.setState(obj);
    }

    savePlayer = (name) => {
        const players = [...this.state.players];
        players.forEach(player => {
            if(player.id === this.state.editedPlayer[0].id) {
                player.name = name;
            }
        });
        this.setState({players: players});
        this.setState({edit: false});
    }

    deletePlayer = () => {
        for( let i = 0; i < defaultPlayers.length; i++){ 
            if ( defaultPlayers[i].id === this.state.editedPlayer[0].id) {
                defaultPlayers.splice(i, 1); 
            }
         }
        this.setState({players: defaultPlayers});
        this.setState({delete: false});
    }

    render() {
        const { editedPlayer } = this.state;
        return (
            <div className="row">
                <div className="col-md-6">
                    <h3 className="mb20" align="center">Players</h3>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {defaultPlayers.map((player,index) => <tr key={player.id*player.id}>
                                <td>{index + 1}</td>
                                <td key={player.id} value={player.name}>{player.name}</td>
                                <td><button onClick={()=>this.onEdit(player.id)} className="btn btn-outline-primary">Edit Player</button></td>
                                <td><button onClick={()=>this.onDelete(player.id)} className="btn btn-outline-danger">Delete Player</button></td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    <button onClick={this.onAdd} className="btn btn-outline-success">Add Player</button>
                    {this.state.create && <AddPlayer addNewPlayer={this.addNewPlayer} 
                                                    cancelPlayerModifyAction={this.cancelPlayerModifyAction}/>}
                </div>
                <div className="col-md-6">
                    {this.state.edit && <EditPlayer player={editedPlayer} savePlayer={this.savePlayer} 
                                                   cancelPlayerModifyAction={this.cancelPlayerModifyAction}/>}
                    {this.state.delete && <DeletePlayer player={editedPlayer} deletePlayer={this.deletePlayer} 
                                                       cancelPlayerModifyAction={this.cancelPlayerModifyAction}/>}
                </div>                
            </div>
        )
    }
}

export default Player;