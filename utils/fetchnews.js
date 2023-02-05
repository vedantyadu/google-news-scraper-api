const axios = require("axios")
const cheerio = require("cheerio")

async function fetchTopic(url, count) {
  const response = await axios.get(url)
  const $ = cheerio.load(response.data)
  const articles = $("article")

  const news = []

  articles.each((i, el) => {
    if (count == 0 || i < count) {
      const aTag = $(el).find("a")
      news.push({
        title: aTag.attr("aria-label"),
        source: $(el).find("span").first().text() || false,
        image: $(el).find("figure").children("img").first().attr()?.src || false,
        url: aTag.attr("href").replace("./", "https://news.google.com/") || false
      })
    }
  })

  return news
}

async function fetchQuery(url, count) {
  const response = await axios.get(url)
  const $ = cheerio.load(response.data)
  const articles = $("div > a > figure > img")

  const news = []

  articles.each((i, el) => {
    if (count == 0 || count < i) {
      const article = el.parentNode.parentNode.parentNode
      news.push({
        title: $(article).find("h3 > a").text(),
        source: $(article).find("div > a").text(),
        image: el.attribs.src,
        url: $(article).find("h3 > a").attr().href.replace("./", "https://news.google.com/") || false
      })
    }
  })

  return news
}

module.exports = {fetchTopic, fetchQuery}
