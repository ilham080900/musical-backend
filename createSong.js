const axios = require("axios")
const songsJs= require("./songs");
const { response } = require("express");

const songs = songsJs

for (let i = 0; i < songs.length; i++){
    axios.post('http://localhost:4020/api/create-song', {
        song_name: songs[i].songName,
        artist: songs[i].artist,
        genre: songs[i].genre,
        thumbnail: songs[i].thumbnail,
        video: songs[i].video,
        lirik: songs[i].lirik,
        chord: songs[i].chord,
        video_chord: songs[i].video_chord   
      }, {
        headers: {
          'Content-Type': 'application/json',
          "Authorization" : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZnVsbG5hbWUiOiJBZG1pbiBVc2VybmFtZSIsInVzZXJfaWQiOjEyLCJpYXQiOjE3MTg2ODA2NTQsImV4cCI6MTcxODc2NzA1NH0.3N9p_pkQWZ4_iSIf3C9wywtOP9aXgkoP6Vi71e9NES4'
        }
      })
      .then(function (response) {
        console.log(`Done: ${songs[i].songName}`);
      })
      .catch(function (error) {
        console.log(`Error: ${songs[i].songName}`);
      });
}