
const initalStatCustumer = {
    fullName: '',
    nationalId: '',
    createdAt: ''

}


export default function custumerReducer(state = initalStatCustumer, action) {
    switch (action.type) {
        case 'custumer/createCustumer':
            return { ...state, fullName: action.payload.fullName, nationalId: action.payload.nationalID, createdAt: action.payload.createdAt }
        case 'custumer/updateName':
            return { ...state, fullName: action.payload };
        default:
            return state
    }
}


export function createCustumer(fullName, nationalID) {
    return { type: 'custumer/createCustumer', payload: { fullName, nationalID, createdAt: new Date().toISOString() } }
}

export function updateName(fullName) {
    return { type: 'custumer/updateName', payload: fullName };
}

