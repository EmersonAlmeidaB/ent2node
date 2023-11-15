const { getAll, create, remove, update } = require('../controllers/userCrud.controllers');
const express = require('express');

const userCrudRouter = express.Router();

userCrudRouter.route('/')
    .get(getAll)
    .post(create);

userCrudRouter.route('/:id')
    .delete(remove) 
    .put(update);  

module.exports = userCrudRouter;