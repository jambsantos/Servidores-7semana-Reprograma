const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send({
        title: "Minha agenda da Reprograma"
    })
});

module.exports = router;
