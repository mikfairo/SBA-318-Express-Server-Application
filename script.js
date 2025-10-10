const getAllDataButton = document.getElementById("get-all-data-button");

getAllDataButton.addEventListener("click", async () => {
  // console.log(myInputElement.value);
  const response = await fetch("http://localhost:3000/get-all-data");
  const data = await response.json();
  console.log(data);
});
const getAllGenresInput = document.getElementById(
  "get-all-mangas-by-genre-input"
);
const getAllGenresButton = document.getElementById(
  "get-all-mangas-by-genre-button"
);
getAllGenresButton.addEventListener("click", async () => {
  //button for users to click to get mangas based off genre
  const response = await fetch("http://localhost:3000/find-books-by-genre", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ genre: getAllGenresInput.value }),
  });
  const data = await response.json();
  console.log(data);

  const mangaDataDiv = document.getElementById("manga-data");
  mangaDataDiv.replaceChildren([]); //main div with inner divs for each manga data text

  for (const manga of data) {
    const mangaDiv = document.createElement("div");
    const titleText = document.createElement("h2");
    titleText.textContent = manga.title;
    const authorText = document.createElement("p");
    authorText.textContent = `Author: ${manga.author}`;
    const descriptionText = document.createElement("p");
    descriptionText.textContent = `Summary: ${manga.description}`;
    const thumbnailImage = document.createElement("img");
    thumbnailImage.src = manga.thumbnail;
    thumbnailImage.style.maxWidth = "150px"; //will add a CSS file later
    mangaDiv.appendChild(titleText);
    mangaDiv.appendChild(authorText);
    mangaDiv.appendChild(descriptionText);
    let genreString = "";
    for (const genre of manga.genres) {
        genreString += genre + " ";
    }
    const genreText = document.createElement("p");
    genreText.id = "genre-text";
    genreText.textContent = genreString;
    mangaDiv.appendChild(genreText);
    mangaDiv.appendChild(thumbnailImage);
    mangaDataDiv.appendChild(mangaDiv);
  }

  //   .append(printData)
});
