const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 4000;

const readDatabase = () => {
	const data = fs.readFileSync("./src/data/videos.json");
	return JSON.parse(data);
};

app.use(express.static(path.join(__dirname, "../public")));

app.get("/videos", (req, res) => {
	const videos = readDatabase();
	res.json(videos);
});

app.get("/videos/:id", (req, res) => {
	const videos = readDatabase();
	const video = videos.find((v) => v.id === parseInt(req.params.id));

	if (video) {
		res.json(video);
	} else {
		res.status(404).json({ message: "Video not found" });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
