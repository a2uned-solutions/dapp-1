import React, { Component } from 'react';
import '../assets/styles/App.css';
import ContributionForm from '../components/ContributionForm';
import AccordionExampleStandard from '../components/static/Faq';
import { Icon } from 'semantic-ui-react';
import StatisticExampleEvenlyDivided from '../components/static/MainStats';
import TableExampleStriped from '../components/static/PayoutTable';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="app-header">
          <h1 className="app-title">CheersDApp <Icon name='beer' /></h1>
        </header>
        <div className="app-body">
          <div className="flex">
            <div className="col-50">
              <h2>Crowd Funding the Future</h2>
              <h3>Fundraising Gamified</h3>
              <p>Raising money to work on DApps full time. Learning & Contributing tutorials and open source code. All while giving back to our favorite charities and CheersDApp community.</p>
              <h4>The highest score every 100 games wins 40% of the ETH raised.</h4>
              <p>How to play</p>
              <p>How it works</p>
              <h2>Learn & Earn</h2>
              <p>Link to our tutorials</p>
              <p>Link to our open source code for others to learn from and use for their own fundraising.</p>
              <p>Created By A2uned Solutions</p>
            </div>
            <div className="col-50">
              <div className="begin-game">
                <ContributionForm initialGame={true} />
              </div>
              <h2>Getting started</h2>
              <AccordionExampleStandard/>
            </div>
          </div>
          <hr className="brd"/>
          <h2 className="tac">$ Earned Distribution</h2>
          <ul className="bar">
            <li className="w-40">
              <span className="fill">40% <span className="text">High Score</span></span>
            </li>
            <li className="w-40">
              <span className="fill">40% <span className="text"> Team</span></span>
            </li>
            <li className="w-10">
              <span className="fill">10% <span className="text">*Community</span></span>
            </li>
            <li className="w-10">
              <span className="fill">10% <span className="text">Charity</span></span>
            </li>
          </ul>
          <p>*Community - Spread among all implementations of CheersDApp. Must Link back to us though.</p>
          <hr className="brd"/>
          <div className="tac">
            <p>Every (100 or 1,000) games completed the total $ earned will be distributed accordingly via Ethereum Smart Contract</p>
            <p>This project is open sourced and we encourage everyone to use it. We are actively learning to work with blockchain technology and want you to learn with us and have the ability to earn $ at the same time.</p>
            <p>No need for a complicated ICO. Cheers your way to new beginnings!</p>
            <p>Buy Us A Beer</p>
          </div>
          <hr className="brd"/>
          <h2 className="tac">High Scores & Contributions Info</h2>
          <br/>
          <StatisticExampleEvenlyDivided/>
          <br/>
          <br/>
          <br/>
          <h2>Rounds Played and People Paid</h2>
          <p>Click the links to see the payments on the blockchain. <strong><a href="/">View the Smart Contract</a></strong></p>
          <TableExampleStriped/>
        </div>
        <hr className="brd"/>
        <br/>
        <p className="tac"><a href="https://www.stateofthedapps.com/">DApps in the wild (all pretty bad)</a> | Except for these guys <a href="https://loomx.io/">Loom Network</a> who built <a href="https://cryptozombies.io/">CryptoZombies</a> | <a href="https://www.cryptokitties.co/sign-in">CryptoKitties</a></p>
        <br/>
        <hr className="brd"/>
      </div>
    );
  }
}

export default Home;
