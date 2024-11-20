import { Song } from "../models/song.model.js";
import { Album } from "../models/album.modal.js";

export const getAdmin = (req, res) => {
  res.send("Admin route with GET method");
}

export const createSong = async (req, res, next) => {
  try {
    if(!req.files || !req.files.audioFile || !req.files.imageFile) {
      return res.status(400).json({ message: "Please upload all files" })
    }

    const { title, artist, albumId, duration } = req.body;
    const audioFile = req.files.audioFile;
    const imageFile = req.files.imageFile;
    const song = new Song({
      title,
      artist,
      audioUrl,
      imageUrl,
      duration,
      albumId: albumId || null,
    });

    await song.save();

    // if song belongs to an album, update the album's songs array
    if(albumId) {
      await Album.findByIdAndUpdate(albumId, {
        $push: { songs: song._id },
      })
    }

    res.status(201).json(song)
  } catch (error) {
    console.log("Error in createSong", error);
    next(error);
  }
}