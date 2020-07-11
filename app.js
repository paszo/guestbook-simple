const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

const entries = [];
app.locals.entries = entries;

app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/new-entry", (req, res) => {
    res.render("new-entry");
});

app.post("/new-entry", (req, res) => {
    if(!req.body.title || !req.body.body) {
        res.status(400).send("Entries must have a title and a body.");
    }
    entries.push({
        title: req.body.title,
        body: req.body.body,
        published: new Date()
    });
    res.redirect("/");
});

app.use((req, res) => {
    res.status(404).render("404");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Guestbook started on port ${port}`);
});