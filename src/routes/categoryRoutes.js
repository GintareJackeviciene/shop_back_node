const express = require('express');

const categoriesRouter = express.Router();
const categoriesController = require('../controllers/categoriesController')
// sukurti routeri kategorijom


// GET all /api/categories - grazins visas kategorijas
categoriesRouter.get('/categories', categoriesController.getAll)


module.exports = categoriesRouter;


