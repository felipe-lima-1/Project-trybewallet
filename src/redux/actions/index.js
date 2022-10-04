export const CATCH_EMAIL = 'CATCH_EMAIL';
export const CATCH_EXPENSE = 'CATCH_EXPENSE';
export const RMV_EXPENSES = 'RMV_EXPENSES';

export const catchUser = (email) => ({
  type: CATCH_EMAIL,
  email,
});

export const GET_COINS = 'GET_COINS';

const getCoins = (coin) => ({
  type: GET_COINS,
  payload: Object.keys(coin).filter((element) => element !== 'USDT'),
});

export const catchExpense = (expense, element) => ({
  type: CATCH_EXPENSE,
  payload: { ...expense,
    exchangeRates: element,
  },
});

export const rmvExpenses = (expense) => ({
  type: RMV_EXPENSES,
  payload: expense,
});

export function fetchApi() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(getCoins(data));
  };
}
export function fetchExpense(expense) {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(catchExpense(expense, data));
  };
}
