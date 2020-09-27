const express = require('express');
const router = express.Router();

router.get('/', (req,res)=> {
    res.send({
        title:"10 atalhos do VSCode"
    })
});

module.exports=router;
