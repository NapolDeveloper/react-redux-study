import { createAction } from '@reduxjs/toolkit';

// { type: 'INCREMENT' }
export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
