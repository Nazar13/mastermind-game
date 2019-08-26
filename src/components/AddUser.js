import React, { Component } from 'react';

class AddUser extends Component {
    state = {
        name: '',
    }

    handelInput = (e) => {
        this.setState({name: e.target.value});
    }

    render() {
        let {addUser, cancel} = this.props;
        return (
            <div>
                <h3 align="center">Enter User Name</h3>
                <div class="input-group mb-3">
                    <input type="text" onChange={this.handelInput} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <button onClick={() => {cancel({create:false})}} className="btn btn-outline-secondary">Cancel</button>
                <button onClick={() =>{addUser(this.state.name)}} className="btn btn-outline-success">Save</button>
            </div>
        )
    }
}

export default AddUser;