const express = require("express")
const router = express.Router()
const dashboardDataController = require("../controllers/dashboardDataController")

router.get("/metric/:date", dashboardDataController.getMetric)
router.get("/metric/", dashboardDataController.getMetric)
router.get("/pieChart/:date",)
router.get("/barLine/:date",)
// router.get("/charts/barLineChart/:date",) - Safe double route, because of POSTMAN confusion

module.exports = router