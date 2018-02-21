// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import VotingTable from './VotingTable';
import fetchContracts from '../helpers/fetchContracts';
import Voting from '../helpers/Voting';
import CheersDapp from '../helpers/CheersDapp';
// import CheersApp from './CheersApp';

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
      game: null
    };
  }

  async componentDidMount(): any {
    const { contracts } = await fetchContracts(this.props.network, [ 'Voting', 'CheersDapp' ]);
    const poll = new Voting(contracts.Voting);
    await poll.initCandidateList();
    const votes = await poll.fetchCandidateVotes();

    const game = new CheersDapp(contracts.CheersDapp);

    this.setState({
      votes,
      poll,
      game,
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
        <div className="game-link">
          <Link to="/home">
            <button className="btn-large">Go To CheersDapp</button>
          </Link>
        </div>
        <div className="example">
          <h3>Working Example:</h3>
        {this.state.votes ? (
          <VotingTable
            candidateList={this.state.poll.candidateList}
            votes={this.state.votes}
            voteHandler={this.voteHandler}
            votePending={this.state.votePending}
          />
        ) : null}
        </div>
      </Container>
    );
  }
}

export default App;
