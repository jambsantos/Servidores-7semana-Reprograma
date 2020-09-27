const agenda = require("../models/agenda.json");

const getAll = (req, res) => {
    console.log(req.url);

    res.send(agenda);
};

module.exports = {getAll};