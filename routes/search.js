const express = require("express")
const fetchQuery = require("../utils/fetchnews").fetchQuery
const router = express.Router()

router.get("/:query", async (req, res) => {
  try {
    const query = req.params.query
    const country = req.query.country.toLowerCase()
    const count = req.query.count || 0
    const url = `https://news.google.com/search?q=${query}&gl=${country}`
    const news = await fetchQuery(url, count)
    res.send(news)
  }
  catch {
    res.send({message: "Server error"})
  }
})

module.exports = router
