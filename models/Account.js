const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const accountSchema = new Schema(
    {
      username: { type: String, required: true },
      funds: { type: Number, default: 0 },
    },
    { timestamps: true }
  );
  const Account = model('Account', accountSchema);
module.exports = Account;
