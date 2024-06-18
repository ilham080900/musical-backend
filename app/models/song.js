const mysqlDb = require("../connection/database");

module.exports = {
  createNewSong: async (data) => {
    const { song_name, artist, genre, thumbnail, video, lirik, video_chord, chord } = data;
    try {
      const connection = await mysqlDb();
      return new Promise((resolve, reject) => {
        const sql = `INSERT INTO song (song_name, artist, genre, thumbnail, video, lirik, video_chord, chord) 
            VALUES ("${song_name}", "${artist}", "${genre}", "${
          thumbnail || ""}", "${video || ""}", "${lirik || ""}", "${video_chord || ""}", "${chord || ""}")
        `;

        connection.query(sql, (error, results) => {
          if (error) {
            console.log(error)
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
  listSongs: async (data) => {
    const { song, genre } = data;
    try {
      const connection = await mysqlDb();
      return new Promise((resolve, reject) => {
        let sql;

        if (song) {
          sql = `SELECT * FROM song WHERE song_name LIKE "%${song}%"`;
        } else if (genre) {
          sql = `SELECT * FROM song WHERE genre LIKE '%${genre}%'`;
        } else {
          sql = `SELECT * FROM song ORDER BY id DESC`;
        }

        connection.query(sql, (error, results) => {
          if (error) {
            reject({ message: error });
          }

          connection.release();
          resolve(results);
        });
      });
    } catch (error) {
      console.error("Error connecting or using database:", error);
    }
  },
};
