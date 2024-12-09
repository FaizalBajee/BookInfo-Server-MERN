const responseController = require('./responseController');
const booksMaster = require('../models/booksMaster');
const mongoose = require('mongoose');
module.exports = {
    async removeController(req, res) {
        try {
            const { id } = req.query;
            if (!id || !mongoose.Types.ObjectId.isValid(id) ) return res.json(responseController.failed("Invalid or missing ID"))
            const remove = await booksMaster.deleteOne({ _id: id })
            if (remove.deletedCount === 0) {
                return res.json(responseController.failed("No record found to delete"))
            }
            res.json(responseController.success("Deleted successfully"))
        } catch (error) {
            res.json(responseController.failed(`Error handling : ${error}`))
        }
    }
}