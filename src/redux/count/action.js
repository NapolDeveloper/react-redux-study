import { INCREMENT, DECREMENT } from './types';

export const addCount = () => {
  return {
    type: INCREMENT
  };
};
export const removeCount = () => {
  return {
    type: DECREMENT
  };
};
