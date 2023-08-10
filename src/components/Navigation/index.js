import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCounterAction, showWinnerTextAction } from "../../redux/actions/index";
import { counterSelector, startGameSwitcherSelector } from "../../redux/useSelectors";
import { setEscapeButton } from "./helper";

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

  useEffect(() => {
    if (counter === 100) {
      finishGameBtnRef.current.style.left = 0;
      finishGameBtnRef.current.style.top = 0;
      finishGameBtnRef.current.style.transform = 'rotate(0deg)';
    }
  }, [counter]);

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