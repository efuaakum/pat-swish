// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract PatSwishPortal {
    uint256 totalSwishes;

    event NewSwish(address indexed from, uint256 timestamp, string message);

    struct Swish {
        address swisher; 
        string message;
        uint256 timestamp;
    }

    Swish[] swishes;

    constructor() {
        console.log("I am one of the smartest contracts. Woo!");
    }

    function swish(string memory _message) public {
        totalSwishes += 1;
        console.log("%s swished w/ message %s", msg.sender, _message);

        swishes.push(Swish(msg.sender, _message, block.timestamp));

        emit NewSwish(msg.sender, block.timestamp, _message);
    }

    function getAllSwishes() public view returns (Swish[] memory) {
        return swishes;
    }

    function getTotalSwishes() public view returns (uint256) {
        console.log("We have %d total swishes!", totalSwishes);
        return totalSwishes;
    }
}