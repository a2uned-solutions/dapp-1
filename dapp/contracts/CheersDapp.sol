pragma solidity ^0.4.16;

contract CheersDapp {

  // Escrow Variables
  unit escrowBalance;
  address public gamePlayer;
  address public gameOwner;
  address private escrow;
  unit private start;
  bool gamePlayerApproved;
  bool gameOwnerApproved;

  // Game Variables
  unit256 numOfAttempts = 0; // Count of game play attempts
  address owner = msg.sender;

  // Constructor Function - Runs once upon initialization
  function CheersDapp (address gamePlayerAddress, address gameOwnerAddress) {
    player = gamePlayerAddress;
    owner = gameOwnerAddress;
    escrow = msg.sender;
    start = now; // alias for block.timestamp
  }

  // Escrow Functions
  //-------------------
  function acceptContract () public {
    if (msg.sender == buyer) {
      gamePlayerApproved = true;
    } else if (msg.sender == owner) {
      gameOwnerApproved = true;
    }

    if (gamePlayerApproved && gameOwnerApproved) {
      payEscrowBalance();
    } else if (gamePlayerApproved && !gameOwnerApproved && now > start + 30 days) {
      selfdestruct(player);
    }
  }

  function payEscrowBalance() private {
    escrow.transfer(this.balance / 100);
    if (seller.send(this.balance)) {
      balance = 0;
    } else {
      throw;
    }
  }

  function desposit() public payable {
    if (msg.sender == gamePlayer) {
      balance += msg.value;
    }
  }

  function cancel() public {
    if (msg.sender == gamePlayer) {
      gamePlayerApproved = false;
    } else if (msg.sender == gameOwner) {
      gameOwnerApproved = false;
    }

    if (!gamePlayerApproved && !gameOwnerApproved) {
      selfdestruct(player);
    }
  }

  function kill() public {
    if (msg.sender == owner) {
      selfdestruct(owner);
    } else if (msg.sender == escrow) {
      selfdestruct(player);
    }
  }

  function () public payable {

  }

  // Game Functions
  //---------------------
  function addAttempt() public {
    numOfAttempts++;
  }

  function getNumOfAttempts() public constant returns (unit256) {
    return numOfAttempts;
  }

  function resetNumOfAttempts() {
    numOfAttempts = 0;
  }

}