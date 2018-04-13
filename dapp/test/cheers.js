const Cheers = artifacts.require('../contracts/Cheers.sol');

contract('Cheers', function([player]) {
  let cheers;

  it('should deploy the contract', async function() {
     cheers = await Cheers.deployed();
     console.log(cheers);
  });

  it('should create a new game', async function() {
    let data = {
      from: player,
      value: 4e+18
    };

    let newGame = await cheers.newGame(120, 5, data);
    let eventData = newGame.logs[0].args;
    assert.equal(eventData._time.toNumber(), 120);
    assert.equal(eventData._rounds.toNumber(), 5);
    assert.equal(eventData._gamesPlayed.toNumber(), 1);
  });

  it('should create a second game', async function() {
    let data = {
      from: player,
      value: 2e+18
    };

    let newGame = await cheers.newGame(10, 1, data);
    let eventData = newGame.logs[0].args;
    assert.equal(eventData._time.toNumber(), 10);
    assert.equal(eventData._rounds.toNumber(), 1);
    assert.equal(eventData._gamesPlayed.toNumber(), 2);
  });

  it('should get the balance of the contract', async function() {
    let balance = await web3.eth.getBalance(cheers.address);
    assert.equal(6e+18, balance.toNumber());
  });

  it('should get the second game', async function() {
    let game = await cheers.games(1);
    assert.equal(game[1].toNumber(), 10);
    assert.equal(game[2].toNumber(), 2e+18);
    assert.equal(game[3].toNumber(), 1);
  });

  it('should get the winning game', async function() {
    let winningGame = await cheers.winningGames(0);
    assert.equal(winningGame[1].toNumber(), 120);
    assert.equal(winningGame[2].toNumber(), 4e+18);
    assert.equal(winningGame[3].toNumber(), 5);
  });
});
