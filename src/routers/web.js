const express = require("express");
const router = express.Router();
//import controllers
const AuthController = require("../apps/controllers/auth");
const AdminController = require("../apps/controllers/admin");
const ProductController = require("../apps/controllers/product");
// ---------------admin-------------------------
router.get("/admin/login", AuthController.login);
router.get("/admin/logout", AuthController.logout);

router.get("/admin/dashboard", AdminController.index);

router.get("/admin/products", ProductController.index);
router.get("/admin/products/create", ProductController.create);
router.get("/admin/products/edit", ProductController.eidt);
router.get("/admin/products/delete", ProductController.del);
// ---------------user-------------------------
router.get("/admin/users", (req, res) => {
  res.send("/admin/users");
});
router.get("/admin/users/create", (req, res) => {
  res.send("/admin/users/create");
});
router.get("/admin/users/edit", (req, res) => {
  res.send("/admin/users/edit");
});
router.get("/admin/users/delete", (req, res) => {
  res.send("/admin/users/delete");
});
// ---------------category-------------------------
router.get("/categories", (req, res) => {
  res.send("/categories");
});
router.get("/categories/create", (req, res) => {
  res.send("/categories/create");
});
router.get("/categories/edit", (req, res) => {
  res.send("/categories/edit");
});
router.get("/categories/delete", (req, res) => {
  res.send("/categories/delete");
});

module.exports = router;
