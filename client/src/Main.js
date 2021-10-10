import React, { Component } from "react";

import "./App.css";


class Main extends Component {

  state = { amount: 15 };

  componentDidMount = async () => {

  };

  mint = async () => {
    try {
      document.getElementById("pop-text").innerHTML = "Minting...";
      document.getElementById("okay").style.display = "none";
      document.getElementById("top-modal").style.height = "70px";
      document.getElementById("top-modal").style.display = "block";
      await this.props.rageFace.methods.mint(this.props.account, document.getElementById("bar").value).send({from: this.props.account, value:document.getElementById("bar").value*this.props.rawCost})
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("pop-text").innerHTML = "Minted";
      document.getElementById("okay").style.display = "block";
    } catch (error) {
      document.getElementById("pop-text").innerHTML = "Transaction Rejected";
      document.getElementById("top-modal").style.height = "125px";
      document.getElementById("okay").style.display = "block";
    }

  }

  changeVal = () => {
    this.setState({amount: document.getElementById("bar").value})
  }

  okay = () => {
    window.location.reload()
  }

  render() {
      return (
        <div className="App">
          <div class="popup-modal" id="top-modal">
            <p id="pop-text"></p>
            <button class="change-button" id="okay" onClick={this.okay}>Okay</button>
          </div>
          <div id="main">
            <h1>{this.props.totalSupply} / {this.props.maxSupply} minted so far.</h1>
            <h3 id="cost">The cost of 1 RageFace is {this.props.cost} ether</h3>
            <input id="bar" type="range" min="0" max="15" onChange={this.changeVal} /><br/>
            <button class="mint" id="mint" onClick={this.mint}>Mint {this.state.amount}</button>

            <h1>About RageFaces</h1>
            <p id="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Sodales ut eu sem integer vitae justo. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Dictum at tempor commodo ullamcorper a lacus.Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Enim diam vulputate ut pharetra. Eu volutpat odio facilisis mauris sit amet. Porta nibh venenatis cras sed felis eget velit. Donec ultrices tincidunt arcu non sodales neque sodales. Et molestie ac feugiat sed lectus vestibulum mattis.</p>
          </div>

        </div>
      );
  }
}

export default Main;
