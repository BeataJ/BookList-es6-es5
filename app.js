// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// add book to list
UI.prototype.addBookToList = function(book) {
  console.log(book);
}

// Event Listener
document.getElementById('book-form').addEventListener('submit', function(e) {
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;    
        
  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiante UI
  const ui = new UI();

  // Add book to list
  ui.addBookToList(book)

  

  e.preventDefault();
});