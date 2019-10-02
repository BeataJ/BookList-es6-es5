// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}


// Event Listener
document.getElementById('book-form').addEventListener('submit', function(e) {
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;    
        
  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiante UI
  const UI = new UI();

  

  console.log(book);

  e.preventDefault();
});