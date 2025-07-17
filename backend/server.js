import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './config/db.js';
import productRoutes from './routes/product.routes.js';

dotenv.config()
const app = express();

app.use(express.json()); // allows to accept JSON in body (req.body) // type of middleware 

app.use("/api/products", productRoutes); // 1 for each route

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});