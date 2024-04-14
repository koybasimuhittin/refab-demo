//SPDX-License-Identifier: MIT


pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";


contract LidyNFT is ERC721, Ownable, ERC2981 {

  using Strings for uint256;
  using Counters for Counters.Counter;

  Counters.Counter private supply;

  mapping(address => bool) private whitelistedAddresses;
  mapping(uint256 => string) private tokenIDtoTokenURI;
  
  string public ipfsURIPrefix = "ipfs/"; 
  string public ipfsURISuffix = ".json";

  uint256 constant public price = 0.03 ether;
  uint256 constant public maxSupply = 1000;

  bool public paused = false;
  bool public whitelistMintable = false;
  bool public publicMintable = false;

  constructor() ERC721("LidyNFT", "LIDY") {
  }

 

  function whitelistMint(string memory _tokenURI) external payable {
    require(paused == false, "Minting is not active");
    require(whitelistMintable, "Whitelist minting is not started!");
    require(whitelistedAddresses[msg.sender], "You are not whitelisted");
    require(supply.current() + 1 <= maxSupply, "Max supply exceeded!");
    require(msg.value >= price, "Insufficient funds!");

    _mintLoop(msg.sender, 1, _tokenURI);
  }

  function publicMint(string memory _tokenURI) external payable  {
     require(paused == false, "Minting is not active");
     require(publicMintable, "Public mint is not started!");
     require(supply.current() + 1 <= maxSupply, "Max supply exceeded!");
     require(msg.value >= price, "Insufficient funds!");

    _mintLoop(msg.sender, 1, _tokenURI);
  }

  function _mintLoop(address walletToMint_, uint256 mintAmount_, string memory _tokenURI) internal {
    for (uint256 i = 0; i < mintAmount_; i++) {
      supply.increment(); // NFT with id 0 does not exist supply should be incremented after minting
      _safeMint(walletToMint_, supply.current());
      tokenIDtoTokenURI[supply.current()] = _tokenURI;
    }
  }

  function setWhitelistMintable(bool _state) external onlyOwner {
    whitelistMintable = _state;
  }

  function setPublicMintable(bool _state) external onlyOwner {
    publicMintable = _state;
  }
  
  function pauseSale() external onlyOwner {
    paused = true;
  }

  function unpauseSale() external onlyOwner {
    paused = false;
  }

  // why a view function is restricted to onlyOwner?
  function isWhitelisted(address addressToQuery) external view onlyOwner returns (bool) {
    return whitelistedAddresses[addressToQuery];
  }


  function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
    require(_exists(_tokenId), "This nft does not exist!");

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenIDtoTokenURI[_tokenId] , ipfsURISuffix))
        : "";
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return ipfsURIPrefix;
  }

  function currentSupply() external view returns (uint256) {
    return supply.current();
  }

  function setIpfsURIPrefix(string memory _ipfsURIPrefix) external onlyOwner {
    ipfsURIPrefix = _ipfsURIPrefix;
  }

  function setIpfsURISuffix(string memory _ipfsURISuffix) external onlyOwner {
    ipfsURISuffix = _ipfsURISuffix;
  }

  function setDefaultRoyalty(address receiver_, uint96 fee_) external onlyOwner {
    _setDefaultRoyalty(receiver_,fee_);
  }

  function whitelistAddresses(address[] memory addresses) external onlyOwner {
        for(uint i = 0; i < addresses.length; i++){
            whitelistedAddresses[addresses[i]] = true;
        }    
  }

  function removeFromWhitelist(address[] memory addresses) external onlyOwner {
        for(uint i = 0; i < addresses.length; i++){
            whitelistedAddresses[addresses[i]] = false;
        }    
  }

  function withdraw() external onlyOwner {
    _withdraw(owner(), address(this).balance);
  }

  function _withdraw(address _address, uint256 _amount) private {
    (bool success, ) = _address.call{value: _amount}("");
    require(success, "Transfer failed.");
  }

  function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC2981) returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
