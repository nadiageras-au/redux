import React from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {useAppSelector} from "./store/store";
import {addCustomerAC, removeCustomerAC} from "./store/customerReducer";
import Divider from '@mui/material/Divider';

import {Balance} from "./components/Balance";
import Box from "@mui/material/Box";
import {Customers} from "./components/Customers";

function App() {

    // const dispatch = useDispatch()

    // const cash = useAppSelector(state => state.cash?.cash)
    // const customers = useAppSelector(state => state.customers.customers)

    // const addCash = (cash: number) => {
    //     dispatch(addCashAC(cash) )
    // }
    // const getCash = (cash: number) => {
    //     dispatch(getCashAC(cash) )
    // }

    // const onAddHandler = () => {
    //     const customer = prompt();
    //     customer
    //         ?
    //         addCustomer(customer)
    //         :
    //         alert("Enter the Customer Name")
    // }
    // const addCustomer = (name: string) => {
    //
    //     dispatch(addCustomerAC(name))
    // }
    //
    // const removeCustomer = (customerId: string) => {
    //
    //     dispatch(removeCustomerAC(customerId))
    // }


    return (
        // <div className="App">
        <Box
            sx={{
                paddingTop: "150px",
                display: 'grid',
                gridAutoColumns: '1fr',
                gap: 1,
                textAlign: 'center'
            }}
        >
            <Balance/>
            {/*<span style={{fontSize: "20px"}}> {cash}</span>*/}
            {/*<div style={{display: "flex"}}>*/}
            {/*    <button onClick={() => addCash(Number(prompt()))}>Deposit Money</button>*/}
            {/*    <button onClick={() => getCash(Number(prompt()))}>Withdraw Money</button>*/}
            {/*    <button onClick={() => onAddHandler()}>Add Client</button>*/}
            {/*</div>*/}
            <Divider orientation="horizontal" flexItem />
            {/*<button onClick={() => onAddHandler()}>Add Client</button>*/}
            {/*{*/}
            {/*    customers.length > 0*/}
            {/*        ?*/}
            {/*        <div>*/}
            {/*            {customers.map(customer =>*/}
            {/*                <div key={customer.customerId}*/}
            {/*                     onClick={() => removeCustomer(customer.customerId)}>{customer.name}</div>*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*        :*/}
            {/*        <div style={{fontSize: '2rem', marginTop: '1rem'}}>*/}
            {/*            No clients yet*/}
            {/*        </div>*/}
            {/*}*/}
            <Customers/>
        </Box>
    );
}

export default App;
