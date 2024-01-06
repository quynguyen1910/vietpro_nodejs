const express = require("express");
const app = express();
const router = require(`${__dirname}/../routers/web`);
// ------------------------------------
app.use(router);
// ------------------------------------

module.exports = app;
