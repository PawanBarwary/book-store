const form = document.querySelector('form');
const displayArea = document.querySelector('.display-area')

let books = [];

function book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBook = (book) => books.push(book);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.getElementById('book').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const yesButton = document.getElementById('yes');
  const noButton = document.getElementById('no');
  let read = null;
  if(yesButton.checked) {
    read = true;
  }
  else if (noButton.checked) {
    read = false;
  }
  
  const newBook = new book(name, author, pages, read);
  addBook(newBook);
  renderBooks();
});

books.push(
  new book("Harry Potter", "JK Rowling", 899, true)
);

books.push(
  new book("Lord Of the rings", "Beared men", 999, false)
);

const renderBooks = () => {
  displayArea.innerHTML = "";

  books.forEach( book => {
    const div = document.createElement('div');
    div.classList.add('book');
    const title = document.createElement('h2');
    title.textContent = book.name;
    const author = document.createElement('h2');
    author.textContent = book.author;
    const pages = document.createElement('p');
    pages.textContent = book.pages;
    const read = document.createElement('p');
    read.textContent = book.read;
    
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    displayArea.appendChild(div);
  });
};

renderBooks();





