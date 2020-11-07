import React from "react";
import {useDispatch} from "react-redux";
import {changeScore} from "../redux/actions";

function Counter(props) {
  const dispatch = useDispatch();

  return (
      <div className="counter">
        <button className="counter-action decrement"
                onClick={() => dispatch(changeScore(-1, props.id))}> - </button>
        <span className="counter-score">{props.score}</span>
        <button className="counter-action increment"
                onClick={() => dispatch(changeScore(+1, props.id))}> + </button>
      </div>
    )
}

export default Counter;