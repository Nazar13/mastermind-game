import React from "react";
import PropTypes from "prop-types";

const PlayerHistory = (props) => {
    
    function renderHistoryTableData(){
        const data = props.history;
        return data.length ? (
            data.map((item) => {
            return ( 
                <tr key={item.number}>
                    <td>{item.number}</td><td>{item.result}</td>
                </tr>
            )
        })) : null;
    }

    return (
        <div>
            <h3 className="text-center">History</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Number</th><th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {renderHistoryTableData()}
                </tbody>
            </table> 
        </div>
    );
}

export default PlayerHistory;

PlayerHistory.propTypes = {
    history: PropTypes.array,
    deletePlayer: PropTypes.func,
    cancelPlayerModifyAction: PropTypes.func, 
  };