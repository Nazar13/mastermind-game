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

    addPlayer = (name) => {
        let len = defaultPlayers[defaultPlayers.length-1].id+1;
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
        this.setState({create:false});
    }

    onAdd = () => {
        this.setState({create:true});
    }

    onEdit = (id) => {
        let currentUser = this.state.players.filter((player)=>player.id==id);
        this.setState({editedPlayer:currentUser});
        this.setState({edit:true});
    }

    onDelete = (id) => {
        let currentUser = this.state.players.filter((player)=>player.id == id);
        this.setState({editedPlayer:currentUser});
        this.setState({delete:true});
    }

    cancel = (obj) => {
        this.setState(obj);
    }

    save = (name) => {
        let players = [...this.state.players];
        players.forEach(player => {
            if(player.id == this.state.editedPlayer[0].id) {
                player.name = name;
            }
        });
        this.setState({players:players});
        this.setState({edit:false});
    }

    deletePlayer = () => {
        for( var i = 0; i < defaultPlayers.length; i++){ 
            if ( defaultPlayers[i].id === this.state.editedPlayer[0].id) {
                defaultPlayers.splice(i, 1); 
            }
         }
        this.setState({players:defaultPlayers});
        this.setState({delete:false});
    }

    render() {
        return (
            <div style={{marginTop: 10}} className="row">
                <div className="col-md-6">
                    <h3 align="center">Users</h3>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {defaultPlayers.map((player,index) => <tr>
                                <td>{index+1}</td>
                                <td key={player.id} value={player.name}>{player.name}</td>
                                <td><button onClick={()=>this.onEdit(player.id)} className="btn btn-outline-primary">Edit Player</button></td>
                                <td><button onClick={()=>this.onDelete(player.id)} className="btn btn-outline-danger">Delete Player</button></td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    <button onClick={this.onAdd} className="btn btn-outline-success">Add Player</button>
                    {this.state.create ? <AddPlayer addPlayer={this.addPlayer} cancel={this.cancel}/>: null }
                </div>
                <div lassName="col-md-6">
                    {this.state.edit ? <EditPlayer player={this.state.editedPlayer} save={this.save} cancel={this.cancel}/>: null }
                    {this.state.delete ? <DeletePlayer player={this.state.editedPlayer} deletePlayer={this.deletePlayer} cancel={this.cancel}/>: null }
                </div>                
            </div>
        )
    }
}

export default Player;