import { START_GAME, ENABLE_BTN, WINNER_TEXT } from "../actions/actions.types";

const initalState = {
  isGameStarted: false,
  isStartGameBtnDisabled: true,
  isWinnerText: false
};

const startGameSwitcher = (state = initalState, action) => {

  switch (action.type) {
    case START_GAME:
      return { 
        ...state, 
        isGameStarted: action.start 
      };

    case ENABLE_BTN:
      return { 
        ...state, 
        isStartGameBtnDisabled: action.enable 
      };

    case WINNER_TEXT:
      return { 
        ...state, 
        isWinnerText: action.show 
      };

    default:
      return state;
  }
};

export default startGameSwitcher;