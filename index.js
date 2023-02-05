const express = require("express")
const topic = require("./routes/topic")
const search = require("./routes/search")
const test = require("./routes/test")
const dotenv = require("dotenv").config()
const checkOrigin = require("./middleware/checkorigin")
const app = express()

const PORT = process.env.PORT

app.use("/search", checkOrigin, search)
app.use("/topic", checkOrigin, topic)
app.use("/", checkOrigin, test)

app.listen(PORT, () => {console.log("Listening on " + PORT)})
