import * as TYPES from "../actions/actions.types";

const initialState = {
  isGameStarted: false,
  isStartGameBtnDisabled: true,
  isWinnerText: false
};

const startGameSwitcher = (state = initialState, action) => {

  switch (action.type) {
    case TYPES.START_GAME:
      return {
        ...state,
        isGameStarted: action.start
      };

    case TYPES.ENABLE_BTN:
      return {
        ...state,
        isStartGameBtnDisabled: action.enable
      };

    case TYPES.WINNER_TEXT:
      return {
        ...state,
        isWinnerText: action.show
      };

    default:
      return state;
  }
};

export default startGameSwitcher;