pragma solidity ^0.8.4;

interface IERC20Child{
     function mint(
    address recipient,
    uint256 amount
  )
    external;

  function burn(
    uint256 amount
  )
    external;


  function burnFrom(
    address account,
    uint256 amount
  )
    external;
}
}          