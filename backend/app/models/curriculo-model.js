const mysql = require("./db-model");

// constructor
const curriculo = function(dados) {
  this.id = dados.id;
  this.tipo = dados.tipo;
  this.ano = dados.ano;
  this.lugar = dados.lugar;
  this.lista = dados.lista;
};

curriculo.getAll = result => {
    mysql.query("select * from curriculo.dados", (err, res) => {
      if (err) {
        result(null, err);
        return;
      }
       result(null, res);
    });
  };

  module.exports = curriculo;