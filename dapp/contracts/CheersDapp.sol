pragma solidity ^0.4.16;

contract CheersDapp {

  // Escrow Variables
  uint escrowBalance;
  //address public gamePlayer;
  //address public gameOwner;
  address private escrow;
  uint private start;
  bool gamePlayerApproved;
  bool gameOwnerApproved;

  // Game Variables
  uint numOfAttempts = 0; // Count of game play attempts
  address gameOwner = msg.sender;
  address public player;
  address public owner;

  // Constructor Function - Runs once upon initialization
  function CheersDapp (address gamePlayerAddress, address gameOwnerAddress) public {
    player = gamePlayerAddress;
    owner = gameOwnerAddress;
    escrow = msg.sender;
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

  function desposit() public payable {
    if (msg.sender == player) {
      escrowBalance += msg.value;
    }
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