// ************ Require's ************
const path = require('path');
const express = require('express');
const router = express.Router();
const multer = require('multer');

// ************ Controller Require ************
const productsController = require('../controllers/productsController');
/*** MULTER ***/
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/images/products');          //ubicación de las imagenes
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}_products_${path.extname(file.originalname)}`); //cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); 
    }
})
const upload = multer({
    storage
})
 
/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index);  // usamos get por quequeremos ver todos los productos

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); //usamos post por que queremos cargar/traer el formulario
router.post('/create', upload.single('image'), productsController.store);  //usamos post por que queremos enviar el formulario

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail);                           //usamos get por que queremos traer(get) un producto

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit);                                           //usamos get por que queremos traer(get) un producto
router.put('/update/:id', upload.single('image'), productsController.update);               //usamos put por que queremos edita run producto

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); // usamos delete por que queremos borrar un producto

module.exports = router;