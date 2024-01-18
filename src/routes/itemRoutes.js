const express = require('express');

const itemsRouter = express.Router();
const itemsController =require('../controllers/itemsController');

//routes

//GET all/api/items
itemsRouter.get('/items', itemsController.getAll);

module.exports = itemsRouter;