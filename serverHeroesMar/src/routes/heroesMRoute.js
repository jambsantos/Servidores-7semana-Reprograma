const express = require('express');
const router = express.Router();
const controller =require('../controller/heroesMController')

router.get('/', controller.getAll);
router.get('/heroesM', controller.getAll);

module.exports = router;