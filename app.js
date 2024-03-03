var express = require("express");
const cors = require("cors");

const routesApi = require("./app/routes");
const database = require("./app/connection/database");

var app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

routesApi(app);

database();

const PORT = process.env.PORT || 4020;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
