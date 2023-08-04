// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import the ERC20 interface
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DeepDiveHub is Ownable {
    IERC20 public token;

    mapping(address => uint256) public balances;

    constructor (address _tokenAddress) {
        token = IERC20(_tokenAddress);
    }

    // Function to deposit tokens into the vault
    function deposit(uint256 amount, address grantee) external {
        require(amount > 0, "Amount should be greater than zero");
        require(token.transferFrom(msg.sender, address(this), amount), "Token transfer failed");
        balances[grantee] += amount;
    }

    // Function to withdraw tokens from the vault
    function withdraw(uint256 amount) external {
        require(amount > 0, "Amount should be greater than zero");
        require(balances[msg.sender] >= amount, "Insufficient balance");

        balances[msg.sender] -= amount;
        require(token.transfer(msg.sender, amount), "Token transfer failed");
    }

    function withdrawToAdmin(uint256 amount, address grantee) external onlyOwner {
        require(amount > 0, "Amount should be greater than zero");
        require(balances[grantee] >= amount, "Insufficient balance");

        balances[grantee] -= amount;
        require(token.transfer(msg.sender, amount), "Token transfer failed");
    }

    // Function to check the balance of a given address
    function getBalance(address account) external view returns (uint256) {
        return balances[account];
    }
}