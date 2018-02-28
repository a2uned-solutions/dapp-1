const CheersDapp = artifacts.require('CheersDapp');
const should = require('should');

contract('CheersDapp', function(accounts) {
  let token;

  it('should deploy the contract', function(done) {
    CheersDapp.deployed().then(function(instance) {
      token = instance;
      should.exist(token);
      done();
    });
  });

  it('should return 0 number of attempts', function(done) {
    token.getNumOfAttempts.call().then(function(result) {
      result.toNumber().should.equal(0);
      done();
    });
  });

  it('should increment and return 1 number of attempts', function(done) {
    token.addAttempt.call().then(function(result) {
      result.toNumber().should.equal(1);
      done();
    });
  });

  //let escrow;
  let newInstance;
  it('should create a new contract and have constructor variables defined', async function() {
    newInstance = await CheersDapp.new(accounts[0], accounts[1], accounts[2], 150000000000);
    let player = await newInstance.player.call();
    let owner = await newInstance.owner.call();
    let amountWagered = await newInstance.amountWagered.call();
    let escrowAddress = await newInstance.escrowAddress.call();
    //escrow = await newInstance.escrow.call();
    player.should.equal(accounts[0]);
    owner.should.equal(accounts[1]);
    escrowAddress.should.equal(accounts[2]);
    amountWagered.toNumber().should.equal(150000000000);
  });

  // TODO need tests for accept contract
  // TODO need tests to confirm msg.sender

  it('should deposit the amount wagered to escrow', async function() {
    let previousEscrowBalance = await newInstance.getBalance();
    let depositTransaction = await newInstance.deposit();
    let escrowBalance = await newInstance.getBalance();
    // TODO returned transaction has null contractAddress. See if we can link that.
    console.log(depositTransaction);
    console.log(depositTransaction.logs[0].args);
    console.log(previousEscrowBalance.toNumber());
    console.log(escrowBalance.toNumber());
  });
});
