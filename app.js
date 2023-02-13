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
const readStatus = document.getElementById('read');
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
    const read = document.createElement('p');
    name.innerText = `${book.bookName}`;
    author.innerText = `${book.author}`;
    pages.innerText = `${book.pages} pages`;
    read.innerText = `${book.read ? 'Read' : 'Not read'}`;
    div.classList.add('bookdiv');
    div.appendChild(name);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
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
    knjiga.read = readStatus.value;
    myLibrary.push(knjiga);
    loop();
  }
}
function popup() {
  const pop = document.getElementById('popup');
  pop.style.visibility === 'visible'
    ? (pop.style.visibility = 'hidden')
    : (pop.style.visibility = 'visible');
}
function readButton() {
  const checkbox = document.getElementById('read');
  const read = document.getElementById('readlabel');
  checkbox.checked === true
    ? (read.style.backgroundColor = 'red')((read.innerText = 'Not read'))
    : (read.style.backgroundColor = 'green')((read.innerText = 'Read'));
}

document.getElementById('form').onsubmit = (e) => {
  e.preventDefault();
  addBooktoLibrary();
};
document.getElementById('addbook').onclick = () => popup();
document.getElementById('closebutton').onclick = () => popup();
document.getElementById('readlabel').onclick = () => readButton();
loop();
