import { combineReducers } from 'redux';

// reducers
import counteReducer from './count/reducer';

const rootReducer = combineReducers({
  counteReducer: counteReducer // counteReducer만 작성해도 작동
});

export default rootReducer;
