import * as TYPES from "./actions.types";

let count = 0;

export const addPrudenceAction = () => {
  return {
    type: TYPES.ADD_COUNTER,
    count: count += 27
  };
};

export const addCreativityAction = () => {
  return {
    type: TYPES.ADD_COUNTER,
    count: count += 46
  };
};

export const addSociabilityAction = () => {
  return {
    type: TYPES.ADD_COUNTER,
    count: count += 33
  };
};

export const addCollectivismAction = () => {
  return {
    type: TYPES.ADD_COUNTER,
    count: count += 18
  };
};

export const addPersistenceAction = () => {
  return {
    type: TYPES.ADD_COUNTER,
    count: count += 29
  };
};

export const addCourtesyAction = () => {
  return {
    type: TYPES.ADD_COUNTER,
    count: count += 13
  };
};

export const resetCounterAction = () => {
  count = 0;

  return {
    type: TYPES.RESET_COUNTER,
    count: 0,
    gameFailed: false
  };
};

export const showWinnerTextAction = (show) => {
  return {
    type: TYPES.WINNER_TEXT,
    show
  };
};

export const setUserDataAction = (userName) => {
  return {
    type: TYPES.USER_DATA,
    userName
  };
};

export const startGameAction = () => {
  return {
    type: TYPES.START_GAME,
    start: true
  };
};

export const disableStartGameBtnAction = (state) => {
  return {
    type: TYPES.ENABLE_BTN,
    enable: state
  };
};

export const setGameFailedAction = () => {
  return {
    type: TYPES.GAME_FAILED,
    gameFailed: true
  };
};