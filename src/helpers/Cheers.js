import Promise from 'bluebird';
import Web3 from 'web3';
import _ from 'lodash';

const { asciiToHex, hexToAscii } =
  // web3 1.X
  Web3.utils || {
    // web3 0.20.X
    asciiToHex: Web3.prototype.fromAscii,
    hexToAscii: Web3.prototype.toAscii,
  };

export default class Cheers {
  constructor(contract) {
    this.contract = contract;

    const getTransaction = Promise.promisify(
      this.contract._eth.getTransaction,
      { context: this.contract._eth },
    );

    // TODO: Convert the web3 logic in CheersApp into this syntax. See ./Voting.js as an example
    this.methods = {
      getTransaction,
    };
  }
}
