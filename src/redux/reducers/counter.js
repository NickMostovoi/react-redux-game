import * as TYPES from "../actions/actions.types";

const initalState = {
  counter: 0,
  isGameFailed: false
};

const counter = (state = initalState, action) => {

  switch (action.type) {
    case TYPES.ADD_COUNTER:
      return {
        ...state,
        counter: action.count
      };

    case TYPES.RESET_COUNTER:
      return {
        ...state,
        counter: action.count,
        isGameFailed: false
      };

    case TYPES.GAME_FAILED:
      return {
        ...state,
        isGameFailed: action.gameFailed
      };

    default:
      return state;
  }
};

export default counter;