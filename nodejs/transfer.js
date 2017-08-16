const Web3 = require('web3');

async function sendEth() {
    if (typeof web3 !== 'undefined') {
        var web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    let accounts = await web3.eth.getAccounts()

    let from = accounts[0] // from address
    let to = accounts[1] // to address
    let value = web3.utils.toWei(10, 'ether') // amount of ether you want to transfer. 

    web3.eth.sendTransaction({ from: from, to: to, value: value })
        .once('transactionHash', function (hash) {
            console.log('Transaction hash')
            console.log(hash)
            console.log('------')
        })
        .once('receipt', function (receipt) {
            console.log('Transaction receipt')
            console.log(receipt)
            console.log('------')
        })
        .on('confirmation', function (confNumber, receipt) {
            console.log('Transaction confirmation')
            console.log({ confNumber, receipt })
            console.log('------')
        })
        .on('error', function (error) {
            console.log('Transaction error')
            console.log(error)
            console.log('------')
        })
        .then(function (receipt) {
            // will be fired once the receipt its mined
            console.log('Receipt mined!')
            console.log(receipt)
            console.log('------')
        });
}

sendEth()