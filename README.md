# Howto Ethereum by example
To educate my ass, about the biggest since the invetion of zeh intertubes. I have created these simple examples to see all the gears moving inside of Ethereum. Very basic stuff, so open yourself a terminal and type away!

## Before you start
Before you start, all examples are on OSX with Node, npm and brew installed.

---

## Install ethereum dependencies
    brew tap ethereum/ethereum
    brew install ethereum
    npm install -g ethereumjs-testrpc

## Install dependencies
    npm install

## Running a private chain
When starting EthereumJS TestRPC you will get premade accounts with balances, private keys and Mnemonic. Use the Mnemonic to restore the wallets. After that you can import private keys as you please.

    testrpc

## Connecting wallet to testrpc
### Mist
    /Applications/Ethereum\ Wallet.app/Contents/MacOS/Ethereum\ Wallet --rpc http://localhost:8545

### Metamask
Use the Mnemonic to restore and import the private keys at will. Due to some weird bug, I had to switch to the main network and back to test a couple of times to get everything going.
    
    Connect to http://localhost:8545

----

That's all folks. Blockchain away :D

----
## Tools
- https://github.com/ethereum/mist
- https://metamask.io/

## Dev tools
- https://github.com/ethereumjs/testrpc
- https://brew.sh/
- https://code.visualstudio.com/

## Documentation
- http://web3js.readthedocs.io/en/1.0/index.html
- https://github.com/ethereum/wiki/wiki