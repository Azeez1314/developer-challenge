const mongoose = require("mongoose");

const DashboardDataSchema = new mongoose.Schema({
    ProjectID: { // For simplicity, not merging ProjectID and _id (mongoDB index)
        type: String,
        require: true,
    },
    ProjectName: {
        type: String,
        require: true,
    },
    ProjectPhase: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        require: true,
    },
    EstimateDueDate: {
        type: String, // For simplicity, dates are not converted yet
        require: true,
    },
    StartDate: {
        type: String, // For simplicity, dates are not converted yet
    },
    EstimatedValue: {
        type: String,
        require: true,
    },
    ActualValue: {
        type: String,
        require: true,
    }
}, { collection: 'dashboardData' });

module.exports = mongoose.model("DashboardData", DashboardDataSchema);