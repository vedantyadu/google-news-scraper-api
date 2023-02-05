# google-news-scraper-api
google-news-scraper-api is a REST api created using `Express.js`.<br>
It works by web scraping Google news and extracting the relevant content.
## News by topic
`/topic/{topicname}?country={countryname}`
## News by search term
`/search/{searchterm}?country={countryname}`
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
