let express = require("express");

let router = express.Router();
let usersRoutes = require("./users/routes");
let productRoutes = require("./product/routes");

router.use(usersRoutes);
router.use(productRoutes);

module.exports = router;