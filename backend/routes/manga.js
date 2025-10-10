import express from "express";
import mangas from "../data/manga-data.js";

const mangaRoute = express.Router();

mangaRoute.get("/get-all-data", (req, res) => {
  return res.json(mangas);
});
mangaRoute.post("/", (req, res) => {
    console.log(req.body);
  const mangasThatMatchesGenre = [];

  for (const manga of mangas) {
    for (const genre of manga.genres) {
    
      if (req.body.genre === genre) {
        mangasThatMatchesGenre.push(manga);
      }
    }
  }
  console.log(mangasThatMatchesGenre);
  return res.json(mangasThatMatchesGenre);
});

export default mangaRoute;
