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
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Guestbook started on port ${port}`);
});