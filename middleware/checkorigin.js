const allowedOrigins = require("../utils/allowedorigins")

function checkOrigin(req, res, next) {
  if (allowedOrigins == "*" || req.get("host").split(":")[0] == "127.0.0.1") {
    next()
  }
  else {
    allowedOrigins.every(origin => {
      if (origin == req.get("host")) {
        next()
        return;
      }
    })
    res.send({message: "Origin not allowed"})
  }
}

module.exports = checkOrigin
