import React, { Component } from "react";

class PlayerHistory extends Component {

    renderTableData(){
        const data = this.props.history;
        return data.length ? (
            data.map((item) => {
            return ( 
                <tr>
                    <td>{item.number}</td>
                    <td>{item.result}</td>
                </tr>
            )
        })) : null;
    }
    
    render() {
        return (
            <div>
                <h3 className="text-center">History</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table> 
            </div> 
        )
    } 
}

export default PlayerHistory;