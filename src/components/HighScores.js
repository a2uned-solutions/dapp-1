import React, { Component } from 'react';

class HighScores extends Component {
  render() {

    let allScores = this.props.allScores;
    allScores.sort(function(a, b){return b-a})

    return (
      <aside className="high-scores">
        <div className="current-funds-raised">
          <h3><span>42</span> / <span>100</span> Games Played</h3>
          <ul className="no-list">
            <li>1st Place Payout: <span className="value">0.622 ETH</span></li>
          </ul>
        </div>
        <h3>High Scores</h3>
        <ol>
          {allScores.map((value) => (
            <li key={value}>
              <strong>{value}</strong>
            </li>
          ))}
        </ol>
      </aside>
    );
  }
}

export default HighScores;
