import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  startGameAction,
  disableStartGameBtnAction,
  setUserDataAction,
} from "../../redux/actions/index";

const StartSection = ({isGameStarted, isStartGameBtnDisabled}) => {
  const [userNameInputValue, setUserNameInputValue] = useState('');
  const dispatch = useDispatch();

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

  console.log();

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