let express = require("express");
let routes = express.Router();
let action = require("./actions");

routes.get("/products", action.getAllProducts);
routes.post("/products", action.addProduct);


module.exports = routes;