const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//content-type: application/json
app.use(bodyParser.json());

//content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router(); // intercepta todas as rotas
const curriculoRoute = require('./app/routes/curriculo-route');

//rota para curriculo
app.use('/api/curriculo/', curriculoRoute);


app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});