import {createSlice} from '@reduxjs/toolkit';

const someSlice = createSlice({
  name: 'some',
  initialState: {
    some: null,
  },
  reducers: {
    logIn(state, action) {
      console.log('state', state);
      state.some = action.payload.token;
    },
    logOut(state) {
      state.some = null;
    },
  },
});

export const {logIn} = someSlice.actions;

export default someSlice.reducer;
