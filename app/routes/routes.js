const express = require("express");
const router = express.Router();
const { getAllProduct, getProductById, getProductByQuery, editProduct, createProduct ,deleteProduct} = require('../controllers/products/products')

router.get('/all', getAllProduct)
router.get('/', getProductByQuery)
router.get('/:id', getProductById)
router.patch('/edit', editProduct)
router.post('/create', createProduct)
router.delete('/delete', deleteProduct)

module.exports = router;