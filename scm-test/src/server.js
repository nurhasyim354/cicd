const app = require("./app");

const port = 8083;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});