// @flow
import * as React from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../store/store";
import {addCashAC, getCashAC} from "../store/cashReducer";
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import {Button,  Stack} from "@mui/material";


type Props = {};
export const Balance = (props: Props) => {

    const dispatch = useDispatch()
    const cash = useAppSelector(state => state.cash?.cash)

    const addCash = (cash: number) => {
        dispatch(addCashAC(cash))
    }
    const getCash = (cash: number) => {
        dispatch(getCashAC(cash))
    }
    return (
        <div>
            <Paper elevation={3}
                   sx={{
                       pt: 0.05,
                       width: 200,
                       height: "auto",
                       margin: " 0  auto",
                       bgcolor: 'secondary.light',
                       // '&:hover': {
                       //     bgcolor: 'primary.dark',
                       // },
                       color: 'secondary.contrastText',
                       mb: 2
                   }}>
                <h2>Balance</h2>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Box sx={{
                    gap: 1,
                    fontSize: 28,
                    pb: 1,
                    pt: 1,
                    width: "100%",
                    maxWidth: 140,
                    height: "auto",
                    bgcolor: 'secondary.dark',
                    margin: " 0  auto 20px",
                }}> {cash}</Box>
                <div style={{display: "flex"}}>


                </div>

            </Paper>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" justifyContent='center'>
                <Button
                    variant="outlined"
                    onClick={() => addCash(Number(prompt()))}
                    size="small"
                    color="secondary"

                >Deposit</Button>
                <Button variant="outlined"
                        size="small"
                        color="secondary" onClick={() => getCash(Number(prompt()))}>Withdraw
                </Button>
            </Stack>

        </div>

    );
};