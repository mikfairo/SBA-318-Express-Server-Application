import express from "express";
import mangas from "../backend/data/manga-data.js";

const mangaRoute = express.Router();

mangaRoute.get("/",(req,res) => {
    return res.json(mangas);
});

export default mangaRoute;