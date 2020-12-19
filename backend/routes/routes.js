import express from "express";

import { 
    showProducts,
    showProductById,
    createProduct,
    updateProduct,
    destroyProduct
} from '../controllers/product.js';

const router = express.Router();

// Get All Product 
router.get('/products', showProducts);

// Get single product 
router.get('/products/:id', showProductById);

// create product 
router.post('/products', createProduct);

// update product 
router.put('/products/:id', updateProduct);

// delete product
router.delete('/products/:id', destroyProduct);

export default router;