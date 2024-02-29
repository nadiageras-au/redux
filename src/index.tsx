import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore as createStore} from "redux";
import {TypedUseSelectorHook, Provider, useSelector} from "react-redux";


type defaultStateType = {
    cash: number
}
const defaultState = {
    cash: 0,
}



type addCashTypeAC = ReturnType<typeof addCashAC>
type getCashTypeAC = ReturnType<typeof getCashAC>
type ActionType = addCashTypeAC |getCashTypeAC
const reducer = (state= defaultState, action: ActionType): defaultStateType => {
    switch (action.type) {
        case "ADD-CASH":
            return {...state, cash: state.cash + action.payload}
        case "GET-CASH":
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}

export const addCashAC = () => {
    return {
        type: "ADD-CASH",
        payload: 3
    } as const
}

export const getCashAC = () => {
    return {
        type: "GET-CASH",
        payload: 3
    } as const
}
const store = createStore(reducer)
export type reducerType = ReturnType<typeof reducer>
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
