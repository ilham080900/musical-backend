const validator = require("../validators");
const httpResponse = require("../utils/httpResponse");
const models = require("../models/song");

module.exports = {
  createSong: async (req, res) => {
    const { error, value } = validator.createSong(req.body);

    if (error) {
      return httpResponse(res, 400, error.details[0].message, null);
    }

    try {
      await models.createNewSong(value);

      return httpResponse(res, 200, "Success create new song", null);
    } catch (error) {
      return httpResponse(res, 400, error, null);
    }
  },
  addSongToPlaylist: async (req, res) => {
    const { error, value } = validator.listSongs(req.query);

    if (error) {
      return httpResponse(res, 400, error.details[0].message, null);
    }

    try {
      const song = await models.listSongs(value);

      return httpResponse(res, 200, "Success get list song", song);
    } catch (error) {
      return httpResponse(res, 400, error, null);
    }
  },
};
