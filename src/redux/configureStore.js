import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rocketReducer from './rockets/rockets';
import dragonReducer from './dragons/dragons';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  missions: missionsReducer,
  dragons: dragonReducer,
  rockets: rocketReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
