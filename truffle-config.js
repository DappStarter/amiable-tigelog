require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note spider coconut grace gloom supply genius'; 
let testAccounts = [
"0x7ce638266fb13f246aeab90f47e27bf0b5480cff2aadc1784e4050abf77c8af9",
"0x629ef3fba9445437ada4a9a7f1d9e6a6fda5dbefb31ddfe2c66a97f376879012",
"0xc8a2d0bd4bf1fdce33ae6473ac50a2294eef96fc4eaa615008e78a8a1095881a",
"0x961732c24e6b94c6490b145360907849da8248d8410922c00019698829d45eba",
"0x589c64baaa459fff91826d80e444be5eeb3d1f958d511bac51894d67e982dd2e",
"0x45baeeff907d7eeef8fced71655f94f7aeec0053164f7caf39a2eadcaa5ab21d",
"0x1073a915ec12a4cc065df1d5c0b555324829a8d47f9a1e1d3b127684bd740065",
"0xe2f2cb5f8dc8bcf37cb09d358bd40c4ea1fc4df1f45f592ddc73572a2beb454d",
"0x2d798a4a55caaed24d9111fe523f5349cafd44f50cf2b9491b89f30b4410bfc3",
"0x2fd1a10c1d709c3b150cde98472900cbeca0530dfaeb6bc386f1fbd2b59d7c4e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
