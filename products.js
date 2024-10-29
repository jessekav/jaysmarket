// backend/routes/products.js
const express = require("express");
const Product = require("./models/Product");

const router = express.Router();

// Add Product
router.post("/", async (req, res) => {
    const product = new Product(req.body);
    try {
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(500).send("Error adding product");
    }
});

// Get All Products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).send("Error fetching products");
    }
});

module.exports = router;
