import { ADD_COUNTER, RESET_COUNTER, GAME_FAILED } from "../actions/actions.types";

const initalState = {
  counter: 0,
  isGameFailed: false
};

const counter = (state = initalState, action) => {

  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: action.count
      };

    case RESET_COUNTER:
      return { 
        ...state, 
        counter: action.count,
        isGameFailed: false
      };

    case GAME_FAILED:
      return { 
        ...state, 
        isGameFailed: action.gameFailed
      };
      
    default:
      return state;
  }
};

export default counter;