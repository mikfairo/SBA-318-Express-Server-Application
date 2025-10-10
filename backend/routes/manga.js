import express from "express";
import mangas from "../data/manga-data.js";

const mangaRoute = express.Router();

mangaRoute.get("/get-all-data",(req,res) => {
    return res.json(mangas);
});
mangaRoute.post("/", (req, res) => {
    const genre = req.body.genre;
    console.log(genre);
});

export default mangaRoute;