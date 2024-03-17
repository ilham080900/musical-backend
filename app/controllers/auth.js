const models = require("../models/auth");
const validator = require("../validators");
const httpResponse = require("../utils/httpResponse");
const { hashPassword, checkPassword } = require("../utils/hashing");
const { signJwt } = require("../utils/jwt");

module.exports = {
  register: async (req, res) => {
    const data = {
      username: req.body.username,
      fullname: req.body.fullname,
      password: req.body.password,
    };

    const { error, value } = validator.register(data);

    if (error) {
      return httpResponse(res, 400, error.details[0].message, null);
    }

    try {
      value.password = await hashPassword(value.password);
      const checkUsername = await models.findUser(value);

      if (checkUsername.data) {
        return httpResponse(res, 400, "username already taken", null);
      }

      await models.createNewUser(value);

      return httpResponse(res, 200, "Success create new account", null);
    } catch (error) {
      return httpResponse(res, 400, error, null);
    }
  },
  login: async (req, res) => {
    const { error, value } = validator.login(req.body);

    if (error) {
      return httpResponse(res, 400, error.details[0].message, null);
    }
    try {
      const user = await models.findUser(value);

      if (!user.data) {
        return httpResponse(res, 400, "Invalid email or Password", null);
      }

      const comparePassword = await checkPassword(
        req.body.password,
        user.data.password
      );

      if (!comparePassword) {
        return httpResponse(res, 400, "Invalid email or Password", null);
      }

      const payload = {
        username: user.data.username,
        fullname: user.data.full_name,
        user_id: user.data.id,
      };

      const token = signJwt(payload);

      return httpResponse(res, 200, "Login Success", token);
    } catch (error) {
      return httpResponse(res, 400, error.message, null);
    }
  },
};
