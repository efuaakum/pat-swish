// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract PatSwishPortal {
    uint256 totalSwishes;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function swish() public {
        totalSwishes += 1;
        console.log("%s has swished!", msg.sender);
    }

    function getTotalSwishes() public view returns (uint256) {
        console.log("We have %d total swishes!", totalSwishes);
        return totalSwishes;
    }
}