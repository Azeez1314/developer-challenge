const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    ID: { // For simplicity, not merging ID and _id (mongoDB index)
        type: String,
        require: true,
    },
    FirstName: {
        type: String,
        require: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        require: true,
    }
}, { collection: "userData" });

module.exports = mongoose.model("userData", UserSchema);