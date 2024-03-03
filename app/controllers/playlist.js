const validator = require("../validators");
const httpResponse = require("../utils/httpResponse");
const models = require("../models/playlist");

module.exports = {
  createPlaylist: async (req, res) => {
    const { error, value } = validator.createPlaylist(req.body);

    if (error) {
      return httpResponse(res, 400, error.details[0].message, null);
    }

    try {
      value.user_id = req.user.user_id;
      await models.createNewPlaylist(value);

      return httpResponse(res, 200, "Success create new playlist", null);
    } catch (error) {
      return httpResponse(res, 400, error, null);
    }
  },
  listPlaylist: async (req, res) => {
    try {
      const playlist = await models.listPlaylist(req.user.user_id);

      return httpResponse(res, 200, "Success get list playlist", playlist);
    } catch (error) {
      return httpResponse(res, 400, error, null);
    }
  },
  addSongToPlaylist: async (req, res) => {
    const { error, value } = validator.addSongToPlaylist(req.body);

    if (error) {
      return httpResponse(res, 400, error.details[0].message, null);
    }

    try {
      await models.addSongToPlaylist(value);

      return httpResponse(res, 200, "Success add song to playlist", null);
    } catch (error) {
      return httpResponse(res, 400, error, null);
    }
  },
};
