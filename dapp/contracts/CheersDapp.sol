pragma solidity ^0.4.16;

contract CheersDapp {

  unit256 numOfAttempts = 0; // Count of game play attempts

  function addAttempt() public {
    numOfAttempts++;
  }

  function getNumOfAttempts() public constant returns (unit256) {
    return numOfAttempts;
  }

  function resetNumOfAttempts() {
    numOfAttempts = 0;
  }

}