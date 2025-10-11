import express from "express";
import mangas from "../data/manga-data.js";

let data = mangas // import makes mangas constant so we use data
const mangaRoute = express.Router();

mangaRoute.get("/get-all-data", (req, res) => {
  return res.json(data);
});
mangaRoute.post("/find-books-by-genre", (req, res) => {
  console.log(req.body);
  const mangasThatMatchesGenre = [];

  for (const manga of data) {
    //each manga of mangas array
    for (const genre of manga.genres) {
      //each genre of each manga genres
      if (req.body.genre === genre) {
        mangasThatMatchesGenre.push(manga);
      }
    }
  }
  return res.json(mangasThatMatchesGenre);
});

mangaRoute.put("/add-book", (req, res) => {
  console.log(req.body);
  req.body.genres = [req.body.genres]; //genres neecds to be an array otherwise find books by genre wont work bc it checks genres like an array
  data.push(req.body);
  res.json("added book!")
});

mangaRoute.patch("/update-book", (req, res) => {
  console.log(req.body)
  const bookTitleToUpdate = req.body.oldBookTitle;
  for (const manga of data) {
    //each manga of mangas array
    if (manga.title === bookTitleToUpdate) { //if the title matches the title user wants to update then it changes manga data to the request data
      manga.title = req.body.title;
      manga.author = req.body.author;
      manga.description = req.body.description;
      manga.genres = [req.body.genres];
      manga.thumbnail = req.body.thumbnail;
    }
  }
  
  console.log(data)
  res.json("updated book!")
});


mangaRoute.delete("/delete-book", (req, res) => {
  console.log(req.body);
  const bookToDelete = req.body.bookToDeleteTitle
  for (let i = 0; i < data.length; i++) { // looks through mangas until title matches 
    if (data[i].title === bookToDelete) {
      data.splice(i, 1); // from where this book is, delete 1 book from data (the book we're looking at)
      console.log("Book removed")
    }
  }
  res.json("deleted book!")
});

export default mangaRoute;
