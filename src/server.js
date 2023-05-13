const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");

const AppRout = require('./router/index')

const app = express();

app.engine("hbs", engine());
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));


app.use(AppRout)


module.exports = app;
