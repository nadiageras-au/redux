import {v1} from "uuid"

type defaultStateType = {
    customers: CustomerType[]
}

type CustomerType = {
    customerId: string
    name: string
}
const defaultState = {
    customers: [
        {
            customerId: '001',
            name: 'Olga'
        },
        {
            customerId: '002',
            name: 'Jack'
        }
    ]
}

const ADD_CUSTOMER = 'ADD-CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE-CUSTOMER'

export const customerReducer = (state = defaultState, action: ActionType): defaultStateType => {
    switch (action.type) {
        case ADD_CUSTOMER:
            console.log(action.name)
            let newCustomer = {customerId: v1(), name: action.name}
            return {
                ...state, customers: [newCustomer, ...state.customers]
            }
        case REMOVE_CUSTOMER:
        return {...state,
            customers: state.customers.filter(el=> el.customerId !== action.customerId)}
        default:
            return state
    }
}

type addCustomerTypeAC = ReturnType<typeof addCustomerAC>
type removeCustomerTypeAC = ReturnType<typeof removeCustomerAC>
type ActionType = addCustomerTypeAC | removeCustomerTypeAC

export const addCustomerAC = ( name: string) => {
    return {
        type: ADD_CUSTOMER,
             name

    } as const
}

export const removeCustomerAC = (customerId: string) => {
    return {
        type: REMOVE_CUSTOMER, customerId
    } as const
}