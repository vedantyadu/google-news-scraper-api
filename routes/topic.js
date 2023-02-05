const express = require("express")
const fetchTopic = require("../utils/fetchnews").fetchTopic
const router = express.Router()

router.get("/:topic", async (req, res) => {
  try {
    const topic = req.params.topic.toUpperCase()
    const country = req.query.country.toUpperCase()
    const count = req.query.count || 0
    const url = `https://news.google.com/headlines/section/topic/${topic}?gl=${country}`
    const news = await fetchTopic(url, count)
    res.send(news)
  }
  catch {
    res.send({message: "Server error"})
  }
})

module.exports = router
