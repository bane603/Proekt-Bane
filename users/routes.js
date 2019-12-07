let express = require("express");
let router = express.Router();
let action = require("./actions");
let helper = require("../helper");

router.get("/users", action.getAllUsers);
router.post("/users", helper.usernameValidator, action.createNewUser);
router.post("/login" , action.loginUsers);

module.exports = router;
