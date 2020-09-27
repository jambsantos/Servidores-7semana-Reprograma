const express = require('express');
const router = express.Router();

router.get('/',(req,res)=> {
    res.send({
        title:"Lista de Mutantes da Marvel"
    })
});

module.exports = router;