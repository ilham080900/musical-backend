const controller = require("../controllers");
const { isLoginUser } = require("../middleware/auth");

module.exports = (app) => {
  app.post("/api/register", controller.register);
  app.post("/api/login", controller.login);

  app.post("/api/create-song", isLoginUser, controller.createSong);
  app.get("/api/list-song", controller.listSongs);

  app.post("/api/create-playlist", isLoginUser, controller.createPlaylist);
  app.get("/api/list-playlist", isLoginUser, controller.listPlaylist);
  app.post("/api/addto-playlist", isLoginUser, controller.addSongToPlaylist);
};
