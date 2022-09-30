export const CATCH_EMAIL = 'CATCH_EMAIL';

export const catchUser = (email) => ({
  type: CATCH_EMAIL,
  email,
});

export const GET_COINS = 'GET_COINS';

const getCoins = (coin) => ({
  type: GET_COINS,
  payload: Object.keys(coin).filter((element) => element !== 'USDT'),
});

export function fetchApi() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    dispatch(getCoins(data));
  };
}
