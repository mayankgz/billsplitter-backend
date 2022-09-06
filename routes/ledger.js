const express = require('express');
const ledgerRoutes = express.Router();
const ledgerCtrl = require('../controllers/ledger');

const {ADD, REMOVE, DATA} = require('../utils/constants/app-constants').ROUTES.LEDGER;

ledgerRoutes.post(ADD, ledgerCtrl.addTransaction);
ledgerRoutes.post(REMOVE, ledgerCtrl.removeTransaction);
ledgerRoutes.post(DATA, ledgerCtrl.getTransaction);

module.exports = ledgerRoutes;