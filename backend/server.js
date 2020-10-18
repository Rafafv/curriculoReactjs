const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');


const app = express();


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", 'GET');
      
    next();
});
app.use(cors());

const port = process.env.PORT || 4000;

const router = express.Router(); 
const curriculoRoute = require('./app/routes/curriculo-route');


app.use('/api/curriculo/', curriculoRoute);


app.listen(port, ()=>{
  console.log("server is up and running...on port ", port);
});