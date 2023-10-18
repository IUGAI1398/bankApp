import { combineReducers, createStore } from 'redux';


const initalStatCustumer = {
    fullName: '',
    nationalId: '',
    createdAt: ''

}


function custumerReducer(state = initalStatCustumer, action) {
    switch (action.type) {
        case 'custumer/createCustumer':
            return { ...state, fullName: action.payload.fullName, nationalId: action.payload.nationalID, createdAt: action.payload.createdAt }
        case 'custumer/updateName':
            return { ...state, fullName: action.payload };
        default:
            return state
    }
}

const rootReducer = combineReducers({ account: accountReducer, custumer: custumerReducer })

const store = createStore(rootReducer);



function createCustumer(fullName, nationalID) {
    return { type: 'custumer/createCustumer', payload: { fullName, nationalID, createdAt: new Date().toISOString() } }
}

function updateName(fullName) {
    return { type: 'account/updateName', payload: fullName };
}

store.dispatch(createCustumer('Iugai Aleksandr', "9812135300012"))
store.dispatch(deposit(120))
console.log(store.getState());