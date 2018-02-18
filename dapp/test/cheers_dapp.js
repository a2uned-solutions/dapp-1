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
    token.addAttempt.call().then(function (result) {
      result.toNumber().should.equal(1);
      done();
    });
  });
});
