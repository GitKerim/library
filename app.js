const myLibrary = [
  {
    bookName: 'The Fellowship of the Ring',
    author: 'J. R. R. Tolkien',
    pages: '423',
    read: true,
  },
  {
    bookName: 'The Two Towers',
    author: 'J. R. R. Tolkien',
    pages: '352',
    read: true,
  },
  {
    bookName: 'The Return of the King',
    author: 'J. R. R. Tolkien',
    pages: '416',
    read: true,
  },
];
let knjiga;
let div;
function Book(bookName, author, pages, read) {
  this.bookName = bookName;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function loop() {
  document.getElementById('main').innerText = '';
  myLibrary.forEach((book) => {
    div = document.createElement('div');
    div.innerText = `${book.bookName} ${book.author} ${book.pages} ${
      book.read ? 'read' : 'not read'
    }`;
    div.classList.add('bookdiv');
    document.getElementById('main').appendChild(div);
  });
}

function addBooktoLibrary() {
  knjiga = new Book();
  knjiga.bookName = prompt('b');
  knjiga.author = prompt('a');
  knjiga.pages = prompt('p');
  knjiga.read = prompt('r');
  myLibrary.push(knjiga);
  loop();
}
loop();
