const mysqlDb = require("../connection/database");

module.exports = {
  createNewPlaylist: async (data) => {
    const { playlist_name, user_id } = data;
    try {
      const connection = await mysqlDb();
      return new Promise((resolve, reject) => {
        const sql = `INSERT INTO playlist (playlist_name, user_id) 
            VALUES ("${playlist_name}", "${user_id}")
        `;

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
  listPlaylist: async (data) => {
    try {
      const connection = await mysqlDb();
      return new Promise((resolve, reject) => {
        const sql = `
        SELECT 
            t1.id, 
            t1.playlist_name, 
            t1.user_id, 
            t3.song_name,
            t3.artist,
            t3.genre,
            t3.thumbnail,
            t3.video
        FROM playlist t1
        JOIN playlists_songs t2 
                ON t2.playlist_id = t1.id
        JOIN song t3 
                ON t3.id = t2.song_id
        WHERE t1.user_id = ${data}; 
        `;

        connection.query(sql, (error, results) => {
          if (error) {
            reject({ message: error });
          }

          function formatSongs(results) {
            const formattedPlaylists = {};

            for (const row of results) {
              const playlistId = row.id;
              const playlist = formattedPlaylists[playlistId];

              if (!playlist) {
                formattedPlaylists[playlistId] = {
                  id: row.id,
                  playlist_name: row.playlist_name,
                  user_id: row.user_id,
                  songs: [],
                };
              }

              formattedPlaylists[playlistId].songs.push({
                song_name: row.song_name,
                artist: row.artist,
                genre: row.genre,
                thumbnail: row.thumbnail,
                video: row.video,
              });
            }

            return Object.values(formattedPlaylists); // Convert object to array for consistent output
          }

          connection.release();
          resolve(formatSongs(results));
        });
      });
    } catch (error) {
      console.error("Error connecting or using database:", error);
    }
  },
  addSongToPlaylist: async (data) => {
    const { songs, playlist_id } = data;
    try {
      const connection = await mysqlDb();
      return new Promise((resolve, reject) => {
        for (const song of songs) {
          const sql = `INSERT INTO playlists_songs (song_id, playlist_id) VALUES ('${song}', '${playlist_id}')`;

          connection.query(sql, (error, results) => {});
        }
        resolve(true);
      });
    } catch (error) {
      console.error("Error connecting or using database:", error);
    }
  },
};
