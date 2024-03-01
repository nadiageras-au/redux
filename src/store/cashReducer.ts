
type defaultStateType = {
    cash: number
}
const defaultState = {
    cash: 0,
}

const ADD_CASH="ADD-CASH"
const GET_CASH="GET-CASH"

export const cashReducer = (state= defaultState, action: ActionType): defaultStateType => {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + action.payload}
        case GET_CASH:
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}


type addCashTypeAC = ReturnType<typeof addCashAC>
type getCashTypeAC = ReturnType<typeof getCashAC>
type ActionType = addCashTypeAC |getCashTypeAC




export const addCashAC = (cash:number) => {
    return {
        type: ADD_CASH,
        payload: cash
    } as const
}

export const getCashAC = (cash:number) => {
    return {
        type: GET_CASH,
        payload: cash
    } as const
}