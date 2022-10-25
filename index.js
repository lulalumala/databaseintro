const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

const app = express()
const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log("Hey")
})
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("database is connected"))
    .catch(err => console.log(err))
app.get("/", (req, res) => {
    res.send("Wagwan")
})