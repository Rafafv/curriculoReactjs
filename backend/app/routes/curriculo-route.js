const express = require('express');
const router  = express.Router();
const curriculo = require('../controllers/curriculo-controller');

//rota -> get localhost:3000/api/curriculo
router.get("/", curriculo.getAll);


module.exports = router;