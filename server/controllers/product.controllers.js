const Product = require("../models/product.models");
// Get All Products
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({results: allProducts}))
        .catch(err => res.json({message: "Looks you in need of some products", err}))
}
// Get One Product
module.exports.findProduct = (req, res) => {
    Product.find({_id: req.params._id})
        .then(oneProduct => res.json({results: oneProduct}))
        .catch(err => res.json({message: "No Products found", errors: err}))
};
// Post a Product
module.exports.createProduct = (req, res) => {
    // console.log(req.body)
    Product.create(req.body)
        .then(newProduct => res.json({results: newProduct}))
        .catch(err => res.json({message: "Cannot add an item to DB", err}))
};
// Delete a Product
module.exports.deleteProduct = (req, res) => {
    Product.remove({_id: req.params._id})
        .then(res.json({message: "This Product has been discontinued"}))
        .catch(err => res.json({message: "This product is not deleting", err}))
};
// Update a Product
module.exports.updateProduct = (req, res) => {
    Product.updateOne({_id: req.params._id}, req.body)
        .then(updateProduct => res.json({results: updateProduct}))
        .catch(err => res.json({message: "Product cannot be updated", err}))
};