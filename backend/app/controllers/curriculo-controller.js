const curriculo = require("../models/curriculo-model");

exports.getAll = (req, res) => {
    curriculo.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "erro"
        });
      else res.send(data);
    });
  };