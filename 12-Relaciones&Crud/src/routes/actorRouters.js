const express = require('express');
const router = express.Router();
const actorsController = require('../controllers/genresController');

router.get('/actors', actorsController.list);



module.exports = router;