const express = require("express");
const app = express();
const router = require(`${__dirname}/../routers/web`);
const config = require("config");
// ------------------------------------
app.use(express.urlencoded({ extended: true })); //nhận dữ liệu form
app.use(router); //
app.use("/static", express.static(config.get("app.static_folder")));
//tạo đường dẫn static vì trong backend cần bảo mật
// -------------set ejs engin-----------------------
app.set("views", config.get("app.views_folder"));
app.set("view engine", config.get("app.view_engin"));

module.exports = app;
