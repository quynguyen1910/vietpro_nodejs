const mongoose = require("../../common/database")();
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["member", "admin"],
      default: "member",
    },
    full_name: {
      type: String,
      required: true,
    },
  },
  {}
);
const UserModel = mongoose.model("User", userSchema, "users");
module.exports = UserModel;
