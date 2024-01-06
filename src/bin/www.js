const server = require("../apps/app");
server.listen((port = 3000), (req, res) => {
  console.log(`server is running port ${port}`);
});
