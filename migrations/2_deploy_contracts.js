var Voting = artifacts.require("./Voting.sol");
module.exports = function(deployer) {
  deployer.deploy(Voting, ['Sachit','Deepanshu','Mansi','Nishkarsh','Akshay','Mandar','Shreyas'], {gas: 670000});
};