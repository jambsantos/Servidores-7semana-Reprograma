const express = require('express');
const router = express.Router();
const controller = require('../controller/programarFController')

router.get('/', controller.getAll)
router.get('/programar', controller.getAll)

module.exports = router;