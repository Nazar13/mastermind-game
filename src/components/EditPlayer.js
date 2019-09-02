import React, { Component } from 'react';

class EditPlayer extends Component {
    state = {
        name: this.props.player[0].name,
    }
    
    handleInput = (e) => {
        this.setState({name:e.target.value});
    }

    render() {
        let {save, cancel} = this.props;
        return (
            <div>
                <h3 align="center">Enter Player Name</h3>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"  
                    value={this.state.name} onChange={this.handleInput}/>
                </div>
                <button onClick={() => {cancel({edit:false})}} className="btn btn-outline-secondary">Cancel</button>
                <button onClick={() => {save(this.state.name)}} className="btn btn-outline-success">Save</button>
            </div>
        )
    }
}

export default EditPlayer;