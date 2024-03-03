const Joi = require("joi");

module.exports = {
  register: (data) => {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().min(8).required(),
      fullname: Joi.string().allow("", null),
    });

    return schema.validate(data);
  },
  login: (data) => {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().min(8).required(),
    });

    return schema.validate(data);
  },
};
