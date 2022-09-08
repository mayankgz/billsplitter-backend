const express = require('express');
const groupRoutes = express.Router();
const groupCtrl = require('../controllers/group');

const {CREATE, DATA, DELETE, UPDATE, LOGIN} = require('../utils/constants/app-constants').ROUTES.GROUP;
const validateMiddleWare = require('../utils/middlewares/schema-validator');
const validateGroup = require('../db/models/group').validateGroup;

groupRoutes.post(CREATE,[validateMiddleWare(validateGroup)], groupCtrl.create);
groupRoutes.post(DATA, groupCtrl.data);
groupRoutes.post(DELETE, groupCtrl.deleteGroup);
groupRoutes.post(UPDATE, groupCtrl.update);
groupRoutes.post(LOGIN, groupCtrl.login);

module.exports = groupRoutes;