import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import Stack from '@mui/material/Stack'
import WalletIcon from '@mui/icons-material/Wallet';
import MasksIcon from '@mui/icons-material/Masks';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const ConnectCard = ({connectMetaMaskWalletHandler}) => {
  const cardAttributes = { minWidth: 300, minHeight: 150, position: "absolute", top: "20%", zIndex: 100, background: "#1f1f1f"}

  return (
    <Card sx={ cardAttributes }>
      <CardContent>
        <Typography variant="h5" color="white" gutterBottom>
          Connect Wallet
        </Typography>
        <Stack direction="row" spacing={4} justifyContent="center" alignItems="center" divider={<Divider sx={{background:"white"}} orientation="vertical" flexItem />}>
          <IconButton sx={{color:'white'}} size="medium" aria-label="MetaMask" onClick={connectMetaMaskWalletHandler}>
            MetaMask
          </IconButton>
          <IconButton sx={{color:'white'}} size="medium" aria-label="WalletConnect" onClick={()=>{alert("Please use Metamask right now.")}}>
            WalletConnect
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ConnectCard;