const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {title: "Express"});
});

router.get("/big-response", function (req, res, next) {
  const filePath = path.join(__dirname, "../public/generated.json");
  if (fs.existsSync(filePath)) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Length", fs.statSync(filePath).size);
    res.setHeader("Keep-Alive", "timeout=120, max=50");
    res.setHeader("Transfer-Encoding", "chunked");
    const fileStream = fs.createReadStream(filePath);
    fileStream.on("error", (err) => {
      console.error(err);
      res.status(500).send("Error connecting to the model microservice");
    });
    fileStream.on("close", function (err) {
      console.log("File stream closed");
      res.end();
    });

    fileStream.pipe(res);
  } else {
    res.status(500).send("Error connecting to the file");
  }
});

module.exports = router;
