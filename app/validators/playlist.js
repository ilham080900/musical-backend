const Joi = require("joi");

module.exports = {
  createPlaylist: (data) => {
    const schema = Joi.object({
      playlist_name: Joi.string().required(),
    });

    return schema.validate(data);
  },
  addSongToPlaylist: (data) => {
    const schema = Joi.object({
      playlist_id: Joi.number().required(),
      songs: Joi.array().required(),
    });

    return schema.validate(data);
  },
};
