const app = require("./app");
require("./database/database");
require("./models/index");
require("./router/index");

app.listen(8000, () => {
  console.log("Server listening on 8000");
});
