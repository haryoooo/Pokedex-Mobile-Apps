import pokemonReducer from './reducer/pokemonReducer';
import pokemonWishListReducer from './reducer/pokemonWishlistReducer';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({pokemonReducer, pokemonWishListReducer});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
