const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = Schema({
  blockHash: {
    type: String,
  },
  blockNumber: {
    type: Number,
  },
  from: {
    type: String,
  },
  gas: {
    type: Number,
  },
  gasPrice: {
    type: String,
  },
  hash: {
    type: String,
  },
  input: {
    type: String,
  },
  nonce: {
    type: Number,
  },
  to: {
    type: String,
  },
  transactionIndex: {
    type: Number,
  },
  value: {
    type: String,
  },
  type: {
    type: Number,
  },
  v: {
    type: String,
  },
  r: {
    type: String,
  },
  s: {
    type: String,
  },
});
const transactionModel = mongoose.model('Transaction', transactionSchema);

module.exports = transactionModel;
