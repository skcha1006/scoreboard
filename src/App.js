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

/*
import React from 'react';
import './App.css';
import {Header} from './components/Header';
import Player from './components/Player';
import AddPlayerForm from "./components/AddPlayerForm";
import CustomPlayer from "./components/CustomPlayer";
var _ = require('lodash');

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

/*
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

  handleChangeScore = (delta, id) => {
    console.log('handleScore', delta, id);

    this.setState((prevState) => {
      const player = [...prevState.players];

      player.forEach(player => {
        if(player.id === id) {
          player.score += delta;
        }
      } )

      return {players: player}

    });

  }


  handleAddPlayer = (name) => {
    this.setState(prevState => {
      const player = [...prevState.players];
      let id = 0;
      player.forEach(player => {
        if(player.id > id) {
          id = player.id
        }
      } );
      const maxId = id + 1;
      console.log(maxId);
      player.unshift({id: maxId, name: name, score: 0});

      return {players: player}
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.state.players}></Header>

        { this.state.players.map(item => <Player name={item.name} score={item.score} key={item.id.toString()} removePlayer={this.handleRemovePlayer} id={item.id} changeSore={this.handleChangeScore}  />) }
        <AddPlayerForm addPlayer={this.handleAddPlayer}></AddPlayerForm>
      </div>
    );
  }
}
*/

/*
class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 0, id: 1},
      {name: 'HONG', score: 0, id: 2},
      {name: 'KIM', score: 0, id: 3},
      {name: 'PARK', score: 0, id: 4},
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

  handleChangeScore = (delta, id) => {
    console.log('handleScore', delta, id);

    this.setState((prevState) => {
      const player = [...prevState.players];

      player.forEach(player => {
        if(player.id === id) {
          player.score += delta;
        }
      } )

      return {players: player}

    });

  }


  handleAddPlayer = (name) => {
    this.setState(prevState => {
      const player = [...prevState.players];
      let id = 0;
      player.forEach(player => {
        if(player.id > id) {
          id = player.id
        }
      } );
      const maxId = id + 1;
      console.log(maxId);
      player.unshift({id: maxId, name: name, score: 0});

      return {players: player}
    });
  }

  getHighScore() {
    const maxObject = _.maxBy(this.state.players, 'score');
    const highScore = maxObject.score;
    // 0은 디폴트이므로  0보다 클 경우만 highScore로 지정한다.
    return highScore > 0 ? highScore : null;
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.state.players}></Header>

        { this.state.players.map(item => <CustomPlayer name={item.name} score={item.score} key={item.id.toString()} removePlayer={this.handleRemovePlayer} id={item.id} changeSore={this.handleChangeScore} isHighScore={item.score === this.getHighScore()} />) }
        <AddPlayerForm addPlayer={this.handleAddPlayer}></AddPlayerForm>
      </div>
    );
  }
}
*/


import React, {useState} from 'react';
import './App.css';
import {Header} from './components/Header';
import Player from './components/Player';
import AddPlayerForm from "./components/AddPlayerForm";
import CustomPlayer from "./components/CustomPlayer";
var _ = require('lodash');

function App(props) {

  const [players, setPlayers] = useState([
    {name: 'LDK', score: 0, id: 1},
    {name: 'HONG', score: 0, id: 2},
    {name: 'KIM', score: 0, id: 3},
    {name: 'PARK', score: 0, id: 4},
  ]);

  //props의 데이터를 자식 컴포넌트에서 삭제할 수 없으므로
  //자식 컴포넌트에서 Player 삭제를 위해 요청 부분을 처리하기 위한 펑션
  const handleRemovePlayer = (id) => {
    const newPlayers = players.filter((player) => player.id !== id);
    setPlayers(newPlayers);
  }

  const handleChangeScore = (delta, id) => {
    console.log('handleScore', delta, id);

    const newPlayers = [...players];

    newPlayers.forEach(newPlayers => {
      if(newPlayers.id === id) {
        newPlayers.score += delta;
      }
    } )

    setPlayers(newPlayers);

  }


  const handleAddPlayer = (name) => {
    const newPlayers = [...players];

    let id = 0;

    newPlayers.forEach(newPlayers => {
      if(newPlayers.id > id) {
        id = newPlayers.id
      }
    } );
    const maxId = id + 1;

    newPlayers.unshift({id: maxId, name: name, score: 0});

    setPlayers(newPlayers);

  }

  const getHighScore = () => {
    const maxObject = _.maxBy(players, 'score');
    const highScore = maxObject.score;
    // 0은 디폴트이므로  0보다 클 경우만 highScore로 지정한다.
    return highScore > 0 ? highScore : null;
  }

  return (
    <div className="scoreboard">
      <Header title="My scoreboard" players={players}></Header>

      { players.map(item => <CustomPlayer name={item.name} score={item.score} key={item.id.toString()} removePlayer={handleRemovePlayer} id={item.id} changeSore={handleChangeScore} isHighScore={item.score === getHighScore()} />) }
      <AddPlayerForm addPlayer={handleAddPlayer}></AddPlayerForm>
    </div>
   );
}

export default App;