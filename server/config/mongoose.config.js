const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/product", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("The goose has been found!"))
    .catch(err => console.log("The goose is loose!", err))