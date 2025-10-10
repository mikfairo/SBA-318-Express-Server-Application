import express from "express";
import mangaRoute from "./routes/manga.js";
import CORS from "cors"; //preventing error of CORS policy error

const app = express();
const PORT = 3000;

app.use(CORS());
app.use(express.json()); //middleware
app.use(mangaRoute); //middleware

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
