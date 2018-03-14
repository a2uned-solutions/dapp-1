const CheersDapp = artifacts.require('CheersDapp');

contract('CheersDapp', function([player]) {
  let cheersDapp;

  it('should deploy the contract', async function() {
     cheersDapp = await CheersDapp.deployed();
  });

  it('should send a transaction to the contract and increment games played', async function() {
    let transactionData = {
      from: player,
      value: 1e+18
    };
    let transaction = await cheersDapp.sendTransaction(transactionData);
    let value = transaction.logs[0].args._value;
    let gamesPlayed = transaction.logs[0].args._gamesPlayed;
    assert.equal(1, gamesPlayed.toNumber());
    assert.equal(1e+18, value.toNumber());
  });

  it('should get the contract balance', async function() {
    let balance = await web3.eth.getBalance(CheersDapp.address);
    assert.equal(1e+18, balance.toNumber());
  });

  it('should send a transaction to the contract and increment games played again', async function() {
    let transactionData = {
      from: player,
      value: 1e+18
    };
    let transaction = await cheersDapp.sendTransaction(transactionData);
    let value = transaction.logs[0].args._value;
    let gamesPlayed = transaction.logs[0].args._gamesPlayed;
    assert.equal(2, gamesPlayed.toNumber());
    assert.equal(1e+18, value.toNumber());
  });

  it('should get the transaction balance again and should be doubled', async function() {
    let balance = await web3.eth.getBalance(CheersDapp.address);
    assert.equal(2e+18, balance.toNumber());
  });

  it('should store the game data on the contract blockchain', async function() {
    let address = player;
    let rounds = 3;
    let time = 100;
    let gameData = await cheersDapp.storeGameData(address, rounds, time);
    let gameDataResponse = gameData.logs[0].args;
    assert.equal(gameDataResponse._rounds.toNumber(), 3);
    assert.equal(gameDataResponse._time.toNumber(), 100);
  });

  it('should send a transaction to the contract and increment games played again - second', async function() {
    let transactionData = {
      from: player,
      value: 1e+18
    };
    let transaction = await cheersDapp.sendTransaction(transactionData);
    let value = transaction.logs[0].args._value;
    let gamesPlayed = transaction.logs[0].args._gamesPlayed;
    assert.equal(3, gamesPlayed.toNumber());
    assert.equal(1e+18, value.toNumber());
  });

  it('should get the balance of the contract after the 3rd game and be half', async function() {
    let balance = await web3.eth.getBalance(CheersDapp.address);
    assert.equal(1.5e+18, balance.toNumber());
  });
});
