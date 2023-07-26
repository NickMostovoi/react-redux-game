import { USER_DATA } from "../actions/actions.types";

const initalState = {
  userName: ""
};

const userData = (state = initalState, action) => {
  switch (action.type) {
    case USER_DATA:
      return { userName: action.userName };

    default:
      return state;
  }
};

export default userData;