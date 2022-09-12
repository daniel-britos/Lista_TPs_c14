// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); // utilizamos GET por que queremos cargar la vista index
router.get('/search', mainController.search); // utilizamos GET por que queremos hacer una busqueda

module.exports = router;
