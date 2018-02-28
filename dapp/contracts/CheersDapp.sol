pragma solidity ^0.4.16;

contract CheersDapp {

  // Escrow Variables
  address public escrow;
  address public escrowAddress;
  uint escrowBalance; //Not sure this needs to be stored within the contract
  uint public amountWagered;
  uint start;
  bool gamePlayerApproved;
  bool gameOwnerApproved;

  // Game Variables
  uint numOfAttempts = 0; // Count of game play attempts. Not sure this needs to be stored witin the contract
  address gameOwner = msg.sender;
  address public player;
  address public owner;

  // Events
  //------------------
  event ReturnTransactionDetails(address _sender, uint _value);

  // Constructor Function - Runs once upon initialization
  function CheersDapp (address _gamePlayerAddress, address _gameOwnerAddress, address _escrowAddress, uint _amountWagered) public {
    player = _gamePlayerAddress;
    owner = _gameOwnerAddress;
    amountWagered = _amountWagered;
    //escrow = msg.sender;
    escrowAddress = _escrowAddress;
    start = now; // alias for block.timestamp
  }

  // Escrow Functions
  //-------------------
  function acceptContract () public {
    if (msg.sender == player) {
      gamePlayerApproved = true;
    } else if (msg.sender == owner) {
      gameOwnerApproved = true;
    }

    if (gamePlayerApproved && gameOwnerApproved) {
      payEscrowBalance();
      // I think this should be deposit to escrow?
    } else if (gamePlayerApproved && !gameOwnerApproved && now > start + 30 days) {
      selfdestruct(player);
    }
  }

  function payEscrowBalance() private {
    escrow.transfer(escrowBalance / 100);
    if (owner.send(escrowBalance)) {
      escrowBalance = 0;
    } else {
      revert();
    }
  }

  function deposit() public payable {
    if (msg.sender == player) {
      // I think this should use address.transfer?
      escrowBalance += msg.value;
      ReturnTransactionDetails(msg.sender, msg.value);
    }

    // This is currently for testing purposes;
    //escrowAddress.send(2);
  }

  function cancel() public {
    if (msg.sender == player) {
      gamePlayerApproved = false;
    } else if (msg.sender == owner) {
      gameOwnerApproved = false;
    }

    if (!gamePlayerApproved && !gameOwnerApproved) {
      selfdestruct(player);
    }
  }

  function getBalance() public constant returns (uint256) {
    var msgSenderAddress = msg.sender;
    return msgSenderAddress.balance;
  }

  function kill() public {
    if (msg.sender == gameOwner) {
      selfdestruct(gameOwner);
    } else if (msg.sender == escrow) {
      selfdestruct(player);
    }
  }

  function () public payable {

  }

  // Game Functions
  //--------------------
  function addAttempt() public returns (uint) {
    return numOfAttempts += 1;
  }

  function getNumOfAttempts() public constant returns (uint) {
    return numOfAttempts;
  }

  function resetNumOfAttempts() public constant returns (uint) {
    return numOfAttempts = 0;
  }

}