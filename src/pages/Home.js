import { Button, Grid } from '@mui/material';
import React, { useState } from 'react'
import TransactionTable from '../components/TransactionTable';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const Home = ({account, accountBal, sendTransaction}) => {
    const [address, setAddress] = useState(null);
    const [amt, setAmt] = useState(0);

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }

    const handleAmtChange = (event) => {
        setAmt(event.target.value);
    }
    
    const onSend = () => {
        sendTransaction(address, amt);
    }
    
    return (
        <Grid>
            <h2>Dummy Text</h2>
            <h2>Account: {account}</h2>
            <h2>Balance: {accountBal} ETH</h2>
            
            <Stack direction='row' spacing={4}>
            <h2>Send Funds: </h2>
            <TextField
            required
            id="outlined-required"
            label="Address"
            onChange={handleAddressChange}
            />
            <TextField
            id="outlined-number"
            label="Amount"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            onChange={handleAmtChange}
            />
            <Button variant='contained' onClick={onSend}>Send</Button>
            </Stack>
            <h2>Transactions:</h2>
            <TransactionTable />
        </Grid>
    )
}

export default Home;