import React from "react";

const PlayerHistory = (props) => {
    
    function renderHistoryTableData(){
        const data = props.history;
        return data.length ? (
            data.map((item) => {
            return ( 
                <tr>
                    <td>{item.number}</td><td>{item.result}</td>
                </tr>
            )
        })) : null;
    };

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
