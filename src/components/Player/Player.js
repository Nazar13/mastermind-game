import React from "react";
import PropTypes from "prop-types";
import AddPlayer from "../../components/AddPlayer/AddPlayer.js";
import EditPlayer from "../../components/EditPlayer/EditPlayer.js";
import DeletePlayer from "../../components/DeletePlayer/DeletePlayer.js";
import { Row, Col, Button, Table } from "react-bootstrap";

const Player = props => {
  function setActivePlayer(id) {
    const player = props.players.filter(player => player.id === id);
    props.onEditHandler();
    props.setActivePlayerHandler(player[0]);
  }
  function setActiveDeletePlayer(id) {
    const player = props.players.filter(player => player.id === id);
    props.onDeleteHandler();
    props.setActivePlayerHandler(player[0]);
  }
  return (
    <Row>
      <Col md={6}>
        <h3 className="mb20" align="center">
          Players
        </h3>
        <Table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.players.map((player, index) => (
              <tr key={player.id * player.id}>
                <td>{index + 1}</td>
                <td key={player.id} value={player.name}>
                  {player.name}
                </td>
                <td>
                  <Button
                    onClick={() => setActivePlayer(player.id)}
                    variant="outline-primary"
                  >
                    Edit Player
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => setActiveDeletePlayer(player.id)}
                    variant="outline-danger"
                  >
                    Delete Player
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={props.onAddHandler} variant="outline-success">
          Add Player
        </Button>
        {props.onAdd && (
          <AddPlayer
            addNewPlayer={props.addNewPlayer}
            cancelOnAddAction={props.cancelOnAddAction}
          />
        )}
      </Col>
      <Col>
        {props.onEdit && <EditPlayer />}
        {props.onDelete && <DeletePlayer />}
      </Col>
    </Row>
  );
};

Player.propTypes = {
  players: PropTypes.array,
  onEditHandler: PropTypes.func,
  setActivePlayerHandler: PropTypes.func,
  onDeleteHandler: PropTypes.func,
  onAddHandler: PropTypes.func,
  onAdd: PropTypes.bool,
  addNewPlayer: PropTypes.func,
  cancelOnAddAction: PropTypes.func,
  onEdit: PropTypes.bool,
  onDelete: PropTypes.bool
};

export default Player;
