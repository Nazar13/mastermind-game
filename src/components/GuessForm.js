import React, { Component } from "react";
import PropTypes from "prop-types";
import PlayerHistory from "./PlayerHistory.js";
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
    },
    player: this.props.player
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
    const updHistory = {
      number: this.state.inputedNum,
      result: this.getGuessResult()
    };
    const newPlayer = [...this.props.player];

    newPlayer[0].history[this.state.activeMode].push(updHistory);
    this.setState({ player: newPlayer });
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
      <button
        key={index}
        className={this.state.activeMode === mode ? "active" : null}
        name={mode}
        onClick={this.onModeHandlerClick}
      >
        {mode}
      </button>
      )
    });
  }

  cleanHistory = () => {
    const history = [...this.props.player];
    history[0].history[this.state.activeMode] = [];
    this.setState({ player: history });
  };

  render() {
    const history = this.props.player[0].history[this.state.activeMode];
    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center">Play game</h3>
          <div className="modesList">{this.renderModesBar()}</div>
          <form onSubmit={this.guessBtnHandler} className="fblock">
            <input
              type="number"
              name="num"
              className="numInput"
              onFocus={this.onFocusHandler}
              onChange={this.inputNumHandler}
              autoComplete="off"
            />
            <br /> <br />
            {this.state.status && this.getMessage()}
            <input
              type="submit"
              className="btn btn-success btnGuess"
              value="Guess"
              disabled={this.state.disable}
            />
          </form>
        </div>
        <div className="col-md-6">
          <PlayerHistory history={history} />
          <button onClick={this.cleanHistory} className="btn btn-dark">
            Clear history
          </button>
        </div>
      </div>
    );
  }
}

export default GuessForm;

GuessForm.propTypes = {
  player: PropTypes.array,
  deletePlayer: PropTypes.func,
  cancelPlayerModifyAction: PropTypes.func
};
