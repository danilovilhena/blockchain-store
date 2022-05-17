import Web3 from "web3";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Admin from "./routes/Admin";
import Home from "./routes/Home";
import Confirmation from "./routes/Confirmation";
import SearchResults from "./routes/SearchResults";
import Products from "./contracts/Products.json";

const App = () => {
  const CONTRACT_ADDRESS = "0x0Adc2B012B8E358e59f395a10b635a2D199CCD8D";
  const INITIAL_ACCOUNT = "0x7468a277740F627157eA95b545ce6372d3446152";
  const [web3Provider, setWeb3Provider] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [isConnected, setIsConnected] = useState(null);
  const [account, setAccount] = useState(INITIAL_ACCOUNT);
  const [contract, setContract] = useState(null);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  const connectWeb3 = async () => {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setIsConnected(!!accounts.length);
    } catch (error) {
      setError(error);
    }
  }

  const initWeb3 = () => {
    if (window.ethereum) setWeb3Provider(window.ethereum);
    else if (window.web3) setWeb3Provider(window.web3.currentProvider);
    else setWeb3Provider(new Web3.providers.HttpProvider('http://localhost:7545'));

    setWeb3(new Web3(web3Provider));
  }

  const initContract = async () => {
    let products = JSON.parse(JSON.stringify(Products));
    let contract = await new web3.eth.Contract(products.abi, CONTRACT_ADDRESS, {
      from: INITIAL_ACCOUNT, // default from address
      gasPrice: '20000000000' // default gas price
    });
    contract.setProvider(web3Provider);

    await setContract(contract);

    await contract.methods.getProducts().call(function (err, res) {
      if (err) {
        console.log("An error occured: ", err);
        return
      }
      setProducts(res)
    });
  }

  const addListeners = () => {
    const accountWasChanged = (accounts) => {
      if(accounts.length == 0) clearAccount();
      setAccount(accounts[0]);
    }

    const clearAccount = () => {
      setAccount(null);
      setIsConnected(false);
    }

    const getAccount = async () => {
      const changedAccounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(changedAccounts[0]);
    }

    window.ethereum.on('accountsChanged', accountWasChanged);
    window.ethereum.on('connect', getAccount);
    window.ethereum.on('disconnect', clearAccount);
  }

  useEffect(initWeb3, []);
  useEffect(() => {
    if(!!web3 && !!web3Provider) {
      addListeners(); 
      initContract();
    } 
  }, [web3Provider]);

  return (<>
  {!document.location.pathname.startsWith('/admin') && <Header initFunction={connectWeb3} isConnected={isConnected}/>}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/search" element={<SearchResults />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/confirmation" element={<Confirmation />} />
  </Routes>
  </>)
}

export default App;
