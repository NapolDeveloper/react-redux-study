import { configureStore } from '@reduxjs/toolkit';
import counteReducer from '../redux/count/reducer';

export const store = configureStore({
  reducer: {
    count: counteReducer
  }
});
