const express = require("express");
const app = express();
const router = require(`${__dirname}/../routers/web`);
const config = require("config");
// ------------------------------------
app.use(router);
app.use("/static", express.static(config.get("app.static_folder")));
// ------------------------------------

module.exports = app;
