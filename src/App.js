import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Components
import Navigation from './components/Navigation'
import Search from './components/Search'
import Domain from './components/Domain'

// ABIs
import ETHDaddy from './abis/ETHDaddy.json'

// Config
import config from './config.json';

function App() {

  const loadBlockchainData = async () => {
    const accounts = await window.ethereum.request({'method' : 'eth_requestAccounts'});
    // const account = ethers.utils.getAddress(accounts[0])
    console.log(accounts[0]);
  }

  useEffect(() => {
    loadBlockchainData();
  }, [])
  

  return (
    <div>

      <div className='cards__section'>

        <h2 className='cards__title'>Welcome to ETH Gator</h2>

      </div>

    </div>
  );
}

export default App;