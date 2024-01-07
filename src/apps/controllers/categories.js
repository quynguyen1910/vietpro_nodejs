const categories = (req, res) => {
  res.send("/categories");
};
const create = (req, res) => {
  res.send("/categories/create");
};
const edit = (req, res) => {
  res.send("/categories/edit");
};
const del = (req, res) => {
  res.send("/categories/delete");
};
module.exports = {
  categories,
  create,
  edit,
  del,
};
