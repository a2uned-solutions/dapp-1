const deployInfo = require('../helpers/deployInfo');
const Web3 = require('web3');
const CheersDapp = artifacts.require('Cheers');
const asciiToHex = (Web3.utils || {}).asciiToHex || Web3.prototype.fromAscii;
//                 ^^^ web3 1.x                     ^^^ web3 0.20.X

module.exports = async deployer => {
  await deployer.deploy(CheersDapp);
  return deployInfo(deployer, CheersDapp);
};