import React from 'react';

const DeletePlayer = (props) => {
    
    function cancelPlayerModifyActionHandler() {
        props.cancelPlayerModifyAction({delete: false});
    }

    function deletePlayerHandler() {
        props.deletePlayer();
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <h3 align="center">Do you want to delete <span className="font-weight-bold">{props.player[0].name} ?</span></h3>    
            </div>  
            <div className="offset-md-7 col-md-5">   
                <button onClick={cancelPlayerModifyActionHandler} className="btn btn-outline-secondary">No</button>
                <button onClick={deletePlayerHandler} className="btn btn-outline-success">Yes</button>
            </div>
        </div>
    );
}

export default DeletePlayer;