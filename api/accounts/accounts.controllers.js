const Account = require('../../models/Account'); 

//create a new acc
exports.accountCreate = async (req, res) => {
  try {
    const newAccount = await Account.create({ ...req.body, funds: 0 });
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete an acc by id
exports.accountDelete = async (req, res) => {
  try {
    const { accountId } = req.params;
    const foundAccount = await Account.findById(accountId);
    if (foundAccount) {
      await foundAccount.deleteOne();
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update an acc by id
exports.accountUpdate = async (req, res) => {
  try {
    const { accountId } = req.params;
    const foundAccount = await Account.findById(accountId);
    if (foundAccount) {
      await foundAccount.updateOne(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get all acc
exports.accountsGet = async (req, res) => {
  try {
    const accounts = await Account.find().select('-createdAt -updatedAt'); // Excludes timestamps
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get acc by username
exports.getAccountByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const foundAccount = await Account.findOne({ username });
    if (foundAccount) {
      if (req.query.currency === 'usd') {
        //convert funds to USD if currency query parameter is provided
        const accountInUsd = { ...foundAccount.toObject(), funds: foundAccount.funds * 3.31 };
        res.status(200).json(accountInUsd);
      } else {
        res.status(200).json(foundAccount);
      }
    } else {
      res.status(404).json({ message: 'Account not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
