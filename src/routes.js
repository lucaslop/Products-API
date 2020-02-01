const express = require('express');
const router = express.Router();
const Productcontroller = require('./controllers/productController');

router.get('/',Productcontroller.listAllProduct);
router.get('/:id',Productcontroller.aProduct);
router.post('/',Productcontroller.newProduct);
router.delete('/:id',Productcontroller.deleteProduct);


module.exports = router;