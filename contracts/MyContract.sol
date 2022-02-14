pragma solidity ^0.8.4;

// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IERC20.sol";

contract MyContract {
    constructor() {}

    event Transfer(address from, address to, uint256 amount);
    event Approve(address spender, uint256 amount);

    function deposit(address token, uint256 amount) external payable {
        IERC20(token).transferFrom(msg.sender, address(this), amount * 10**18);
        emit Transfer(msg.sender, address(this), amount * 10**18);
    }

    function withdraw(address token, uint256 amount) external payable {
        IERC20(token).transfer(msg.sender, amount * 10**18);
        emit Transfer(address(this), msg.sender, amount * 10**18);
    }

    function getBlance(address token) external view returns (uint256) {
        return IERC20(token).balanceOf(address(this));
    }
}
