const express = require('express');

const itemsRouter = express.Router();
const itemsController =require('../controllers/itemsController');

//routes

//GET all/api/items
itemsRouter.get('/items', itemsController.getAll);

//GET all/api/items/1
itemsRouter.get('/items/:itemId', itemsController.getSingle);

module.exports = itemsRouter;