const heroes = require('../model/heroes.json');

const getAll = (req,res)=> {
    console.log(req.url);
    res.send(heroes);
};

module.exports= {getAll};
