/*
import React from 'react';

class Stopwatch extends React.Component {
  tickRef; //멤버변수

  state = {
    isRunning: false,
    timer: 0
  }

  handleStopwatch = () => {
    this.setState(prevState => ({isRunning: !prevState.isRunning}));
  }

  handleReset = () => {
    if(!this.state.isRunning) {
      this.setState(prevState => ({
        timer: 0
      }));
    }
  }

  tick = () => {
    // isRunning이 true이면 timer를 1씩 증가
    if (this.state.isRunning) {
      this.setState(prevState => ({
        timer: prevState.timer + 1
      }))
    }
  }

  // DOM이 렌더링 된 직후에 호출되는 라이프 사이클
  // 3rd 라이브러리 로딩, 네트워크 호출
  componentDidMount() {
    this.tickRef = setInterval(this.tick, 1000);
  }

  // DOM이 파괴되기 직전에 호출되는 라이프 사이클
  // 리소스 해제 등등
  componentWillUnmount() {
    clearInterval(this.tickRef);
  }

  getButton = () => {
    if(this.state.isRunning) {
      return (
        <button onClick={this.handleStopwatch}>Stop</button>
      );
    }else {
      return (
        <button onClick={this.handleStopwatch}>Start</button>
      );
    }

  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        {this.getButton()}
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
*/

//useRef 사용
/*import React, {useRef, useEffect, useState} from 'react';

function Stopwatch(props) {
  let tickRef;

  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  const refIsRunning = useRef(false);

  const handleStopwatch = () => {
    setIsRunning(!isRunning);
  }

  const handleReset = () => {
    if(!isRunning) {
      setTimer(0);
    }
  }

  const tick = () => {
    // isRunning이 true이면 timer를 1씩 증가

    if (refIsRunning.current) {
      setTimer(timer + 1);
    }
  }

  useEffect(() => {
    tickRef = setInterval(tick, 1000);
    return () => {
      clearInterval(tickRef);
    }
  }, [timer]);

  const getButton = () => {
    if(isRunning) {
      refIsRunning.current = true;
      return (
        <button onClick={handleStopwatch}>Stop</button>
      );
    }else {
      refIsRunning.current = false;
      return (
        <button onClick={handleStopwatch}>Start</button>
      );
    }

  }


  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{timer}</span>
      {getButton()}
      <button onClick={handleReset}>Reset</button>
    </div>
  );

}
*/

import React, {useRef, useEffect, useState} from 'react';
import {useInterval} from "../hooks/useInterval";

function Stopwatch(props) {

  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  useInterval(() => {
    // Your custom logic here
    if (isRunning) {
      setTimer(timer => timer + 1);
    }
  }, 1000);

  const getButton = () => {
    if (isRunning) {
      return (
        <button onClick={() => setIsRunning(!isRunning)}>
          stop
        </button>
      );
    } else {
      return (
        <button onClick={() => setIsRunning(!isRunning)}>
          start
        </button>
      );
    }
  }

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{timer}</span>
      {
        getButton()
      }
      <button>Reset</button>
    </div>
  );

}

export default Stopwatch