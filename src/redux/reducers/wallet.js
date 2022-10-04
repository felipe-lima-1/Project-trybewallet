import { GET_COINS, CATCH_EXPENSE, RMV_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_COINS:
    return { ...state, currencies: action.payload };
  case CATCH_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case RMV_EXPENSES:
    return { ...state,
      expenses: state.expenses.filter((element) => element.id !== action.payload) };
  default:
    return state;
  }
};

export default wallet;
