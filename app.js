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

const bookTitle = document.getElementById('bookname');
const bookAuthor = document.getElementById('author');
const bookPages = document.getElementById('pages');
const checkbox = document.getElementById('read');
const readLabel = document.getElementById('readlabel');
const pop = document.getElementById('popup');
let knjiga;

function Book(bookName, author, pages, read) {
  this.bookName = bookName;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function loop() {
  document.getElementById('main').innerText = '';
  myLibrary.forEach((book) => {
    const div = document.createElement('div');
    const name = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const readStatus = document.createElement('div');
    const deleteBook = document.createElement('button');
    const buttons = document.createElement('div');
    name.innerText = `${book.bookName}`;
    author.innerText = `${book.author}`;
    pages.innerText = `${book.pages} Pages`;
    readStatus.innerText = `${book.read === true ? 'Read' : 'Not read'}`;
    buttons.appendChild(readStatus);
    buttons.appendChild(deleteBook);
    buttons.classList.add('cardbuttons');
    div.classList.add('bookdiv');
    div.appendChild(name);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(buttons);
    document.getElementById('main').appendChild(div);
  });
}

function addBooktoLibrary() {
  knjiga = new Book();
  if (
    bookAuthor.value !== '' ||
    bookTitle.value !== '' ||
    bookPages.value !== ''
  ) {
    knjiga.bookName = bookTitle.value;
    knjiga.author = bookAuthor.value;
    knjiga.pages = bookPages.value;
    knjiga.read = checkbox.checked;
    myLibrary.push(knjiga);
    loop();
    pop.style.visibility = 'hidden';
  }
}
function popup() {
  if (pop.style.visibility === 'visible') {
    pop.style.visibility = 'hidden';
  } else {
    pop.style.visibility = 'visible';
  }
}
function readButton() {
  if (checkbox.checked !== true) {
    readLabel.style.backgroundColor = 'green';
    readLabel.innerText = 'Read';
  } else {
    readLabel.style.backgroundColor = 'red';
    readLabel.innerText = 'Not read';
  }
}

document.getElementById('form').onsubmit = (e) => {
  e.preventDefault();
  addBooktoLibrary();
  document.getElementById('form').reset();
  checkbox.checked = false;
  readLabel.style.backgroundColor = 'red';
  readLabel.innerText = 'Not read';
};
document.getElementById('addbook').onclick = () => popup();
document.getElementById('closebutton').onclick = () => popup();
document.getElementById('readlabel').onclick = () => readButton();
loop();
