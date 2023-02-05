# google-news-scraper-api
**google-news-scraper-api** is a REST api created using express.js and cheerio.<br>
It works by web scraping Google News and extracting the relevant content.
## Get news by topic
**GET** request on `/topic/{topicname}?country={countryname}&count={articlecount}`
## Get news by search term
**GET** request on `/search/{searchterm}?country={countryname}&count={articlecount}`
## Allowing origins
In the `utils/allowedorigins.js`,<br>
change `const allowedOrigins` to `"*"` to allow requests from all origins or to an `array` of origins to allow request from specific origins.
## Sample output
```json
[
  {
    "title": "{news title}",
    "source": "{news source}",
    "image": "{link to image}",
    "url": "{link to news article}"
  },
  {
    "title": "{news title}",
    "source": "{news source}",
    "image": "{link to image}",
    "url": "{link to news article}"
  }
]
```
