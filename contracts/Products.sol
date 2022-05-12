pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract Products {
  address storeAccount = 0xbF1bbfF196EFD824a9d460FDe965861E8296F428;

  struct Product {
    uint id;
    string name;
    uint price;
    string coverImage;
    string[] platforms;
    uint256 creationDate;
    uint256 releaseDate;
    string developer;
    string distributor;
    string[] genres;
    string description;
    uint sales;
    bool isActive;
  }

  Product[] products;

  function getProducts() public view returns (Product[] memory) {
    return products;
  }

  function addProduct(string memory name, uint price, string memory coverImage, string[] memory platforms, uint256 releaseDate, string memory developer, string memory distributor, string[] memory genres, string memory  description) public returns (bool success) {
    Product memory newProduct = Product(products.length, name, price, coverImage, platforms, block.timestamp, releaseDate, developer, distributor, genres, description, 0, true);
    products.push(newProduct);
    return true;
  }

  function removeProduct(uint id) public returns (bool success) {
    products[id].isActive = false;
    return true;
  }

  // needs to be tested
  function buyProduct(uint id) external payable {
    require(msg.value == products[id].price, 'Need to send exact amount.');

    (bool sent, /*memory data*/) = storeAccount.call{value: msg.value}("");
    require(sent, "Failure! ETH not sent");
  }
}