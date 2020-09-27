const express = require('express');
const router = express.Router();
const controller = require('../controller/atalhosVSCController')

router.get('/atalhos', controller.getAll)
router.get('/', controller.getAll)

module.exports = router;