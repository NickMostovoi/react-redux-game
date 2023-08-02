import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "../../redux/reducers/index";
import Counter from "../Counter/Counter";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;