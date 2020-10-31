import React from "react";
import Player from "./Player";

class Counter extends React.Component {
  state = {
    //score: 10
    score: this.props.score
  }

  handleScore = (delta) => {
    this.setState(prevState => {
      return {
        score: prevState.score + delta
      }
    });
    console.log(this.state.score);
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => this.handleScore(-1)}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={() => this.handleScore(+1)}> + </button>
      </div>
    )
  }
}

export default Counter;