
import React, {useState} from 'react';
import './App.css';
import {Header} from './components/Header';
import Player from './components/Player';
import AddPlayerForm from "./components/AddPlayerForm";
import CustomPlayer from "./components/CustomPlayer";
import _ from 'lodash';
import {connect, useSelector} from "react-redux";

function App() {
  const players = useSelector(state => state.player.players);

  const handleAddPlayer = (name) => {
    const newPlayers = [...players];

    let id = 0;

    newPlayers.forEach(player => {
      if(player.id > id) {
        id = player.id
      }
    } );
    const maxId = id + 1;

    newPlayers.unshift({id: maxId, name: name, score: 0});

    //setPlayers(newPlayers);

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

      { players.map(player => <CustomPlayer name={player.name}
                                                score={player.score}
                                                key={player.id.toString()}
                                                id={player.id}
                                                isHighScore={player.score === getHighScore()} />) }
      <AddPlayerForm addPlayer={handleAddPlayer}></AddPlayerForm>
    </div>
   );
}

/*
// subscribe: 스토어의 state를 props로 매핑하기
const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 store의 state
  players: state.player.players,
});

// 문법적으로는 파라메터를 차례대로 넣는 커링 펑션
// 결과적으로 만드는것은 App을 입력으로해서 새로운 HoC 컴포넌트를 만든다.
export default connect(mapStateToProps)(App);
*/
export default App;