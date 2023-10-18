import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import accountReducer from './features/account/acoountSlice';
import custumerReducer from './features/custumers/custumerSlice';



const rootReducer = combineReducers({ account: accountReducer, custumer: custumerReducer })

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store

