import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startGameAction,
  disableStartGameBtnAction,
  setUserDataAction,
} from "../../redux/actions/index";
import { startGameSwitcherSelector } from "../../redux/useSelectors";

const StartSection = () => {
  const [userNameInputValue, setUserNameInputValue] = useState('');
  const dispatch = useDispatch();
  const { isStartGameBtnDisabled, isGameStarted } = useSelector(startGameSwitcherSelector);

  const onChangeUsername = (event) => {
    setUserNameInputValue(event.target.value);

    if (event.target.value.length >= 3) {
      dispatch(disableStartGameBtnAction(false));
    } else {
      dispatch(disableStartGameBtnAction(true));
    }
  }

  const handleStartGame = () => {
    dispatch(startGameAction(true));
    dispatch(setUserDataAction(userNameInputValue));
  };

  return (
    <div className={isGameStarted ? "hidden" : "container__start"}>
      <div className="username">
        <span className="username__text">Username</span>
        <input
          className="username__input"
          onChange={onChangeUsername}
          placeholder="Required"
          value={userNameInputValue}
        />
      </div>

      <button
        className="btn btn__start"
        onClick={handleStartGame}
        disabled={isStartGameBtnDisabled}>
        Start
      </button>
    </div>
  );
};

export default StartSection;