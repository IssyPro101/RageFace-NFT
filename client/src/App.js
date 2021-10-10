import React from "../node_modules/react";
import Web3 from "web3";
import "./App.css";
import "./index.css";
import Main from "./Main";
import Admin from "./Admin";
import RageFace from './contracts/TestRageFace.json'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/**
 * @App Build Decentralized Art Market using ERC-721
 * @Util initail App build main class
 * @Book Learn Ethereum
 * @author brian wu
 */
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class App extends React.Component {

  state = { web3: null, account: "", networkId: null, airdropInstance: null, ipfs: null, nfts: [], airdropEnd: null, nftsA: null, nftsS: null, loading:false, connected: false }

  componentDidMount = async () => {
    let account = "";
    if (window.ethereum) {
      account = await window.ethereum.request({ method: 'eth_accounts' });
      account = account[0]
    }
    else if (window.web3) {
      account = await window.web3.getAccounts();
      account = account[0]
    }

    if (account) {
      this.setState({loading: true})
      this.setState({connected: true})
      await this.loadWeb3()
      await this.loadBlockchainData()
    }

  }

  connectWallet = async () => {
    await this.loadWeb3()
    await this.loadBlockchainData()
    window.location.reload()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    // Load account
    let account = await window.web3.eth.getAccounts();
    account = account[0]
    this.setState({account: account.toLowerCase()})

    const networkId = await web3.eth.net.getId();
    const deployedRageFace = RageFace.networks[networkId];
    const rageFace = new web3.eth.Contract(
      RageFace.abi,
      deployedRageFace && deployedRageFace.address,
    );

    let totalSupply = await rageFace.methods.totalSupply().call();

    let maxSupply = await rageFace.methods.maxSupply().call();

    let maxMint = await rageFace.methods.maxMintAmount().call();

    let rawCost = await rageFace.methods.cost().call();
    let cost = rawCost / 10 ** 18

    let withdraw = await web3.eth.getBalance(rageFace._address)


    this.setState({ web3, rageFace, networkId, ipfs, loading: false, totalSupply, withdraw, maxSupply, maxMint, cost, rawCost})

  }

  render() {
    if (!this.state.loading) {
      return (
        <Router>
          <Switch>
            <div>
              <nav className="navbar navbar-light fixed-top flex-md-nowrap">
                <div id="anav">
                  <a
                      className="navbar-brand col-sm-3 col-md-2 mr-0"
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                  <img class="App-logo" src="https://bafybeighnblecngomo2wgbjcmuavgv5xrlhbbx5ursm7gb5kcgijzspgs4.ipfs.infura-ipfs.io/" alt="app-logo"/>
                  <h2 id="first-title">Rage Face</h2>
                  </a>

                </div>
                <div id='user-info'>
                    {this.state.connected ? <div><small className='text-secondary'>
                                                <small id='account'>{this.state.account}</small>
                                            </small>
                                            <small className='text-secondary'>
                                                <small id='account-short'>{this.state.account.substring(0, 7)}...</small>
                                            </small></div> :
                <button class="nav-button" onClick={this.connectWallet}>Connect</button>}
                </div>
              </nav>
              <Route exact path='/'>
                  <Main web3={this.state.web3} account={this.state.account} rageFace={this.state.rageFace} networkId={this.state.networkdId} ipfs={this.state.ipfs} totalSupply={this.state.totalSupply} maxSupply={this.state.maxSupply} maxMint={this.state.maxMint} cost={this.state.cost} rawCost={this.state.rawCost} withdraw={this.state.withdraw} />
              </Route>
              <Route exact path='/admin'>
                  <Admin web3={this.state.web3} account={this.state.account} rageFace={this.state.rageFace} networkId={this.state.networkdId} ipfs={this.state.ipfs} totalSupply={this.state.totalSupply} maxSupply={this.state.maxSupply} maxMint={this.state.maxMint} cost={this.state.cost} rawCost={this.state.rawCost} withdraw={this.state.withdraw} />
              </Route>
            </div>
          </Switch>
        </Router>
      );      
    } else {
        return(<div class="loader"></div>);
    }

  }
}
export default App;