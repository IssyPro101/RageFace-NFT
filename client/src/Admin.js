import React, { Component } from 'react'
import "./App.css";

class Admin extends Component {

  state = { reset: "" }

  componentDidMount = async () => {
  };

  setCost = async () => {
    try {
      let set = document.getElementById("setCost").value;
      const decimals = this.props.web3.utils.toBN(18);
      const tokenAmount = this.props.web3.utils.toBN(set); 
      const tokenAmountHex = '0x' + tokenAmount.mul(this.props.web3.utils.toBN(10).pow(decimals)).toString('hex');
  
      document.getElementById("pop-text").innerHTML = "Updating Fees...";
      document.getElementById("okay").style.display = "none";
      document.getElementById("top-modal").style.height = "55px";
      document.getElementById("top-modal").style.display = "block";
      await this.props.rageFace.methods.setCost(tokenAmountHex).send({from: this.props.account});
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("pop-text").innerHTML = "Cost Set";
      document.getElementById("okay").style.display = "block";
      
    } catch (error) {
      document.getElementById("pop-text").innerHTML = "Transaction Rejected";
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("okay").style.display = "block";
    }

  }

  okay = () => {
    document.getElementById("top-modal").style.display = "none";
  }

  setmaxMintAmount = async () => {
    try {
      let set = document.getElementById("setmaxMintAmount").value;
  
      document.getElementById("pop-text").innerHTML = "Setting Max Mint Amount...";
      document.getElementById("okay").style.display = "none";
      document.getElementById("top-modal").style.height = "55px";
      document.getElementById("top-modal").style.display = "block";
      await this.props.rageFace.methods.setmaxMintAmount(set).send({from: this.props.account});
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("pop-text").innerHTML = "Max Mint Amount Set";
      document.getElementById("okay").style.display = "block";
    } catch (error) {
      document.getElementById("pop-text").innerHTML = "Transaction Rejected";
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("okay").style.display = "block";
    }
  }

  setStartDate = async () => {
    try {
      let set = document.getElementById("setStartDate").value;
  
      document.getElementById("pop-text").innerHTML = "Setting Start Date...";
      document.getElementById("okay").style.display = "none";
      document.getElementById("top-modal").style.height = "55px";
      document.getElementById("top-modal").style.display = "block";
      await this.props.rageFace.methods.setStartDate(set).send({from: this.props.account});
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("pop-text").innerHTML = "Start Date Set";
      document.getElementById("okay").style.display = "block";
    } catch (error) {
      document.getElementById("pop-text").innerHTML = "Transaction Rejected";
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("okay").style.display = "block";
    }
  }

  setBaseURI = async () => {
    try {
      let set = document.getElementById("setBaseURI").value;
  
      document.getElementById("pop-text").innerHTML = "Setting Base URI...";
      document.getElementById("okay").style.display = "none";
      document.getElementById("top-modal").style.height = "55px";
      document.getElementById("top-modal").style.display = "block";
      await this.props.rageFace.methods.setBaseURI(set).send({from: this.props.account});
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("pop-text").innerHTML = "Base URI Set.";
      document.getElementById("okay").style.display = "block";
    } catch (error) {
      document.getElementById("pop-text").innerHTML = "Transaction Rejected";
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("okay").style.display = "block";
    }
  }

  setBaseExtension = async () => {
    try {
      let set = document.getElementById("setBaseExtension").value;
  
      document.getElementById("pop-text").innerHTML = "Setting Base Extension...";
      document.getElementById("okay").style.display = "none";
      document.getElementById("top-modal").style.height = "55px";
      document.getElementById("top-modal").style.display = "block";
      await this.props.rageFace.methods.setBaseExtension(set).send({from: this.props.account});
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("pop-text").innerHTML = "Base Extension Set";
      document.getElementById("okay").style.display = "block";
    } catch (error) {
      document.getElementById("pop-text").innerHTML = "Transaction Rejected";
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("okay").style.display = "block";
    }
  }

  pause = async () => {
    try {
      let set = document.getElementById("pause").value;
  
      document.getElementById("pop-text").innerHTML = "Setting Pause State...";
      document.getElementById("okay").style.display = "none";
      document.getElementById("top-modal").style.height = "55px";
      document.getElementById("top-modal").style.display = "block";
      await this.props.rageFace.methods.pause(set).send({from: this.props.account});
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("pop-text").innerHTML = "Pause State Set";
      document.getElementById("okay").style.display = "block";
    } catch (error) {
      
      document.getElementById("pop-text").innerHTML = "Transaction Rejected";
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("okay").style.display = "block";
    }
  }
 
