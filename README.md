# 📚 Book Library

A minimal client-side web app to track your personal reading list. Add books, mark them as read or unread, and remove them — all without a backend.

🔗 **[View Live Preview](https://alrayyan2157.github.io/Library/)**

---

## Features

- Add books with title, author, page count, and read status
- Toggle read / not yet read on any book
- Remove books from your collection
- Clean grid layout with a persistent sidebar form
- Zero dependencies — pure HTML, CSS, and JavaScript

## Project Structure

```
book-library/
├── index.html    # App markup and layout
├── styles.css    # Grid layout and minimal styling
└── script.js     # Book logic and DOM updates
```

## Getting Started

No build step needed. Just open `index.html` in a browser:

```bash
# Clone the repo
git clone https://github.com/your-username/book-library.git

# Open directly
open index.html
```

## How It Works

Books are stored in a plain JavaScript array (`bookLibrary`) in memory. Each book is a simple object with a UUID, title, author, page count, and read status. The grid re-renders on every add, remove, or status change.

> **Note:** Data is not persisted — refreshing the page resets the library. To save state, `localStorage` can be added to `script.js`.