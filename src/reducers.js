import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const test = (state = {}, action) => state;

const rootReducer = combineReducers({
  test,
  form: formReducer,
});

export default rootReducer;
