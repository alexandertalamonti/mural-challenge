import React, {useState} from 'react'

const WalletCard = () => {

    // variables and their related setters
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    const connectWalletHandler = () => {
        // does user have metamask installed?
        if (window.ethereum) {
            // metamask is here
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result => {
                accountChangeDHandler(result[0]);
            })
        } else {
            setErrorMessage('Please install Metamask or use WalletConnect');
        }
    }

    const accountChangeDHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getUserBalance(newAccount);
    }

    const getUserBalance = (address) => {
        
    }

    return (
        <div>
            <h4>{"Conection to MetaMask using ether.js method"}</h4>
            <button onClick={connectWalletHandler}>{connButtonText}</button>
            <div className='accountDisplay'>
                <h3>Address: {defaultAccount}</h3>
            </div>
            <div className='balanceDisplay'>
                <h3>Balance: {userBalance}</h3>
            </div>
            {errorMessage}
        </div>
    )
}

export default WalletCard;