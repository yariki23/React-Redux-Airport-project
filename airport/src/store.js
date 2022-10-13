import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { flightsReducer, searchReducer } from './flight.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  flights: flightsReducer,
  search: searchReducer,
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
