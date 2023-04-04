export const getUser = state => state.user;

export const getToken = state => {
  const user = getUser(state);
  console.log('user', state);
  return user.token;
};
