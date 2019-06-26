const express = require("express");

const faceRoute = require("./routes/face.js");

const app = express();

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
 
    next();
});

app.use("/api", faceRoute);

app.listen(3001, "0.0.0.0");