import express from 'express';
import { getProducts, createProduct, deleteProduct, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

// Products page (/api/products)
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.get("/", getProducts);
router.put("/:id", updateProduct);

export default router;