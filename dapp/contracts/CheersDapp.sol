pragma solidity ^0.4.16;

contract CheersDapp {

  address public player;
  address public owner;
  address public winningAddress;
  uint amountWagered;
  uint public gamesPlayed;
  uint public winningGameRounds;
  uint public winningGameTime;


  event gameDeposit(address _address, uint _value, uint _gamesPlayed);
  event gameSaved(address _address, uint _rounds, uint _time, uint _gamesPlayed);

  // Constructor Function
  function CheersDapp() {
    gamesPlayed = 0;
    owner = msg.sender;

  }

  // Function to recover the funds on the contract
  function kill() {
    if (msg.sender == owner) selfdestruct(owner);
  }

  // Allows the contract to accept Ether
  function () payable public {
    player = msg.sender;
    amountWagered = msg.value;
    gamesPlayed += 1;
    gameDeposit(player, amountWagered, gamesPlayed);

    if (gamesPlayed == 3) {
      winningAddress.transfer(this.balance / 2);
    }
  }

  // Store the information needed to determine the winner
  function storeGameData(address _address, uint _rounds, uint _time) public returns (bool success) {
    if (_rounds > winningGameRounds) {
      winningGameRounds = _rounds;
      winningGameTime = _time;
      winningAddress = _address;
    } else if (_rounds == winningGameRounds && _time < winningGameTime) {
      winningGameRounds = _rounds;
      winningGameTime = _time;
      winningAddress = _address;
    }

    gameSaved(_address, _rounds, _time, gamesPlayed);

    return true;
  }


}
