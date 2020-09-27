const atalhos = require('../model/atalhosVSC.json');

const getAll = (req,res) => {
    console.log(req.url);
    res.send(atalhos);
}

module.exports = {getAll};