let CheersDapp = artifacts.require('./CheersDap.sol');

contract('CheersDapp', function(accounts) {
  it('should assert true', function(done) {
    let cheers_dapp = CheersDapp.deployed();
    assert.isTrue(true);
    done();
  });
});
