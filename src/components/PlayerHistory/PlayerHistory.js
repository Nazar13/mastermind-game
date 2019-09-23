import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

class PlayerHistory extends Component {
    renderHistoryTableData(){
        const player = this.props.players.filter(user => user.id === this.props.id);
        const data = player[0].history[this.props.activeMode];
        return data.length ? (
            data.map((item) => {
            return ( 
                <tr key={item.number}>
                    <td>{item.number}</td><td>{item.result}</td>
                </tr>
            )
        })) : null;
    }

    render() {
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
                        {this.renderHistoryTableData()}
                    </tbody>
                </table> 
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    players: state.players,
  };
};

export default connect(mapStateToProps)(PlayerHistory);

PlayerHistory.propTypes = {
  id: PropTypes.number,
  players: PropTypes.array,
  activeMode: PropTypes.string
};