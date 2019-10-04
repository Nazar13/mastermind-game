import React, { Component } from "react";
import PropTypes from "prop-types";
import PlayerHistory from "../../components/PlayerHistory/PlayerHistory.js";
import { updateHistory, clearHistory } from "../../actions/actions.js";
import { connect } from "react-redux";
import { Row, Col, FormGroup, Form, Button } from "react-bootstrap";

const modes = ["Easy", "Medium", "Hard"];

class GuessForm extends Component {
  state = {
    inputedNum: 0,
    disable: true,
    status: false,
    activeMode: "Easy",
    numbers: {
      Easy: this.generateNumber(10),
      Medium: this.generateNumber(100),
      Hard: this.generateNumber(1000)
    }
  };

  inputNumHandler = e => {
    if (e.target.value) {
      this.setState({ inputedNum: e.target.value, disable: false });
    } else {
      this.setState({
        inputedNum: e.target.value,
        disable: true,
        status: false
      });
    }
  };

  onFocusHandler = () => {
    this.setState({ inputedNum: 0 });
    this.setState({ disable: true, status: false });
  };

  disableGuesBtn = () => {
    this.setState({ disable: true });
  };

  guessBtnHandler = e => {
    e.preventDefault();
    this.setState({ status: true });
    const history = {
      number: this.state.inputedNum,
      result: this.getGuessResult(),
      activeMode: this.state.activeMode,
      id: this.props.currentPlayer.id
    };
    this.props.guessBtnAction(history);
  };

  getGuessResult() {
    const selectedNumber = this.state.numbers[this.state.activeMode];
    const { inputedNum } = this.state;
    if (selectedNumber === inputedNum) {
      return "You win!!!";
    }
    return "You Lose";
  }

  getMessage() {
    const { activeMode, inputedNum } = this.state;
    const selectedNumber = this.state.numbers[activeMode];
    if (selectedNumber > inputedNum) {
      return <p className="more">More </p>;
    }
    if (selectedNumber < inputedNum) {
      return <p className="less">Less </p>;
    }
    return <p className="correct">You win !!! </p>;
  }

  onModeHandlerClick = e => {
    this.setState({ activeMode: e.target.name, status: false });
  };

  generateNumber(num) {
    return Math.floor(Math.random() * Math.floor(num));
  }

  renderModesBar() {
    return modes.map((mode, index) => {
      return (
        <Button
          key={index}
          variant="light"
          className={this.state.activeMode === mode ? "active" : null}
          name={mode}
          onClick={this.onModeHandlerClick}
        >
          {mode}
        </Button>
      );
    });
  }

  cleanHistory = () => {
    const payload = {
      id: this.props.currentPlayer.id,
      mode: this.state.activeMode
    };
    this.props.cleanHistoryAction(payload);
  };

  render() {
    return (
      <Row>
        <Col md="6">
          <h3 className="text-center">Play game</h3>
          <Row>
            <Col className="modesList">{this.renderModesBar()}</Col>
          </Row>
          <Form onSubmit={this.guessBtnHandler}>
            <FormGroup row>
              <Col md={10}>
                <Form.Control
                  type="number"
                  name="num"
                  className="numInput"
                  onFocus={this.onFocusHandler}
                  onChange={this.inputNumHandler}
                  autoComplete="off"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col>{this.state.status && this.getMessage()}</Col>
            </FormGroup>
            <FormGroup row>
              <Col md={4}>
                <Form.Control
                  type="submit"
                  className="btn btn-success "
                  value="Guess"
                  disabled={this.state.disable}
                />
              </Col>
            </FormGroup>
          </Form>
        </Col>
        <Col md="6">
          <PlayerHistory
            id={this.props.currentPlayer.id}
            activeMode={this.state.activeMode}
          />
          <Button variant="outline-dark" onClick={this.cleanHistory}>
            Clear history
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.managePlayers.players,
    currentPlayer: state.currentPlayer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    guessBtnAction: history => {
      dispatch(updateHistory(history));
    },
    cleanHistoryAction: players => {
      dispatch(clearHistory(players));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuessForm);

GuessForm.propTypes = {
  player: PropTypes.array,
  currentPlayer: PropTypes.object,
  deletePlayer: PropTypes.func,
  cancelPlayerModifyAction: PropTypes.func,
  cleanHistoryAction: PropTypes.func,
  guessBtnAction: PropTypes.func
};
