const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    const directoryPath = __dirname;

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send("Unable to scan directory");
        }
        let fileList = files.map(file => `<li>${file}</li>`).join("");
        res.send(`<h1>Files in Directory:</h1><ul>${fileList}</ul>`);
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
