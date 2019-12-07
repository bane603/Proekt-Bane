let query = require("./query");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

getAllUsers = async (req, res) => {
    try {
        let data = await query.getAllUsersQuery();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

createNewUser = async (req, res, next) => {
    try {
        let data = await query.getAllUsersQuery();
        let exist = data.some(element => element.Username === req.body.Username);
        if (!exist) {
            const passHash = bcrypt.hashSync(req.body.Password, 10);
            await createNewUserQuery(req.body, passHash);
            res.status(201).send(" new user has been created :) ");
        }
        else {
            var error = new Error("Username alredy exists");
            error.status = 408;
            next(error);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};


loginUser = async (req, res) => {
    let password = req.body.Password;
    try {

        let user = await query.loginUserQuery(req.body.Username);
        let databaseUser = user[0];
        let matchPassword = bcrypt.compareSync(password, databaseUser.Password);
        if (matchPassword) {
            let token = jwt.sign({ databaseUser }, "panda", { expiresIn: "4h" });

            res.status(200).send(JSON.stringify(token));
        }

    } catch (error) {
        res.status(500).send(error.message);
    }

}

module.exports = {
    getAllUsers,
    createNewUser,
    loginUser
}