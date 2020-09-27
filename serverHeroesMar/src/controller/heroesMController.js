const heroesM = require('../model/heroesM.json');

const getAll = (req,res)=> {
    console.log(req.url);
    res.send(heroesM);
};

module.exports= {getAll};
