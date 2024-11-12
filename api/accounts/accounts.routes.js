const express = require('express');
const router = express.Router();

const {
  accountsGet,
  accountUpdate,
  accountDelete,
  accountCreate,
  getAccountByUsername,
} = require('./accounts.controllers');

// Route to get all accounts
router.get('/', accountsGet);

// Route to get an account by username
router.get('/:username', getAccountByUsername);

// Route to create a new account
router.post('/', accountCreate);

// Route to delete an account by accountId
router.delete('/:accountId', accountDelete);

// Route to update an account by accountId
router.put('/:accountId', accountUpdate);

module.exports = router;
