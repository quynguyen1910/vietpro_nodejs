const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");
const CommentModel = require("../models/comment");
const test1 = (req, res) => {
  // const data = "hello";
  // res.render("test", { data, a: 10 });
  //tham số là đường dẫn từ thư mục views đã config trước đó ở app.js và default.js
  // CategoryModel.find().then((docs) => {
  //   res.send(docs);
  // });
  //thêm
  // const category = {
  //   description: "Bphone description",
  //   title: "Bphone",
  //   slug: "bphone",
  // };
  // new CategoryModel(category).save();

  // ProductModel.find({ cat_id: "5f8a0b89dd21e25249b6295f" })
  //   .populate({ path: "cat_id" })
  //   .exec((error, docs) => {
  //     res.send(docs);
  //   });

  CommentModel.find({ prd_id: "5f8a15cb2eec5d5bbf48671a" })
    .populate({ path: "prd_id" })
    .exec((err, docs) => {
      res.send(docs);
    });
};
const test2 = (req, res) => {
  res.redirect("/test1");
};
module.exports = {
  test1,
  test2,
};
