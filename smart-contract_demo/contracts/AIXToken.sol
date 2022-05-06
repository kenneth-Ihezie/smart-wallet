// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/*
Our contracts are often used via inheritance, 
and here we’re reusing ERC20 for both the basic standard 
implementation and the name, symbol, and decimals optional extensions. 
Additionally, we’re creating an initialSupply of tokens, 
which will be assigned to the address that deploys the contract.
*/
contract AIXToken is ERC20 {
    address public manager;

    constructor(uint256 initialSupply) ERC20("Aix", "AIX") {
        manager = msg.sender;
        _mint(msg.sender, initialSupply);
    }
}