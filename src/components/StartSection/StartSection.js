import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { 
  startGameAction,
  disableStartGameBtnAction,
  setUserDataAction,
} from "../../redux/actions/index";

const StartSection = ({isGameStarted, isStartGameBtnDisabled}) => {
  const userNameInputRef = useRef(null);
  const dispatch = useDispatch();  

  const onChangeUsername = (event) => {    
    if (event.target.value.length >= 3) {
      dispatch(disableStartGameBtnAction(false));
    } else {
      dispatch(disableStartGameBtnAction(true));
    }
  }

  const handleStartGame = () => {
    dispatch(startGameAction(true));
    dispatch(setUserDataAction(userNameInputRef.current.value));
  };
  
  return (
    <div className={isGameStarted ? "hidden" : "container__start"}>
      <div className="username">
        <span className="username__text">Username</span>
        <input 
          className="username__input" 
          onChange={(event) => onChangeUsername(event)}
          placeholder="Required"
          ref={userNameInputRef} 
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