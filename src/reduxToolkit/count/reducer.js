import { createReducer } from '@reduxjs/toolkit';

export const counterReducer = createReducer(0, {
  increment: (state, action) => state + action.payload,
  decrement: (state, action) => state - action.payload
});
