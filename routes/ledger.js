const express = require('express');
const ledgerRoutes = express.Router();
const ledgerCtrl = require('../controllers/ledger');

const {ADD, REMOVE} = require('../utils/constants/app-constants').ROUTES.LEDGER;

ledgerRoutes.post(ADD, ledgerCtrl.addTransaction);
ledgerRoutes.post(REMOVE, ledgerCtrl.removeTransaction);

module.exports = ledgerRoutes;