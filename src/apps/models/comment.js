const mongoose = require("../../common/database")();
const commentSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    prd_id: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    body: {
      type: String,
    },
    full_name: {
      type: String,
    },
  },
  { timeseries: true }
);
const CommentModel = mongoose.model("Comment", commentSchema, "comments");
module.exports = CommentModel;
