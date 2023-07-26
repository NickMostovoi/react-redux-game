import { 
  WINNER_TEXT,
  USER_DATA,
  START_GAME,
  ENABLE_BTN,
  ADD_COUNTER,
  RESET_COUNTER,
  GAME_FAILED
} from "./actions.types";

let count = 0;

export const addPrudenceAction = () => {
  return {
    type: ADD_COUNTER,
    count: count += 27
  };
};

export const addCreativityAction = () => {
  return {
    type: ADD_COUNTER,
    count: count += 46
  };
};

export const addSociabilityAction = () => {
  return {
    type: ADD_COUNTER,
    count: count += 33
  };
};

export const addCollectivismAction = () => {
  return {
    type: ADD_COUNTER,
    count: count += 18
  };
};

export const addPersistenceAction = () => {
  return {
    type: ADD_COUNTER,
    count: count += 29
  };
};

export const addCourtesyAction = () => {
  return {
    type: ADD_COUNTER,
    count: count += 13
  };
};

export const resetCounterAction = () => {
  count = 0;

  return {
    type: RESET_COUNTER,
    count: 0,
    gameFailed: false
  };
};

export const showWinnerTextAction = (show) => {
  return {
    type: WINNER_TEXT,
    show
  };
};

export const setUserDataAction = (userName) => {
  return {
    type: USER_DATA,
    userName
  };
};

export const startGameAction = () => {
  return {
    type: START_GAME,
    start: true
  };
};

export const disableStartGameBtnAction = (state) => {
  return {
    type: ENABLE_BTN,
    enable: state
  };
};

export const setGameFailedAction = () => {
  return {
    type: GAME_FAILED,
    gameFailed: true
  };
};