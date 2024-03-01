import {legacy_createStore as createStore, combineReducers} from "redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";


const RootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})
export const store = createStore(RootReducer)
export type reducerType = ReturnType<typeof RootReducer>
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
