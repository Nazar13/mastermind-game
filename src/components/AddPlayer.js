import React, { Component } from 'react';

class AddPlayer extends Component {
    state = {
        name: '',
    }

    inputHandler = (e) => {
        this.setState({name: e.target.value});
    }

    addPlayerHandler = () => {
        const { name } = this.state;
        const { addNewPlayer } = this.props;
        addNewPlayer(name);
    }

    cancelPlayerModifyActionHandler = () => {
        this.props.cancelPlayerModifyAction({create: false});
    } 

    render() {
        return (
            <div>
                <h3 align="center">Enter Player Name</h3>
                <div class="input-group mb-3">
                    <input type="text" onChange={this.inputHandler} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <button onClick={this.cancelPlayerModifyAction} className="btn btn-outline-secondary">Cancel</button>
                <button onClick={this.addPlayerHandler} className="btn btn-outline-success">Save</button>
            </div>
        )
    }
}

export default AddPlayer;