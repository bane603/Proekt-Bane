let query = require("./query");

getAllProducts = async (req, res) => {
    try {
        let data = await query.getAllProductsQuery();
        res.status(200).send(data);

    } catch (error) {
        res.status(500).send(error.message);
    }
};

addProduct = async (req, res) => {
    try {
        await query.addAProductQuery(req.body);
        res.status(201).send("New product has been added")
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getAllProducts,
    addProduct
};