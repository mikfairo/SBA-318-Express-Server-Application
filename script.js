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

  for (const manga of data) { //manga descriptions, summary, images etc 
    const mangaDiv = document.createElement("div");
    const mangaContentDiv = document.createElement("div");
    mangaContentDiv.id = "manga-text-div";
    mangaDiv.id = "manga-div";
    const titleText = document.createElement("h2");
    titleText.textContent = manga.title;
    const authorText = document.createElement("p");
    authorText.textContent = `Author: ${manga.author}`;
    const descriptionText = document.createElement("p");
    descriptionText.textContent = `Summary: ${manga.description}`;
    const thumbnailthumbNail = document.createElement("img");
    thumbnailthumbNail.classList.add("thumbnail");
    thumbnailthumbNail.src = manga.thumbnail;
    mangaContentDiv.appendChild(titleText);
    mangaContentDiv.appendChild(authorText);
    mangaContentDiv.appendChild(descriptionText);
    let genreString = "";
    for (const genre of manga.genres) {
      //to add genres grouped together
      genreString += genre + " ";
    }
    const genreText = document.createElement("p"); //genres array
    genreText.id = "genre-text";
    genreText.textContent = genreString;
    mangaContentDiv.appendChild(genreText);
    mangaDiv.appendChild(thumbnailthumbNail);
    mangaDiv.appendChild(mangaContentDiv);
    mangaDataDiv.appendChild(mangaDiv);
  }

  //   .append(printData)
});

const addNewBookButton = document.getElementById("add-new-book-button");

addNewBookButton.addEventListener("click", async () => { //where user adds a new book 
  const mangaDataDiv = document.getElementById("manga-data");
  mangaDataDiv.replaceChildren([]); //main div with inner divs for each manga data text'
  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title:";
  const titleInput = document.createElement("input");

  const authorLabel = document.createElement("label");
  authorLabel.textContent = "Author:";
  const authorInput = document.createElement("input");

  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description:";
  const descriptionInput = document.createElement("input");

  const genreLabel = document.createElement("label");
  genreLabel.textContent = "Genre:";
  const genresInput = document.createElement("input");

  const thumbnailLabel = document.createElement("label");
  thumbnailLabel.textContent = "thumbnail src:";
  const thumbNailInput = document.createElement("input");

  const addBookbutton = document.createElement("button");
  addBookbutton.textContent = "Add Book";

  addBookbutton.addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/add-book", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleInput.value,
        author: authorInput.value,
        description: descriptionInput.value,
        genres: genresInput.value,
        thumbNail: thumbNailInput.value,
      }),
    });

    const data = await response.json();
    console.log(data);
  });
  const newBookDiv = document.createElement("div");

  newBookDiv.appendChild(titleLabel);
  newBookDiv.appendChild(titleInput);
  newBookDiv.appendChild(authorLabel);
  newBookDiv.appendChild(authorInput);
  newBookDiv.appendChild(descriptionLabel);
  newBookDiv.appendChild(descriptionInput);
  newBookDiv.appendChild(genreLabel);
  newBookDiv.appendChild(genresInput);
  newBookDiv.appendChild(thumbnailLabel);
  newBookDiv.appendChild(thumbNailInput);
  newBookDiv.appendChild(addBookbutton);
  mangaDataDiv.appendChild(newBookDiv);
});

const updateBookButton = document.getElementById("update-book-button");

updateBookButton.addEventListener("click", async () => {
  const mangaDataDiv = document.getElementById("manga-data");
  mangaDataDiv.replaceChildren([]); //main div with inner divs for each manga data text'

  const bookTitleToEditLabel = document.createElement("label");
  bookTitleToEditLabel.textContent = "Book Title to Edit:";
  const bookTitleToEditInput = document.createElement("input");

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "New Title:";
  const titleInput = document.createElement("input");

  const authorLabel = document.createElement("label");
  authorLabel.textContent = "New Author:";
  const authorInput = document.createElement("input");

  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "New Description:";
  const descriptionInput = document.createElement("input");

  const genreLabel = document.createElement("label");
  genreLabel.textContent = "New Genre:";
  const genresInput = document.createElement("input");
  
  const thumbnailLabel = document.createElement("label");
  thumbnailLabel.textContent = "New thumbNail src:";
  const thumbNailInput = document.createElement("input");

  const addBookbutton = document.createElement("button");
  addBookbutton.textContent = "Update Book";

  addBookbutton.addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/update-book", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oldBookTitle: bookTitleToEditInput.value,
        title: titleInput.value,
        author: authorInput.value,
        description: descriptionInput.value,
        genres: genresInput.value,
        thumbnail: thumbNailInput.value,
      }),
    });

    const data = await response.json();
    console.log(data);
  });
  const addBookDIv = document.createElement("div");

  addBookDIv.appendChild(bookTitleToEditLabel);
  addBookDIv.appendChild(bookTitleToEditInput);
  addBookDIv.appendChild(titleLabel);
  addBookDIv.appendChild(titleInput);
  addBookDIv.appendChild(authorLabel);
  addBookDIv.appendChild(authorInput);
  addBookDIv.appendChild(descriptionLabel);
  addBookDIv.appendChild(descriptionInput);
  addBookDIv.appendChild(genreLabel);
  addBookDIv.appendChild(genresInput);
  addBookDIv.appendChild(thumbnailLabel);
  addBookDIv.appendChild(thumbNailInput);
  addBookDIv.appendChild(addBookbutton);
  mangaDataDiv.appendChild(addBookDIv);
});

const deleteBookButton = document.getElementById("delete-book-button");

deleteBookButton.addEventListener("click", async () => { //to delete 
  const mangaDataDiv = document.getElementById("manga-data");
  mangaDataDiv.replaceChildren([]); //clears current div loadout
  const bookTitleToDeleteLabel = document.createElement("label");
  bookTitleToDeleteLabel.textContent = "Book Title to Delete:";
  const bookTitleToDeleteInput = document.createElement("input");
  
  const deleteBookButton = document.createElement("button");
  deleteBookButton.textContent = "Delete Book";

  deleteBookButton.addEventListener("click", async () => {
    const response = await fetch("http://localhost:3000/delete-book", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookToDeleteTitle: bookTitleToDeleteInput.value,
      }),
    });

    const data = await response.json();
    console.log(data);
  });
  const deleteBookDiv = document.createElement("div");

  deleteBookDiv.appendChild(bookTitleToDeleteLabel);
  deleteBookDiv.appendChild(bookTitleToDeleteInput);
  deleteBookDiv.appendChild(deleteBookButton);

  mangaDataDiv.appendChild(deleteBookDiv);
});
