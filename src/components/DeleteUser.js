import React, { Component } from 'react';

class DeleteUser extends Component {
    
    render() {
        let {deleteUser, cancel} = this.props;
        return (
            <div className="row">
                <div className="col-md-12">
                    <h3 align="center">Do you want to delete <span className="font-weight-bold">{this.props.player[0].name} ?</span></h3>    
                </div>  
                <div className="offset-md-7 col-md-5">   
                    <button onClick={() => {cancel({delete:false})}} className="btn btn-outline-secondary">No</button>
                    <button onClick={() => {deleteUser()}} className="btn btn-outline-success">Yes</button>
                    </div>
            </div>
        )
    }
}

export default DeleteUser;