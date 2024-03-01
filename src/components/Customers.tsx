// @flow
import * as React from 'react';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {useAppSelector} from "../store/store";
import {useDispatch} from "react-redux";
import {addCustomerAC, removeCustomerAC} from "../store/customerReducer";
import {Button} from "@mui/material";

type Props = {};
export const Customers = (props: Props) => {
    const dispatch = useDispatch()
    const customers = useAppSelector(state => state.customers.customers)

    const onAddHandler = () => {
        const customer = prompt();
        customer
            ?
            addCustomer(customer)
            :
            alert("Enter the Customer Name")
    }
    const addCustomer = (name: string) => {

        dispatch(addCustomerAC(name))
    }

    const removeCustomer = (customerId: string) => {

        dispatch(removeCustomerAC(customerId))
    }
    return (
        <div>
            <Paper elevation={3}
                   sx={{
                       pt: 0.05,
                       width: 200,
                       minHeight: 100,
                       height: "100%",
                       margin: " 0  auto",
                       bgcolor: 'secondary.light',
                       // '&:hover': {
                       //     bgcolor: 'primary.dark',
                       // },
                       color: 'secondary.contrastText',
                       mb: 2
                   }}>
                <h2>Customers List</h2>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Box sx={{
                    gap: 1,
                    fontSize: 18,
                    pb: 1,
                    pt: 1,
                    width: "100%",
                    maxWidth: 140,
                    height: "auto",
                    bgcolor: 'secondary.dark',
                    margin: " 0  auto 20px",
                }}>
                    {
                        customers.length > 0
                            ?
                            <div>
                                {customers.map(customer =>
                                    <div key={customer.customerId}
                                         onClick={() => removeCustomer(customer.customerId)}>{customer.name}</div>
                                )}
                            </div>
                            :
                            <div style={{fontSize: '2rem', marginTop: '1rem'}}>
                                No clients yet
                            </div>
                    }</Box>

            </Paper>
            <Button variant="outlined"
                    size="small"
                    color="secondary" onClick={() => onAddHandler()}>Add Client</Button>
        </div>


    );
};