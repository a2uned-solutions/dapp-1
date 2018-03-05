pragma solidity ^0.4.16;

contract CheersDapp {

  address public player;
  address public owner;
  uint amountWagered;
  uint gamesPlayed;

  struct gameData {
    address playerAddress;
    uint roundsPlayed;
    uint gameTime;
  }

  mapping(uint => gameData) public gameDataMapping;

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
  }

  // Store the information needed to determine the winner
  function storeGameData(address _address, uint _rounds, uint _time) public returns (bool success) {
    gameDataMapping[gamesPlayed].playerAddress = _address;
    gameDataMapping[gamesPlayed].roundsPlayed = _rounds;
    gameDataMapping[gamesPlayed].gameTime = _time;

    gameSaved(_address, _rounds, _time, gamesPlayed);

    return true;
  }

  function getStoredGameData(uint _key) public returns (address, uint, uint) {
    return (
      gameDataMapping[_key].playerAddress,
      gameDataMapping[_key].roundsPlayed,
      gameDataMapping[_key].gameTime
    );
  }

}
