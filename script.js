let bookLibrary = [];

const bookGrid = document.getElementById("book-grid");

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    bookLibrary.push(book);
    updateBookCards(book);
}
function updateBookCards(){
    bookGrid.innerHTML = "";

    bookLibrary.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.setAttribute("data-id", book.id);

        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>By ${book.author}</p>
            <button class="status-btn ${book.read? "read" : "not-read"}">${book.read? "Read" : "Not Yet"}</button>
        `;

        bookGrid.appendChild(card);
    });
}