import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
  },
  reducers: {
    logIn(state, action) {
      state.token = 'action.payload.token';
    },
    logOut(state) {
      state.token = '';
    },
  },
});

export const {logIn} = userSlice.actions;

export default userSlice.reducer;
