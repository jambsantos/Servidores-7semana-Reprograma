const express = require('express');
const router = express.Router();
const controller = require('../controller/mutantesMController.js')

router.get('/', controller.getAll);
router.get('/mutantesM', controller.getAll);

module.exports = router;