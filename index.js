const express = require("express");

const app = express();

app.listen(3000,() => console.log("Server listening at port 3000"));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/create", (req, res) => {
    res.send("Create");
});

app.get("/read", (req, res) => {
    res.send("Read");
});

app.get("/update", (req, res) => {
    res.send("Update");
});

app.get("/delete", (req, res) => {
    res.send("Delete");
});

app.get("/about", (req, res) => {
    res.send("About route");
});