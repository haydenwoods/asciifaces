const express = require("express");
const cool = require('cool-ascii-faces');

var router = express.Router();

const faces = cool.faces;

//Remove all emojis
for (var i = 0; i < faces.length; i++) {
	faces[i] = faces[i].replace(/(\u270c|\u261D)/g, '');
}

//All faces
router.get("/all", async function(req, res) {
	let data = {
		status: "success",
		payload: faces
	};
	res.json(data)
});

//Random face
router.get("/random", async function(req, res) {
	let face = faces[Math.floor(Math.random()*faces.length)];

	let data = {
		status: "success",
		payload: face
	};
	res.json(data);
});

router.get("/:id", async function(req, res) {
	let face = faces[req.params.id];

	let data = {
		status: "success",
		payload: face
	};
	res.json(data);
});


//Not needed but keeping 
router.post("/", function(req, res){
	let data = {status: "success"};
	res.json(data);
});

router.put("/", function(req, res){
	let data = {status: "success"};
	res.json(data);
});

router.delete("/", function(req, res){
	let data = {status: "success"};
	res.json(data);
});

module.exports = router