const dotenv = require("dotenv");

dotenv.config();

const ENV = process.env;

module.exports = {
  mysqlDb: {
    host: ENV.MYSQL_HOST,
    port: ENV.MYSQL_PORT,
    user: ENV.MYSQL_USER,
    password: ENV.MYSQL_PASSWORD,
    database: ENV.MYSQL_DATABASE,
  },

  jwtSecret: `${ENV.JWTSECRET}`,
};
