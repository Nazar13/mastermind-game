import React, { Component } from 'react';
import { defaultUsers } from '../defaultUsersList.js';
import AddUser from './AddUser.js';
import EditUser from './EditUser.js';
import DeleteUser from './DeleteUser.js';


class CreateUser extends Component {
    state = {
        users: defaultUsers,
        create: false,
        edit: false,
        delete: false,
        editedPlayer: null,
        newPlayer: '',
    }

    addUser = (name) => {
        let len = defaultUsers[defaultUsers.length-1].id+1;
        defaultUsers.push({   
            "id": len,
            "name": name,
            "history": {
                "Easy": [],
                "Medium": [],
                "Hard": []
            }
        });
        this.setState({users: defaultUsers});
        this.setState({create:false});
    }

    onAdd = () => {
        this.setState({create:true});
    }

    onEdit = (id) => {
        let currentUser = this.state.users.filter((user)=>user.id==id);
        this.setState({editedPlayer:currentUser});
        this.setState({edit:true});
    }

    onDelete = (id) => {
        let currentUser = this.state.users.filter((user)=>user.id == id);
        this.setState({editedPlayer:currentUser});
        this.setState({delete:true});
    }

    cancel = (obj) => {
        this.setState(obj);
    }

    save = (name) => {
        let users = [...this.state.users];
        users.forEach(user => {
            if(user.id == this.state.editedPlayer[0].id) {
                user.name = name;
            }
        });
        this.setState({users:users});
        this.setState({edit:false});
    }

    deleteUser = () => {
        for( var i = 0; i < defaultUsers.length; i++){ 
            if ( defaultUsers[i].id === this.state.editedPlayer[0].id) {
                defaultUsers.splice(i, 1); 
            }
         }
        this.setState({users:defaultUsers});
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
                            {defaultUsers.map((user,index) => <tr>
                                <td>{index+1}</td>
                                <td key={user.id} value={user.name}>{user.name}</td>
                                <td><button onClick={()=>this.onEdit(user.id)} className="btn btn-outline-primary">Edit User</button></td>
                                <td><button onClick={()=>this.onDelete(user.id)} className="btn btn-outline-danger">Delete User</button></td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    <button onClick={this.onAdd} className="btn btn-outline-success">Add User</button>
                    {this.state.create ? <AddUser addUser={this.addUser} cancel={this.cancel}/>: null }
                </div>
                <div lassName="col-md-6">
                    {this.state.edit ? <EditUser player={this.state.editedPlayer} save={this.save} cancel={this.cancel}/>: null }
                    {this.state.delete ? <DeleteUser player={this.state.editedPlayer} deleteUser={this.deleteUser} cancel={this.cancel}/>: null }
                </div>                
            </div>
        )
    }
}

export default CreateUser;