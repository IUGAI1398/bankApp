import { createSlice } from "@reduxjs/toolkit"

const initalState = {
    fullName: '',
    nationalId: '',
    createdAt: ''

}

const custumerSlice = createSlice({
    name: "custumer",
    initialState: initalState,
    reducers: {
        createCustumer: {
            prepare(fullName, nationalId){
                return {payload: {fullName, nationalId}}
            },
            reducer(state, action){
                state.fullName = action.payload.fullName;
                state.nationalId = action.payload.nationalId
                state.createdAt =  new Date().toISOString()
            }
        },
        updateName(state,action) {
            state.fullName = action.payload
        }
    }
})

console.log(custumerSlice);

export const {createCustumer,updateName} = custumerSlice.actions

export default custumerSlice.reducer


// export default function custumerReducer(state = initalStatCustumer, action) {
//     switch (action.type) {
//         case 'custumer/createCustumer':
//             return { ...state, fullName: action.payload.fullName, nationalId: action.payload.nationalID, createdAt: action.payload.createdAt }
//         case 'custumer/updateName':
//             return { ...state, fullName: action.payload };
//         default:
//             return state
//     }
// }


// export function createCustumer(fullName, nationalID) {
//     return { type: 'custumer/createCustumer', payload: { fullName, nationalID, createdAt: new Date().toISOString() } }
// }

// export function updateName(fullName) {
//     return { type: 'custumer/updateName', payload: fullName };
// }

