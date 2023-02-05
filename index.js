const express = require("express")
const topic = require("./routes/topic")
const search = require("./routes/search")
const test = require("./routes/test")
const dotenv = require("dotenv").config()
const app = express()

const PORT = process.env.PORT

app.use("/search", search)
app.use("/topic", topic)
app.use("/", test)

app.listen(PORT, () => {console.log("Listening on " + PORT)})
