const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send({
    title:"Lista de 10 plataformas para aprender programar FREE"
});
});

module.exports = router;