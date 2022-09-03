const express = require('express');
const userRoutes = express.Router();
const userCtrl = require('../controllers/group');

const {CREATE, DATA, DELETE, UPDATE} = require('../utils/constants/app-constants').ROUTES.GROUP;

userRoutes.post(CREATE, userCtrl.create);
userRoutes.post(DATA, userCtrl.data);
userRoutes.post(DELETE, userCtrl.deleteGroup);
userRoutes.post(UPDATE, userCtrl.update);

module.exports = userRoutes;