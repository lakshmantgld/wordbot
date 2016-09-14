var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("printing request object");
  console.log("Body is");
  console.log(req.body.content);
  var content = req.body.content;
  console.log("id"+content.id);
  console.log("contenttype"+content.contentType);
  console.log("text"+content.text);
  res.send(200);
});

module.exports = router;
