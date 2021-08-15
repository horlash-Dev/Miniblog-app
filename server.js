const express = require("express");
const serve = require("serve-static");
const port = process.env.PORT || 5000;
const app = express();

app.use(serve(__dirname + "/dist"));
app.get(/.*/, function(req, res){
	res.sendfile(__dirname + "/dist/index.html")
})
app.listen(port)
