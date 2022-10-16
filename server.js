const express = require("express")
const app = express()
const mongoose = require("mongoose")
const usersRoutes = require("./routes/usersRoutes")
const dashboardRoutes = require("./routes/dashboardRoutes")


//Use .env file in config folder
require("dotenv").config()

//Connect To Database
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_STRING)
        console.log(`✅ MongoDB connected at ${conn.connection.host}`)
    } catch (err) {
        console.log(err)
    }
}
connectDB()

//Body Parsing
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Create middleware for auth
const mockAuthMiddleware = (req, res, next) => {
    console.log(`Authentificated ${req.method} request - Path ${req.path}`)
    next()
}
//Setup Routes For Which The Server Is Listening
app.use(mockAuthMiddleware)
app.use("/users", usersRoutes) // Is it users/ or user/ ?!
app.use("/dashboard", dashboardRoutes) // To change once working on files?

//Server Running
app.listen(process.env.PORT, () => {
    console.log(`✅ Express connected on port ${process.env.PORT}`)
})