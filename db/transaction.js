const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = Schema({
  blockHash: {
    type: String,
    required: true,
  },
  blockNumber: {
    type: Number,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  gas: {
    type: Number,
    required: true,
  },
  gasPrice: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  input: {
    type: String,
    required: true,
  },
  nonce: {
    type: Number,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  transactionIndex: {
    type: Number,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
  v: {
    type: String,
    required: true,
  },
  r: {
    type: String,
    required: true,
  },
  s: {
    type: String,
    required: true,
  },
});
const transactionModel = mongoose.model('Transaction', transactionSchema);

module.exports = transactionModel;
