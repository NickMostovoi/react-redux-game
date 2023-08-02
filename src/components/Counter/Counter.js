import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from '../Navigation/Navigation';
import StartSection from '../StartSection/StartSection';
import {
  addPrudenceAction,
  addCreativityAction,
  addSociabilityAction,
  addCollectivismAction,
  addPersistenceAction,
  addCourtesyAction,
  setGameFailedAction
} from "../../redux/actions/index";
import {
  startGameSwitcherSelector,
  userDataSelector,
  counterSelector
} from '../../redux/useSelectors';

const Counter = () => {
  const dispatch = useDispatch();
  const { isGameStarted, isWinnerText } = useSelector(startGameSwitcherSelector);
  const { userName } = useSelector(userDataSelector);
  const { counter, isGameFailed } = useSelector(counterSelector);

  useEffect(() => {
    if (counter > 100) {
      dispatch(setGameFailedAction(true));
    }
  }, [counter, dispatch]);

  const addPrudence = () => {
    dispatch(addPrudenceAction());
  };

  const addCreativity = () => {
    dispatch(addCreativityAction());
  };

  const addSociability = () => {
    dispatch(addSociabilityAction());
  };

  const addCollectivism = () => {
    dispatch(addCollectivismAction());
  };

  const addPersistence = () => {
    dispatch(addPersistenceAction());
  };

  const addCourtesy = () => {
    dispatch(addCourtesyAction());
  };

  return (
    <div className="container">

      <h3 className={isGameFailed ? 'container__score container__score_failed' : "container__score"}>
        Score: {counter} / 100
      </h3>

      <StartSection />

      <div className={isGameStarted ? "container__buttons" : "hidden" }>
        <button className="btn" onClick={addPrudence}> add Prudence + 27 </button>
        <button className="btn" onClick={addCreativity}> add Creativity + 46 </button>
        <button className="btn" onClick={addSociability}> add Sociability + 33 </button>
        <button className="btn" onClick={addCollectivism}> add Collectivism + 18 </button>
        <button className="btn" onClick={addPersistence}> add Persistence + 29 </button>
        <button className="btn" onClick={addCourtesy}> add Courtesy + 13 </button>
      </div>

      <div className={isWinnerText ? "container__winner-text" : "hidden"}>Congratulations<br />{userName}</div>

      <Navigation />

    </div>
  );
};

export default Counter;