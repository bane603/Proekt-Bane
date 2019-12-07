const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
var jwt = require('express-jwt');
let unless = require('express-unless');
let app = express();
let router = require("./router");
let middlewares = require("./middlewares/common");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(jwt({ secret: 'panda' }).unless({ path: ['/token', '/doctors', '/login'] }));
app.use(router);
app.use(middlewares.wrongRoute);
app.use(middlewares.errorHandler);

let port = process.env.PORT || 5050;
app.listen(port, () => {
    console.log(`server i listening on port ${port}`);
});