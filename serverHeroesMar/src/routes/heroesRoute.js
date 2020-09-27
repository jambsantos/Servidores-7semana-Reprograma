const express = require('express');
const router = express.Router();
const controller =require('../controller/heroesController')

router.get('/', controller.getAll);
router.get('/heroes', controller.getAll);

module.exports = router;