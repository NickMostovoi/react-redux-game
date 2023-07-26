import { combineReducers } from "redux";
import counter from "./counter";
import startGameSwitcher from "./startGameSwitcher";
import userData from "./userData";

const rootReducer = combineReducers({
  counter,
  startGameSwitcher,
  userData
});

export default rootReducer;