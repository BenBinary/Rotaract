
// Variablendeklaration
const express = require("express");
const fs = require("fs");
const http = require("http");
const test = fs.readFileSync("./test.html", {encoding: "utf-8"});
//const login = fs.readFileSync("./login.html", {encoding: "utf-8"});

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(function(req, res, next) {

    const url = req.url;

    if (url === "/") {

        console.log("In / Abzwerigung");
        //res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.render(`login`);

    } else if (url === "/events") {

        //const events = fs.readFileSync("./views/basic.ejs", {encoding: "utf-8"});
        res.render(`events_ahead`);

    } else {

        res.render(url.replace('/', ''));
        console.log(url.replace('/', ''));
    }


});

app.listen(process.env.Port, function() {
    console.log("Konsoloe lauscht auf Port 5400");
});