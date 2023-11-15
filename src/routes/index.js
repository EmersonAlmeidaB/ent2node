const express = require('express');
const userCrudRouter = require('./userCrud.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', userCrudRouter);


module.exports = router;