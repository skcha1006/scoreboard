/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from 'react';
import './App.css';
import {Header} from './components/Header';
import Player from './components/Player';

/*class Counter extends React.Component {
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


let Player = (props) => {

  return (
    <div className="player">
      <span className="player-name">
        {/!*자식컴포넌트에서 Player 삭제를 위해 부모컴포넌트의 콜백펑션을 실행*!/}
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
      </span>
      <span className="player-name">
        {props.name}
      </span>
      <Counter score={props.score}></Counter>
    </div>
  );

}*/

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4},
    ]
  };

  //props의 데이터를 자식 컴포넌트에서 삭제할 수 없으므로
  //자식 컴포넌트에서 Player 삭제를 위해 요청 부분을 처리하기 위한 펑션
  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} ></Header>

        {/*Players List*/}
        { this.state.players.map(item => <Player name={item.name} score={item.score} key={item.id.toString()} removePlayer={this.handleRemovePlayer} id={item.id}  />) }
      </div>
    );
  }
}

export default App;