pragma solidity ^0.8.9;

contract HelloWorld {
    
    string public message;

    constructor(string memory _message) {
        message = _message;
    }

    function update(string memory _message) public {
        message = _message;
    }
}