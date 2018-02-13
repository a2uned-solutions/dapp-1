let CheersDapp = artifacts.require('../../CheersDapp.sol');

contract('CheersDapp', function(accounts) {
  it('should assert true', function(done) {
    let cheers_dapp = CheersDapp.deployed();
    assert.isTrue(true);
    done();
  });
});
