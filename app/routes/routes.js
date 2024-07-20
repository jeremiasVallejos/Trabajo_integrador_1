const express = require("express");
const router = express.Router();
const { getAllProduct, getProductById, getProductByName, editProduct, createProduct ,deleteProduct} = require('../controllers/products/products')

router.get('/all', getAllProduct)
router.get('/code/:id', getProductById)
router.get('/name/:name', getProductByName)
router.post('/create', createProduct)
router.patch('/update/:code', editProduct)
router.delete('/delete/:code', deleteProduct)

module.exports = router;