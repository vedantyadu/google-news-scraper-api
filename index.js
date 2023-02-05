const express = require("express")
const topic = require("./routes/topic")
const search = require("./routes/search")
const test = require("./routes/test")
const app = express()
const PORT = 3000

app.use("/search", search)
app.use("/topic", topic)
app.use("/", test)

app.listen(PORT, () => {console.log("Listening on 3000")})
