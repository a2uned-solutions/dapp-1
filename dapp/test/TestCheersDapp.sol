pragma solidity ^0.4.18

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/CheersDapp.sol";

contract TestCheersDapp {
  function testInitialBalanceUsingDeployedContract() {
    CheersDapp cheers = CheersDapp(DeployedAddress.CheersDapp());
    uint expected = 10000;
    Assert.equal(cheers.getBalance(), expected, 'Initial Balance should be 10000');
  }
}