import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './config/db.js';
import productRoutes from './routes/product.routes.js';

dotenv.config()
const app = express();
const PORT = process.env.port || 5000;

app.use(express.json()); // allows to accept JSON in body (req.body) // type of middleware 

app.use("/api/products", productRoutes); // 1 for each route

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});