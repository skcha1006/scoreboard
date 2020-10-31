/*import React from "react";
import {Counter} from './components/Counter';

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

export const Player = (props) => {

  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
      </span>
      <span className="player-name">
        {props.name}
      </span>
      <Counter score={props.score}></Counter>
    </div>
  );

}
*/

/*
// function name으로 구성
import React from 'react';
import Counter from "./Counter";

function Player(props) {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
      </span>
      <span className="player-name">
        {props.name}
      </span>
      <Counter score={props.score} changeScore={props.changeSore} id={props.id}></Counter>
    </div>
  );
}
*/

// function name으로 구성
import React from 'react';
import Counter from "./Counter";

function Player(props) {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
      </span>
      <span className="player-name">
        {props.children}
        {props.name}
      </span>
      <Counter score={props.score} changeScore={props.changeSore} id={props.id}></Counter>
    </div>
  );
}

export default Player;