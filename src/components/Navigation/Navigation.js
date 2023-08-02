import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCounterAction, showWinnerTextAction } from "../../redux/actions/index";
import { counterSelector, startGameSwitcherSelector } from "../../redux/useSelectors";

const setEscapeButton = (event, counter) => {
  const random = (min, max) => {
    const randomNumber = min + Math.random() * (max - min + 1);
    return Math.floor(randomNumber);
  };

  if (counter !== 100) {
    event.target.style.left = `${random(-40, 50)}%`;
    event.target.style.top = `${random(15, 85)}%`;
    event.target.style.transform = `rotate(${random(-40, 40)}deg)`;
  }
}

const Navigation = () => {
  const finishGameBtnRef = useRef(null);
  const dispatch = useDispatch();
  const { counter } = useSelector(counterSelector);
  const { isGameStarted } = useSelector(startGameSwitcherSelector);

  const onMouseMove = (event) => {
    setEscapeButton(event, counter);
  };

  const handleFinish = () => {
    dispatch(showWinnerTextAction(true))
  };

  const handleReset = () => {
    dispatch(resetCounterAction())
    dispatch(showWinnerTextAction(false))
  };

  if (counter === 100) {
    finishGameBtnRef.current.style.left = 0;
    finishGameBtnRef.current.style.top = 0;
    finishGameBtnRef.current.style.transform = 'rotate(0deg)';
  }

  return (
    <div className={isGameStarted ? "navigation" : "hidden"}>
      <button
        className="btn btn__finish"
        ref={finishGameBtnRef}
        onMouseMove={onMouseMove}
        onClick={handleFinish}>
        Finish
      </button>

      <button
        className="btn btn__reset"
        onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};

export default Navigation;