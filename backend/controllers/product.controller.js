import mongoose from 'mongoose';
import Product from '../../models/product.model.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json( {success: false, message: "Server Error"});
    }
};

export const createProduct = async (req,res) => {
    const product = req.body; // user sends this data

    if (!product.name || !product.price || !product.image) { // if any one field is empty
        return res.status(400).json({ success:false, message:"Please provide all fields" });
    }

    const newProduct = new Product(product);

    try { 
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct});
    } catch (error) {
        console.error("Error in Create product:", error.message);
        res.status(500).json({ success: false, message: "Server error"});
    }
};

export const deleteProduct = async (req, res) => { // :id is placeholder for id
    const { id } = req.params; // id is from :id
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message:"Product deleted" });
    } catch (error) {
        console.log("error in fetching producs:", error.message);
        res.status(404).json({ success:false, message:"Product not found"});
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};