let bookLibrary = [];

const bookGrid = document.getElementById("book-grid");
const bookForm = document.getElementById("book-form");
const addBtn = document.getElementById("add-btn");

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
    updateBookCards();
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
            <div class="actions">
                <button class="status-btn ${book.read? "read" : "not-read"}" onclick="changeStatus('${book.id}')">${book.read? "Read" : "Not Yet"}</button>
                <button class="remove" onclick="removeBook('${book.id}')">Remove</button>
            </div>
        `;

        bookGrid.appendChild(card);
    });
}

addBtn.addEventListener('click', (e) => {
    bookForm.classList.remove("off");
});

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById("book-title").value;
    const author = document.getElementById("book-author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("status").checked;

    addBookToLibrary(title, author, pages, read);

    bookForm.classList.add("off");
});

function removeBook(bookId){
    bookLibrary = bookLibrary.filter(book => book.id !== bookId);

    updateBookCards();
}

function changeStatus(bookId) {
    const book = bookLibrary.find(item => item.id === bookId);
    
    book.read = !book.read;

    updateBookCards();
}