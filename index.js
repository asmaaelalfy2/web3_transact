const mongoose = require('mongoose');
const Web3 = require('web3');
const transactionModel = require('./db/transaction');

//================ ***DB Connect*** ================
mongoose
  .connect('mongodb://localhost:27017/transaction')
  .then(() => {
    console.log('connect mongodb successfully');
  })

  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
//================ ***DB End*** ================

const provider = 'https://matic-mainnet.chainstacklabs.com';
const web3Provider = new Web3.providers.HttpProvider(provider);
const web3 = new Web3(web3Provider);

// const data = web3.eth
//   .getTransaction(
//     '0x2b1cb0ee5c14b33d1871a671c235dce2972861a1ad1410659251f0b9d7fac39f'
//   )
//   .then(console.log);
// console.log(data);
const dt = async function () {
  try {
    const data =await web3.eth
  .getTransaction(
    '0x2b1cb0ee5c14b33d1871a671c235dce2972861a1ad1410659251f0b9d7fac39f'
  )
    const transact = await new transactionModel(data);
    console.log(transact);
     transact.save();
  } catch (error) {
    console.log(error);
  }
};

dt();
