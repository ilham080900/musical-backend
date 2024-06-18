const Joi = require("joi");

module.exports = {
  createSong: (data) => {
    const schema = Joi.object({
      song_name: Joi.string().required(),
      artist: Joi.string().required(),
      genre: Joi.string().required(),
      thumbnail: Joi.string().allow("", null),
      video: Joi.string().allow("", null),
      lirik: Joi.string().allow("", null),
      video_chord: Joi.string().allow("", null),
      chord: Joi.string().allow("", null),
    });

    return schema.validate(data);
  },
  listSongs: (data) => {
    const schema = Joi.object({
      song: Joi.string().allow("", null),
      genre: Joi.string().allow("", null),
    });

    return schema.validate(data);
  },
};
