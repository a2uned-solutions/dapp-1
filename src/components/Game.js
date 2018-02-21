import React, { Component } from 'react';
import _ from 'lodash';
import Coin from './Coin';

class Game extends Component {

  state = {
    gameStatus: 'new',
    remainingSeconds: this.props.initialSeconds,
    selectedIds: [],
    score: this.props.score,
    sequence: []
  }

  challengeNumbers = Array
    .from({ length: this.props.challengeSize })
    .map((value, index) => {  return index });

  componentDidMount() {
    if (this.props.autoPlay) {
      this.startGame();
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  startGame = () => {
    const newNumbers = _.shuffle(this.challengeNumbers);
    this.setState({ gameStatus: 'playing', sequence: newNumbers }, () => {
      this.intervalId = setInterval(() => {
        this.setState((prevState) => {
          const newRemainingSeconds = prevState.remainingSeconds - 1;
          if (newRemainingSeconds === 0) {
            clearInterval(this.intervalId);
            return { gameStatus: 'lost', remainingSeconds: 0 };
          }
          return { remainingSeconds: newRemainingSeconds };
        });
      }, 1000);
    });
  }

  selectCoin = (numberValue) => {

    if (this.state.gameStatus !== 'playing') {
      clearInterval(this.intervalId);
      return;
    }

    if (numberValue !== this.state.selectedIds.length) {
      return this.setState(() => ({
        gameStatus: 'lost',
        selectedIds: [],
      }), clearInterval(this.intervalId));
    }

    if (numberValue < (this.challengeNumbers.length - 1)) {
      return this.setState((prevState) => ({
        gameStatus: 'playing',
        selectedIds: [...prevState.selectedIds, numberValue],
        score: (this.state.score + 1)
      }));
    }

    if (numberValue === (this.challengeNumbers.length - 1)) {
      const scoreLevelTotal = ((this.state.score + 1) * this.state.remainingSeconds)
      this.props.updateScore(scoreLevelTotal);
      return this.setState(() => ({
        gameStatus: 'won',
        score: scoreLevelTotal
      }), clearInterval(this.intervalId));
    }
  }

  render() {
    const { gameStatus, remainingSeconds, sequence } = this.state;
    // console.log(gameStatus)
    return (
      <section className="game">
        <ul className="stats-actions no-list">
          <li className="level">
            <strong>Level: </strong>
            <span>{this.props.level}</span>
          </li>
          <li className="score">
            <strong>Score: </strong>
            <span>{this.state.score}</span>
          </li>
          <li className="time">
            <strong>Time: </strong>
            <span className="timer-value">{remainingSeconds}</span>
          </li>
        </ul>
        <div className="challenge">
          {gameStatus === 'new' && (
            <div className="intro">
              <h2>Click on the coins in the order they appear</h2>
              <p>Make it quick though, you only have <strong>10 seconds</strong> each round.</p>
              <p>If you lose a round you will have to contribute more Ether to play again</p>
              <p>Correct Coins Picked <strong>x</strong> Seconds Left <strong>=</strong> Total Score</p>
              <button onClick={this.startGame}>Start</button>
            </div>
          )}
          {gameStatus === 'won' && (
            <div className="next-game-action won">
              <div className="message">
                <h2>You Won!</h2>
                <h3>Score: {this.state.score}</h3>
                <h4>Next Level: {parseInt(this.props.level + 1, 10)}</h4>
                <button onClick={this.props.onNextLevel}>Level Up Winner</button>
              </div>
            </div>
          )}
          {gameStatus === 'lost' && (
            <div className="next-game-action lost">
              <div className="message">
                <h2>You Lost!</h2>
                <h3>Score: {this.state.score}</h3>
                <button onClick={this.props.onPlayAgain}>Play Again Loser</button>
                <small>Will need to deposit more ETH</small>
              </div>
            </div>
          )}
          {sequence.map((value, index) => (
            <Coin
              key={value}
              id={index}
              value={gameStatus === 'new' ? '?' : value}
              onClick={this.selectCoin}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Game