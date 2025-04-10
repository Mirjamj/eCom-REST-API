import express from 'express';

// Import the controller functions that handle the logic for each route
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productControllers.js'

// Create a new router instance
const router = express.Router()

// ROUTES
router.get('/', getProducts)
router.get('/:id', getProductById)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.patch('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router