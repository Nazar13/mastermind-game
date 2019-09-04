import React, { Component } from 'react';

class EditPlayer extends Component {
    state = {
        name: this.props.player[0].name,
    }
    
    inputHandler = (e) => {
        this.setState({name: e.target.value});
    }

    cancelPlayerModifyActionHandler = () => {
        this.props.cancelPlayerModifyAction({edit: false});
    } 

    savePlayerHandler = () => {
        this.props.savePlayer(this.state.name);
    }

    render() {
        return (
            <div>
                <h3 align="center">Enter Player Name</h3>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" aria-describedby="basic-addon1"  
                        value={this.state.name} onChange={this.inputHandler}/>
                </div>
                <button onClick={this.cancelPlayerModifyActionHandler} className="btn btn-outline-secondary">Cancel</button>
                <button onClick={this.savePlayerHandler} className="btn btn-outline-success">Save</button>
            </div>
        )
    }
}

export default EditPlayer;