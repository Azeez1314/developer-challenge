const mongoose = require("mongoose")
const DashboardData = require("../models/DashboardData");

module.exports = {
    getMetric: async (req, res) => {
        // to parse the date we need the date logic
        // for now we'll use Date.now() and 12 months
        const date = Date.now()
        try {
            let data = await DashboardData.find()

            res.json(data)
        } catch (err) {
            console.log(err)
            res.status(500).json(`Server error`)
        }
    }
}