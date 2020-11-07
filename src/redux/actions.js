import {CHANGE_SCORE, REMOVE_PLAYER} from "./action_types";

export const removePlayer = (id) => ({
    type: REMOVE_PLAYER,
    id
})

export const changeScore = (delta, id) => ({
    type: CHANGE_SCORE,
    delta,
    id
})