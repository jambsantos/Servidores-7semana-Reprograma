const express = require('express');
const router = express.Router();
const controller = require('../controller/agendaController');

router.get("/", controller.getAll);
router.get("/agenda", controller.getAll);

module.exports = router;