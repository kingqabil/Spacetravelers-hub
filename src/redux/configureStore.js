import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';
import dragonReducer from './dragons/dragons';

const reducer = combineReducers({

  rocketsReducer,
  missions: missionsReducer,
  dragons: dragonReducer,

});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
