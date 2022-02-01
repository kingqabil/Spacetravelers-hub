import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import missionsReducer from './missions/missions';
import dragonReducer from './dragons/dragons';

const reducer = combineReducers({
  missions: missionsReducer,
  dragons: dragonReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
