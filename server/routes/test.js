const express = require('express');
const router = express.Router();


//import controller
const {getTest} = require('../controller/test');

//import middlewear


//api Route
router.get('test', getTest);

module.exports = router;