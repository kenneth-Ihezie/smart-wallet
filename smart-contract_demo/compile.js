const path = require('path')
const fs = require('fs')
const solc = require('solc')

const aixTokenPath = path.resolve(__dirname, 'contracts', 'AIXToken.sol')
const src = fs.readFileSync(aixTokenPath, 'utf8')

const input = {
    language: 'Solidity',
    sources: {
      'AIXToken.sol': {
        content: src,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  };

console.log(JSON.parse(solc.compile(JSON.stringify(input))));

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    'AIXToken.sol'
].AIXToken