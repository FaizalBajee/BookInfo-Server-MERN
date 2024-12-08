const booksMaster = require("../models/booksMaster");
const responseController = require("./responseController");

module.exports = {
    async uploadBooksController(req, res) {
        try {
            const { bname, aname, des } = req.body;
            if (!bname || !aname || !des) return res.json(responseController.failed("data missing!"))
            const uploadBooks = await booksMaster.create({
                bookName: bname,
                authorName: aname,
                description: des
            })
            if (!uploadBooks) {
                return res.json(responseController.failed("Error while upload book details"))
            }
            res.json(responseController.success("Uploaded successfully"))
        } catch (error) {
            console.log("error handling :", error)
            res.json(responseController.failed(`Error handling : ${error}`))
        }
    }
}