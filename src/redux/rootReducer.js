import { combineReducers } from 'redux';
import { cartReducer } from './reducers/cartReducer';
import { diceReducer } from './reducers/diceReducer';

export const rootReducer = combineReducers({
    cartReducer,
    diceReducer,
});
