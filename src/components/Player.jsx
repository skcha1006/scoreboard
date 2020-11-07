import React from 'react';
import Counter from "./Counter";
import {removePlayer} from "../redux/actions";
import {connect, useDispatch} from "react-redux";

function Player({score, name, id, changeScore, children}) {
  const dispatch = useDispatch();
  return (
    <div className='player'>
      <span className='player-name'>
        <button className='remove-player' onClick={() => dispatch(removePlayer(id))}>x</button>
        {children}
        {name}
      </span>
      <Counter
        score={score}
        id={id}
        changeScore={changeScore}/>
    </div>
  );
}

export default Player;