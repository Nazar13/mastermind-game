import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Row, Col, Table } from "react-bootstrap";

const PlayerHistory = props => {
  function renderHistoryTableData() {
    const { players } = props;
    const player = players.filter(player => player.id === props.id);
    const data = player[0].history[props.activeMode];
    return data.length
      ? data.map(item => {
          return (
            <tr key={item.number}>
              <td>{item.number}</td>
              <td>{item.result}</td>
            </tr>
          );
        })
      : null;
  }
  return (
    <Row>
      <Col>
        <h3 className="text-center">History</h3>
        <Table className="table table-striped">
          <thead>
            <tr>
              <th>Number</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>{renderHistoryTableData()}</tbody>
        </Table>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => {
  return {
    players: state.managePlayers.players
  };
};

export default connect(mapStateToProps)(PlayerHistory);

PlayerHistory.propTypes = {
  id: PropTypes.number,
  players: PropTypes.array,
  activeMode: PropTypes.string
};
