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

  it('should get the transaction balance', async function() {
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
    let rounds = 4;
    let time = 1250;
    let response = await cheersDapp.storeGameData(address, rounds, time);
    console.log(response.logs[0].args);
  });

  it('should get all stored game data', async function() {
    let gameData = await cheersDapp.getStoredGameData(2);
    console.log(gameData);
  });
});




