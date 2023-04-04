import {combineReducers} from '@reduxjs/toolkit';
import userReducer from './userReducer';
import someReducer from './someReducer';

const rootReducer = combineReducers({
  user: userReducer,
  some: someReducer,
});

export default rootReducer;
