module.exports = {
  register: require("./auth").register,
  login: require("./auth").login,
  createSong: require("./song").createSong,
  listSongs: require("./song").listSongs,
  createPlaylist: require("./playlist").createPlaylist,
  listPlaylist: require("./playlist").listPlaylist,
  addSongToPlaylist: require("./playlist").addSongToPlaylist,
  playlistRecomendation: require("./playlist").playlistRecomendation
};
