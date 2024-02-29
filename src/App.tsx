import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useAppSelector} from "./index";

function App() {

    const dispatch = useDispatch()

    const cash = useAppSelector(state => state.cash)

    const addCash = (cash:number) => {
        dispatch({type: 'ADD-CASH', payload: cash})
    }
    const getCash = (cash:number) => {
        dispatch({type: 'GET-CASH', payload: cash})
    }


    return (
        <div className="App">
            <span style={{fontSize: "20px"}}> {cash}</span>
            <div style={{display: "flex"}}>
                <button onClick={() => addCash(Number(prompt()))}>Deposit Money</button>
                <button onClick={() => getCash(Number(prompt()))}>Withdraw Money</button>
            </div>
        </div>
    );
}

export default App;
