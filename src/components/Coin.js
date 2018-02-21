import React from 'react';
import _ from 'lodash';

import btc from '../assets/images/crypto-icons/color/btc.svg';
import ltc from '../assets/images/crypto-icons/color/ltc.svg';
import eth from '../assets/images/crypto-icons/color/etc.svg';
import doge from '../assets/images/crypto-icons/color/doge.svg';
import xrp from '../assets/images/crypto-icons/color/xrp.svg';
import eos from '../assets/images/crypto-icons/color/eos.svg';

class Coin extends React.PureComponent {

  state = { classes: 'coin' }

  componentDidMount() {
    this.handleClassDisplay()
  }

  handleClick = () => {
    this.props.onClick(this.props.value);
  };

  handleClassDisplay = () => {
    const timer = ((this.props.value + 1) * 350);
    setTimeout(() => {
      this.setState({
        classes: 'coin active'
      })
    }, timer)
  };

  render() {
    const coinImages = [ btc, ltc, eth, doge, xrp, eos ]
    const coinImage = _.sample(coinImages)
    return (
      <div
        className={this.state.classes}
        onClick={this.handleClick}
      >
        <img src={coinImage} alt={''} />
        <span className="value">Value: {this.props.value}</span>
        <span className="id"> ID/Index: {this.props.id}</span>
      </div>
    );
  }
}

export default Coin