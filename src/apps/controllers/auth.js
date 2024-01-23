const login = (req, res) => {
  res.render("./admin/login", { data: {} });
};
const postLogin = (req, res) => {
  const { email, password } = req.body;
  if (email === "vietpro.edu.vn@gmail.com" && password === "123456") {
    res.redirect("/admin/dashboard");
  } else {
    const error = "Tài khoản không hợp lệ !";
    res.render("./admin/login", { data: { error } });
  }
};
const logout = (req, res) => {
  res.send("/admin/logout");
};
module.exports = {
  login,
  logout,
  postLogin,
};
