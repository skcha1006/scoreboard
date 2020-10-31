import React from "react";
import Player from "./Player";

class Counter extends React.Component {
  // state = {
  //   //score: 10
  //   score: this.props.score
  // }
  constructor(props) {
    super(props);
    // 1) this.incrementScore = this.incrementScore.bind(this);
  }

  /*handleScore = (delta) => {
    this.setState(prevState => {
      return {
        score: prevState.score + delta
      }
    });
    console.log(this.props.score);
  }*/

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => this.props.changeScore(-1, this.props.id)}> - </button>
        <span className="counter-score">{this.props.score}</span>
        <button className="counter-action increment" onClick={() => this.props.changeScore(+1, this.props.id)}> + </button>
      </div>
    )
  }
}

export default Counter;