const index = (req, res) => {
  res.send("/admin/products");
};
const create = (req, res) => {
  res.send("/admin/products/create");
};
const eidt = (req, res) => {
  res.send("/admin/products/eidt");
};
const del = (req, res) => {
  res.send("/admin/products/del");
};
module.exports = {
  index,
  create,
  eidt,
  del,
};
