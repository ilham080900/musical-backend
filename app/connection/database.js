const mysql = require("mysql");
const { mysqlDb } = require("../configs");

const pool = mysql.createPool({
  host: mysqlDb.host,
  port: mysqlDb.port,
  user: mysqlDb.user,
  password: mysqlDb.password,
  database: mysqlDb.database,
});

module.exports = async () => {
  try {
    const connection = await new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
          console.log("Failed to connect database");
          return;
        }

        resolve(connection);
      });
    });
    return connection;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error; // Re-throw the error for handling in the main file
  }
};
