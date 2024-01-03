const ArtGrowNFT = artifacts.require("ArtGrowNFT");
// const Amaranthus = artifacts.require("Amaranthus");


module.exports = function (deployer) {
  deployer.deploy(ArtGrowNFT);
};

// module.exports = function (deployer) {
//   deployer.deploy(Amaranthus);
// }