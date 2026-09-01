const express = require("express");
const productsRouter = express.Router();
const products = require("../data/products.json");


productsRouter.get("/", (req, res) => {
    res.render("products", {
        products: products
    });
});

productsRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    res.render("product", {
        product: products[id]
    });
});

module.exports = productsRouter;