const users = require("../models/users")
const responseController = require("./responseController")
module.exports = {
    async loginController(req, res) {
        try {
            const { name, password } = req.query;
            if (!name || !password) return res.json(responseController.failed("Data missing !"))

            const userData = await users.findOne({ name, password })

            if (!userData) {
                res.json(responseController.failed("user not exits"))
                return
            }
            res.json(responseController.success("User : ", userData))
            console.log("userss : ", userData)
        } catch (error) {
            res.json("error handling : ", error)
        }
    }
};


