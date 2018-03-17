import { combineReducers } from 'redux';
import layoutReducer from './layoutReducer';
import requestReducer from './requestReducer';
import responseReducer from './responseReducer';

export default combineReducers({
  layout: layoutReducer,
  request: requestReducer,
  response: responseReducer,
});