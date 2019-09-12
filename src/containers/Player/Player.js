import React, { Component } from 'react';
import AddPlayer from '../../components/AddPlayer/AddPlayer.js';
import EditPlayer from '../../components/EditPlayer/EditPlayer.js';
import DeletePlayer from '../../components/DeletePlayer/DeletePlayer.js';
import { connect } from 'react-redux';
import { addNewPlayer, savePlayer, deletePlayer } from '../../actions/actions.js';

class Player extends Component {
    state = {
        create: false,
        edit: false,
        delete: false,
        editedPlayer: null,
        newPlayer: '',
    }

    addNewPlayer = (name) => {
        const { players } = this.props;
        const len = players[players.length-1].id + 1;
        const newPlayer = {
            "id": len,
            "name": name,
            "history": {
                "Easy": [],
                "Medium": [],
                "Hard": []
               }   
            }
        this.props.addPlayer(newPlayer);
        this.setState({create: false});
    }

    onAdd = () => {
        this.setState({create: true});
    }

    onEdit = (id) => {
        const currentPlayer = this.props.players.filter((player) => player.id === id);
        this.setState({editedPlayer: currentPlayer});
        this.setState({edit: true});
    }

    onDelete = (id) => {
        let currentPlayer = this.props.players.filter((player) => player.id === id);
        this.setState({editedPlayer: currentPlayer});
        this.setState({delete: true});
    }

    cancelPlayerModifyAction = (obj) => {   
        this.setState(obj);
    }

    savePlayer = (name) => {
        const players = [...this.props.players];
        players.forEach(player => {
            if(player.id === this.state.editedPlayer[0].id) {
                player.name = name;
            }
        });
        this.props.editPlayer(players);
        this.setState({edit: false});
    }

    deletePlayer = () => {
        const { players } = this.props;
         for( let i = 0; i < players.length; i++){ 
            if ( players[i].id === this.state.editedPlayer[0].id) {
                players.splice(i, 1); 
            }
         }
        this.props.deletePlayer(players);
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
                            {this.props.players.map((player,index) => <tr key={player.id*player.id}>
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

const mapDispatchToProps = dispatch => {
    return {
        addPlayer: newPlayer => {
            dispatch(addNewPlayer(newPlayer))
        },
        editPlayer: players => {
            dispatch(savePlayer(players))
        },
        deletePlayer: id => {
            dispatch(deletePlayer(id))
        }
    }
}

export default connect(null, mapDispatchToProps)(Player);