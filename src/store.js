
import {configureStore} from '@reduxjs/toolkit'
import accountReducer from './features/account/acoountSlice';
import custumerReducer from './features/custumers/custumerSlice';


const store = configureStore({
    reducer: {
        account: accountReducer,
        custumer: custumerReducer
    },
});

export default store

