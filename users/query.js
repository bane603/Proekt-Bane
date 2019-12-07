let connection = require("../database");

getAllUsersQuery = () => {
    let query = "SELECT * FROM korisnik";
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results, fields) => {
            if (err) {
                reject(error);
            }
            else {
                resolve(results);
            }
        })
    })
};

createNewUserQuery = (body, password) => {
    let query = "INSERT INTO korisnik (Name, Username, Password) VALUES (?, ?, ?)";
    let info = [body.Name, body.Username, body.Password];
    return new Promise((resolve, reject) => {
        connection.query(query, info, (error, results, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        })
    })
};

loginUserQuery = (username) => {
    let query = "SELECT Username, Password FROM korisnik WHERE Username = ?";
    return new Promise((resolve, reject) => {
        connection.query(query, [username], (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    })
};

module.exports = {
    getAllUsersQuery,
    createNewUserQuery,
    loginUserQuery
}