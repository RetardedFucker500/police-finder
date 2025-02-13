const express = require("express");
const http = require("http");
const path = require("path");
const axios = require("axios");

const app = express();

const ip = '0.0.0.0';
const port = 8080;

app.use(express.static(path.join(__dirname, "dist")));

const server = http.createServer(app);

server.listen((ip, port) => {
    console.log("OPEN SOURCE SERVER NOW RUNNING.");
    console.log("THIS IS A OPEN SOURCE SOFTWARE OUR OFFICAL WEBSITE IS: oxyummaps.com");
});