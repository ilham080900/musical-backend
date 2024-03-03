const mysqlDb = require("../connection/database");

module.exports = {
  createNewUser: async (data) => {
    const { username, password, fullname } = data;
    try {
      const connection = await mysqlDb();
      return new Promise((resolve, reject) => {
        const sql = `INSERT INTO user (username, password, full_name) VALUES ("${username}", "${password}", "${fullname}")`;

        connection.query(sql, (error, results) => {
          if (error) {
            reject({ message: error });
          }

          connection.release();
          resolve(results[0]);
        });
      });
    } catch (error) {
      console.error("Error connecting or using database:", error);
    }
  },
  findUser: async (data) => {
    const { username } = data;
    try {
      const connection = await mysqlDb();
      return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM user WHERE username = '${username}'`;

        connection.query(sql, (error, results) => {
          if (error) {
            reject({ message: error });
          }

          connection.release();
          resolve({ data: results[0] });
        });
      });
    } catch (error) {
      console.error("Error connecting or using database:", error);
    }
  },
};
