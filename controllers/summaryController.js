const booksMaster = require("../models/booksMaster")
const responseController = require("./responseController")
module.exports = {
    async summaryController(req, res) {
        try {
            const summary = await booksMaster.find()
            if (!summary || summary.length === 0) return res.json(responseController.success("Data not found"))
            res.json(responseController.success("Data listed successfully", summary))
        } catch (error) {
            res.json(responseController.failed(`Error handling : ${error}`))
            console.log(responseController.failed(`Error handling : ${error}`))
        }
    }
}