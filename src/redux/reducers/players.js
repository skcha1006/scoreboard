import {CHANGE_SCORE, REMOVE_PLAYER} from "../action_types";

const initialState = {
  players: [
    {name: 'LDK', score: 0, id: 1},
    {name: 'HONG', score: 0, id: 2},
    {name: 'KIM', score: 0, id: 3},
    {name: 'PARK', score: 0, id: 4},
  ]
};

export const playerReducer = (state = initialState, action) => {
  console.log("playerReducer : ", action);
  let players;
  switch(action.type) {
    case REMOVE_PLAYER:
      players= state.players.filter(player => player.id !== action.id);
      return { ...state, players: players }
    case CHANGE_SCORE:
      console.log("1 : ", action.type);
      players = [...state.players];
      players.forEach(player => {
        console.log("id : ", player.id, action.id);
        if(player.id === action.id) {
          player.score += action.delta;
          console.log("CHANGE_SCORE : ", player.score);
        }
      } )
      return { ...state, players: players }
  }

  return state;
}
