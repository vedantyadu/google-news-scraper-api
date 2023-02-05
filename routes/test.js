const express = require("express")
const router = express.Router()

router.get("", (req, res) => {
  res.send({message: "The server is working!"})
})

module.exports = router
