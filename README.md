# Howto Ethereum by example
To educate my ass, about the biggest since the invetion of zeh intertubes. I have created these simple examples to see all the gears moving inside of Ethereum. Very basic stuff, so open yourself a terminal and type away!

## Getting started
These are all examples for edu porpuses, do not use for as live code!

### Prerequisites
Before you start, all examples are on OSX with Node, npm and brew installed.

### Installing
Install ethereum dependencies

```
brew tap ethereum/ethereum
brew install ethereum
```

Install EthereumJS Test RPC globally
```
npm install -g ethereumjs-testrpc
```

### Run a private chain
When starting EthereumJS TestRPC you will get premade accounts with balances, private keys and Mnemonic. Use the Mnemonic to restore the wallets. After that you can import private keys as you please.

```
testrpc
```

### Connect wallet to private chain
So we need a wallet to see the transactions happening.

#### Mist wallet
Open wallet with rpc command

```
/Applications/Ethereum\ Wallet.app/Contents/MacOS/Ethereum\ Wallet --rpc http://localhost:8545
```

#### Metamask
Due to some weird bug, I had to switch to the main network and back to test a couple of times to get everything going.
```
Connect to http://localhost:8545
```

### Running examples
If all went well you should end up with running privatechain and a wallet connected to that network.

Now dive into the examples dir and continue.

```
cd nodejs-examples
```

----
## Some reference
Oooo all the glorious nifty tools are making me cry. Some links for the lazy :D

### Wallet
- https://github.com/ethereum/mist
- https://metamask.io/

### Dev tools
- https://github.com/ethereumjs/testrpc
- https://brew.sh/

### Documentation
- http://web3js.readthedocs.io/en/1.0/index.html
- https://github.com/ethereum/wiki/wiki