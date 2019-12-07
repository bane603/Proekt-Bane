let connection = require("../database");

getAllProductsQuery = () => {
    let query = "SELECT * FROM produkt";
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            };
        });
    });
};

addProductQuery = (body) => {
    let query = "INSERT INTO produkt (Opis, Name, Cena, ProduktId) VALUES (?, ?, ?, ?)";
    var info = [body.Opis, body.Name, body.Cena, body.ProduktId];
    return new Promise((resolve, reject) => {
        connection.query(query, info, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        })
    })
}

module.exports = {
    getAllProductsQuery,
    addProductQuery}