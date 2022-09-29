export const CATCH_EMAIL = 'CATCH_EMAIL';

export const catchUser = (email) => ({
  type: CATCH_EMAIL,
  email,
});
