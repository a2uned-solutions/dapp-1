import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class ContributionForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      volume: 0.001,
      fontSize: 10
    }
  }

  handleOnChange = (value) => {

    let fontSize = (value * 1000);
    Math.round(fontSize)

    this.setState({
      volume: value,
      fontSize: fontSize
    })
  }

  render() {
    let { volume, fontSize } = this.state
    let { initialGame } = this.props

    return (
      <div>
        {initialGame ? (
          <h3>How much ETH would you like to contribute?</h3>
        ) : (
          <h3>Drink another round?</h3>
        )}
        <i className="fa fa-beer" style={{ 'fontSize': fontSize }}></i>
        <Slider
          min={0.001}
          max={1.0}
          step={0.001}
          value={volume}
          labels={{ 0.001: 'Min', 1: 'Max'}}
          orientation="horizontal"
          onChange={this.handleOnChange}
        />
        <div className="total-contribution"><strong>{volume}</strong></div>
        <p>
          <Link to="/game">
            <button className="btn-large">Play Game</button>
          </Link>
        </p>
      </div>
    )
  }
}

export default ContributionForm
