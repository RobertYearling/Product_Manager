const ProductController = require("../controllers/product.controllers");

module.exports = app => {
    // Get All
    app.get("/api/product", ProductController.findAllProducts);
    // Get One
    app.get("/api/product/:_id", ProductController.findProduct);
    // Add New
    app.post("/api/product/new", ProductController.createProduct);
    // Delete Song
    app.delete("/api/product/delete/:_id", ProductController.deleteProduct);
    // Update Song
    app.put("/api/product/update/:_id", ProductController.updateProduct);
}