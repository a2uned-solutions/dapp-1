pragma solidity ^0.4.16;

contract Cheers {

  address owner;
  uint8 gamesPlayed;
  uint256 winningGameIndex;

  struct Game {
    address player;
    uint256 gameTime;
    uint256 amountWagered;
    uint16 roundsPlayed;
  }

  Game[] public games;
  Game[] public winningGames;

  // Constructor function
  function Cheers() {
    owner = msg.sender;
    gamesPlayed = 0;
  }

  // All game attempts will run through this function
  function newGame(uint256 _time, uint16 _rounds) public payable {
    address player = msg.sender;
    uint256 amountWagered = msg.value;

    _createGame(player, amountWagered, _time, _rounds);

    if (_getWinningGamesCount() < 1) {
      _createWinningGame(player, amountWagered, _time, _rounds);
    } else {
      Game storage storageGame = winningGames[winningGameIndex];
      // TODO
      // This needs to have logic to check against the
      // last game rounds played or time played if rounds tied
    }
  }

  // This function will store the winning game
  // to the winningGames array
  function _createWinningGame(address _player, uint256 _wagered, uint256 _time, uint16 _rounds) internal {
    winningGameIndex = winningGames.push(Game(_player, _time, _wagered, _rounds)) - 1;
  }

  // This function will store every game
  // to the game array
  function _createGame(address _player, uint256 _wagered, uint256 _time, uint16 _rounds) {
    games.push(Game(_player, _time, _wagered, _rounds)) - 1;
  }

  // Will view here save tx cost?
  // This function is used because we can't just call
  // array.length without return the value in a function
  function _getWinningGamesCount() internal view returns(uint) {
    return winningGames.length;
  }

  // Maybe we should combine this function and the function above
  // Will view here save tx cost
  function _getGamesCount() internal view returns(uint) {
    return games.length;
  }

  // This function will be run when 100 games have been
  // played and payout the contract balance
  function _payout() internal {
    // TODO complete this
  }
}