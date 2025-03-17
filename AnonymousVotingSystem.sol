// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract AnonymousVotingSystem {
    string public projectTitle = "Anonymous Voting System";
    string public projectDescription = "A blockchain-based voting system that guarantees anonymity for voters.";
    
    function getProjectDetails() public view returns (string memory, string memory) {
        return (projectTitle, projectDescription);
    }
}
