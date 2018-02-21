import React, { Component } from 'react';
import Game from './Game';
import HighScores from './HighScores';

class GameContainer extends Component {
  state = {
    gameId: 1,
    level: 1,
    coins: 3,
    score: 0,
    allScores: [ 100 ]
  };

  updateScore = (prevScore) => {
    this.setState({ score: prevScore })
  };

  nextGame = () =>
    this.setState((prevState) => ({
      gameId: prevState.gameId + 1,
      level: prevState.level + 1,
      coins: prevState.coins + 1
    }));

  resetGame = () =>
    this.setState((prevState) => ({
      gameId: prevState.gameId + 2,
      level: 1,
      coins: 3,
      score: 0,
      allScores: [ ...prevState.allScores, prevState.score ]
    }));

  render() {
    return (
      <div className="app-body">
        <Game
          key={this.state.gameId}
          autoPlay={this.state.gameId > 1}
          level={this.state.level}
          score={this.state.score}
          allScores={this.state.allScores}
          challengeSize={this.state.coins}
          initialSeconds={10}
          onPlayAgain={this.resetGame}
          onNextLevel={this.nextGame}
          updateScore={this.updateScore}
        />
        <HighScores allScores={this.state.allScores} />
      </div>
    );
  }
}

export default GameContainer