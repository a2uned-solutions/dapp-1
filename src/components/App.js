// @flow

import React from 'react';
import { Container } from 'reactstrap';
import VotingTable from './VotingTable';
import fetchContracts from '../helpers/fetchContracts';
import Voting from '../helpers/Voting';
import Cheers from '../helpers/Cheers';
import CheersApp from './CheersApp';

import reactLogo from '../assets/images/reactLogo.svg';
import ethereumLogo from '../assets/images/ethereumLogo.svg';
import btc from '../assets/images/crypto-icons/color/btc.svg';
import ltc from '../assets/images/crypto-icons/color/ltc.svg';
import eth from '../assets/images/crypto-icons/color/etc.svg';
import doge from '../assets/images/crypto-icons/color/doge.svg';
import bts from '../assets/images/crypto-icons/color/bts.svg';

class App extends React.Component {
  state: {
    votePending: boolean,
    votes: any,
    poll: any,
  };

  constructor(props: { network: string }) {
    super(props);
    this.state = {
      votePending: false,
      votes: null,
      poll: null,
    };
  }

  async componentDidMount(): any {
    const { contracts } = await fetchContracts(this.props.network, ['Voting']);
    const poll = new Voting(contracts.Voting);
    await poll.initCandidateList();
    const votes = await poll.fetchCandidateVotes();
    this.setState({
      votes,
      poll,
    });
  }

  voteHandler = (name: string) => async () => {
    this.setState({ votePending: true });
    const votes = await this.state.poll.voteForCandidate(name);
    this.setState({ votes, votePending: false });
  };

  render() {
    return (
      <Container>
        <header>
          <h1>A2uned First DApp</h1>
          <div className="logos">
            <img src={reactLogo} alt="reactLogo" /> +
            <img src={ethereumLogo} alt="reactLogo" />
          </div>
        </header>
        {this.state.votes ? (
          <VotingTable
            candidateList={this.state.poll.candidateList}
            votes={this.state.votes}
            voteHandler={this.voteHandler}
            votePending={this.state.votePending}
          />
        ) : null}
        {/* TODO: Convert  */}
        {/*<Cheers/>*/}
        <div>
          <ul className="no-list coin-list">
            <li>
              <img src={btc} alt={''} />
            </li>
            <li>
              <img src={ltc} alt={''} />
            </li>
            <li>
              <img src={eth} alt={''} />
            </li>
            <li>
              <img src={doge} alt={''} />
            </li>
            <li>
              <img src={bts} alt={''} />
            </li>
          </ul>
        </div>
      </Container>
    );
  }
}

export default App;
