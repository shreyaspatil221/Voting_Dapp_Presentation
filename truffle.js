var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = "WqDFeWbMMM5qFzon2C7O";
var mnemonic = "lemon waste spend three remove render name fiber yard issue minute embark";

require('babel-register')
module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
	  gas: 470000
    },
	ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
      network_id: 3,
	  gas: 470000
    }
  }
}
