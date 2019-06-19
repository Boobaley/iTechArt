import { combineReducers } from 'redux';
import inputs from './inputs';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({ inputs, form: formReducer });

export default rootReducer;