const mutantesM = require('../model/mutantesM.json');

const getAll = (req,res)=> {
    console.log(req.url);
    res.send(mutantesM);
};

module.exports = {getAll};


