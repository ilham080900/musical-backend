const bcrypt = require("bcrypt");

module.exports = {
  hashPassword: (password) => {
    return bcrypt.hash(password, 10);
  },
  checkPassword: async (password, userPassword) => {
    return bcrypt.compare(password, userPassword);
  },
};
