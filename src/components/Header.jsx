import React from "react";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

export const Header = (props) => {
  //console.log(props);
  const totalPlayers = props.players.length;

  return (
    <header className="header">
      <Stats players={props.players}></Stats>
      <h1 className="h1">{props.title}</h1>
      <span className="spats">PLAYERS: {totalPlayers}</span>
      <Stopwatch></Stopwatch>

    </header>
  );
}