const myLibrary = [];
let knjiga;
function Book(bookName, author, pages, read) {
  this.bookName = bookName;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBooktoLibrary() {
  knjiga = new Book();
  knjiga.bookName = prompt('b');
  knjiga.author = prompt('a');
  knjiga.pages = prompt('p');
  knjiga.read = prompt('r');
  myLibrary.push(knjiga);
}

function loop() {
  myLibrary.forEach((book) => {
    const div = document.createElement('div');
    div.innerText = `name ${book.bookName} author ${book.author}`;
    div.classList.add('bookdiv');
    document.getElementsByClassName('main')[0].appendChild(div);
  });
}
