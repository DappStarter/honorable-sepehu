require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net purpose grace lobster foam typical'; 
let testAccounts = [
"0x4eb3de4ef3486b8c66355a4c83bd6f63278e735e1c3495c990222c43bda0436c",
"0x825224dbb6e89d1f05a00571dfb57698c1a5225d5240ef29080d5ff2c10f0bc3",
"0xa2b1eff73a566de1a1ef96640b4a0ff28e38bb2fa7d2f4859a790238e3148172",
"0xa3e753eb053b2ff55cbd3b767d715389ecbaf6a3ef1b17d8116fd650c19ed0d0",
"0xa8f765d8e184788e77cb796c4d9deb59fffb6e3243cfe75f55191dbcd433ebaa",
"0x1910033bb984078fb9033edb09bef59b229c79b0c6e89446d404a0db9e6fcd3e",
"0x2f078c5da4b07f2fd3f7e6415a3e07223d1cb3fc5736c40dfe3d84eb1a0c7e7b",
"0x2acb927489f1017f182c60c23bfae6db9f79f94fa3c6bea02fc6ffa82c1c95d7",
"0xd9e3f72d0f1f650709ac4c5f1d89634866edf81b0b2a0603fc21d3b3d99ea5f4",
"0x42b35bcfed7fd586c27f84fb51cf556a3b60f92a0b2592b3308c540820d242c7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
