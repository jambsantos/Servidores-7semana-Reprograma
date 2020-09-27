const programarF = require('../model/programarF.json');

const getAll = (req,res) => {
   console.log(req.url);
    res.send(programarF);
};

module.exports = {getAll};