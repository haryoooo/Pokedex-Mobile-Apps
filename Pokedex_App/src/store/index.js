import pokemonReducer from './reducer/pokemonReducer';
import pokemonFavouriteReducer from './reducer/pokemonFavouriteReducer';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({pokemonReducer, pokemonFavouriteReducer});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
