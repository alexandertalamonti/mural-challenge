import './App.css';
import React, {useState} from 'react';
import About from './pages/About';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ConnectCard from './components/Connectcard';
import Multisig from './pages/Multisig';
import { Grid } from '@mui/material';
import { ethers } from 'ethers';



function App() {

  // variables and their related setters
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connected, setConnected] = useState(false);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);

  const connectWalletHandler = () => {
      // does user have metamask installed?
      if (window.ethereum) {
          // metamask is here
          window.ethereum.request({method: 'eth_requestAccounts'})
          .then(result => {
              accountChangedHandler(result[0]);
              setConnected(true);
              setShowCard(false);
          })
      } else {
          alert('Please install Metamask or use WalletConnect');
      }
  }

  async function doTransaction(address, amt) {
    if (amt <= userBalance) {

      const amount = ethers.parseEther(amt);

      const tx = {
        to: address,
        value: amount,
        gasLimit: 21000,
        gasPrice: ethers.parseUnits('50', 'gwei'),
      };

      console.log(tx)
      const txResponse = await signer.sendTransaction(tx);

      console.log(txResponse)

    };
  }

  const accountChangedHandler = (newAccount) => {
      setDefaultAccount(newAccount);
      getUserBalance(newAccount);
      updateEthers();
  }

  const getUserBalance = (address) => {
      window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']})
      .then(balance => {
        setUserBalance(ethers.formatEther(balance));
      });
  }

  async function updateEthers() {
    let tempProvider = new ethers.BrowserProvider(window.ethereum);
    setProvider(tempProvider);

    let tempSigner = await tempProvider.getSigner();
    setSigner(tempSigner);

  }

  const [showCard, setShowCard] = React.useState(false);
  
  const onShowCard = () => {
    setShowCard(!showCard);
  }

  return (
    <Grid container direction="column" justifyContent="flex-end" alignItems="center">
      <Grid item xs>
        <Navbar onShowCard={onShowCard} connected={connected}/>
      </Grid>
      <Grid item xs>
        <Routes>
          <Route exact path='/' element={<Home account={defaultAccount} accountBal={userBalance} sendTransaction={doTransaction}/>}/>
          <Route exact path='/multisig' element={<Multisig />}/>
        </Routes>
      </Grid>
      {showCard && <ConnectCard connectMetaMaskWalletHandler={connectWalletHandler} />}
    </Grid>
  );
}

export default App;
