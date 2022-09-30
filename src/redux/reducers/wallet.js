import { GET_COINS } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expensies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_COINS:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default wallet;