  whitelistUser = async () => {
    try {
      let set = document.getElementById("whitelistUser").value;
  
      document.getElementById("pop-text").innerHTML = "Whitelisting User...";
      document.getElementById("okay").style.display = "none";
      document.getElementById("top-modal").style.height = "55px";
      document.getElementById("top-modal").style.display = "block";
      await this.props.rageFace.methods.whitelistUser(set).send({from: this.props.account});
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("pop-text").innerHTML = "User Whitelisted";
      document.getElementById("okay").style.display = "block";
    } catch (error) {
      document.getElementById("pop-text").innerHTML = "Transaction Rejected";
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("okay").style.display = "block";
    }
  }
 
  removeWhitelistUser = async () => {
    try {
      let set = document.getElementById("removeWhitelistUser").value;
  
      document.getElementById("pop-text").innerHTML = "Removing User From Whitelist...";
      document.getElementById("okay").style.display = "none";
      document.getElementById("top-modal").style.height = "55px";
      document.getElementById("top-modal").style.display = "block";
      await this.props.rageFace.methods.removeWhitelistUser(set).send({from: this.props.account});
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("pop-text").innerHTML = "User Removed";
      document.getElementById("okay").style.display = "block";
    } catch (error) {
      document.getElementById("pop-text").innerHTML = "Transaction Rejected";
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("okay").style.display = "block";
    }
  }

  withdraw = async () => {
    try {  
      document.getElementById("pop-text").innerHTML = "Withdrawing...";
      document.getElementById("okay").style.display = "none";
      document.getElementById("top-modal").style.height = "55px";
      document.getElementById("top-modal").style.display = "block";
      await this.props.rageFace.methods.withdraw().send({from: this.props.account});
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("pop-text").innerHTML = "Withdrawn";
      document.getElementById("okay").style.display = "block";
    } catch (error) {
      document.getElementById("pop-text").innerHTML = "Transaction Rejected";
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("okay").style.display = "block";
    }
  }

  render() {
      return (
        <div className="App">
            <div class="popup-modal" id="top-modal">
              <p id="pop-text"></p>
              <button class="change-button" id="okay" onClick={this.okay}>Okay</button>
            </div>
            <h1>Admin Dashboard</h1>
            <h2>{this.props.withdraw} ETH is available to withdraw</h2>
            <button id="mair" class="change-button" onClick={() => this.withdraw()}>Withdraw</button>
            <div id="adminFunctions">
              <input id="setCost" class="change" placeholder="New Cost in Ether"></input>
              <button id="mair" class="change-button" onClick={() => this.setCost()}>Set Cost</button>
              <br/>
              <input id="setmaxMintAmount" class="change" placeholder="New Max Mint Amount"></input>
              <button id="mair" class="change-button" onClick={() => this.setmaxMintAmount()}>Set Max Mint Amount</button>
              <br/>
              <input id="setBaseURI" class="change" placeholder="New Base URI"></input>
              <button id="mair" class="change-button" onClick={() => this.setBaseURI()}>Set Base URI</button>
              <br/>
              <input id="setBaseExtension" class="change" placeholder="New Base Extension"></input>
              <button id="mair" class="change-button" onClick={() => this.setBaseExtension()}>Set Base Extension</button>
              <br/>
              <input id="pause" class="change" placeholder="New Pause State"></input>
              <button id="mair" class="change-button" onClick={() => this.pause()}>Pause Minting</button>
              <br/>
              <input id="setStartDate" class="change" placeholder="Unix Timestamp"></input>
              <button id="mair" class="change-button" onClick={() => this.setStartDate()}>Set Start Date</button>
              <br/>
              <input id="whitelistUser" class="change" placeholder="User Address"></input>
              <button id="mair" class="change-button" onClick={() => this.whitelistUser()}>Whitelist User</button>
              <br/>
              <input id="removeWhitelistUser" class="change" placeholder="User Address"></input>
              <button id="mair" class="change-button" onClick={() => this.removeWhitelistUser()}>Remove Whitelist User</button>
              <br/>
            </div>
        </div>
      );
  }
}

export default Admin;
