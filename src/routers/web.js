const express = require("express");
const router = express.Router();
// ---------------admin-------------------------
router.get("/admin/login", (req, res) => {
  res.send("/admin/login");
});
router.get("/admin/logout", (req, res) => {
  res.send("/admin/logout");
});
router.get("/admin/dashboard", (req, res) => {
  res.send("/admin/dashboard");
});
router.get("/admin/products", (req, res) => {
  res.send("/admin/products");
});
router.get("/admin/products/create", (req, res) => {
  res.send("/admin/products/create");
});
router.get("/admin/products/edit", (req, res) => {
  res.send("/admin/products/edit");
});
router.get("/admin/products/delete", (req, res) => {
  res.send("/admin/products/delete");
});
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
