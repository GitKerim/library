const myLibrary = [
  { bookName: 'knjiga', author: 'wqe', pages: '123', read: true },
  { bookName: 'knjiga2', author: 'wqe', pages: '321', read: false },
  { bookName: 'knjiga3', author: 'wqe', pages: '213', read: true },
];
let knjiga;
function Book(bookName, author, pages, read) {
  this.bookName = bookName;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

myLibrary.forEach((book) => {
  const div = document.createElement('div');
  div.innerText = `name ${book.bookName} author ${book.author}`;
  div.classList.add('bookdiv');
  document.getElementById('main').appendChild(div);
});

function addBooktoLibrary() {
  knjiga = new Book();
  knjiga.bookName = prompt('b');
  knjiga.author = prompt('a');
  knjiga.pages = prompt('p');
  knjiga.read = prompt('r');
  myLibrary.push(knjiga);
}
