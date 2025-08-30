const library = [
  {
    title: 'Atomic Habits',
    author: 'someone',
    year: 2007,
    amountOfPages: 567,
    isRead: false,
    id: 'sdvklsdnv-mcnoi3ovnid-cnvksdlnvkn',
  },
]

document.querySelector('form').addEventListener('submit',(e) => {
  e.preventDefault()
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const year = document.getElementById('year').value
  const pages = document.getElementById('pages').value
  addBookToLibrary(title, author, year, pages, false);
  dialog.close()
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('year').value = undefined;
  document.getElementById('pages').value = undefined;
})



const newBookBtn = document.getElementById('new-book');
const dialog = document.querySelector('dialog');

newBookBtn.addEventListener('click', () => {
  dialog.showModal()
});



function Book(title, author, year, amountOfPages, isRead, id) {
  this.id = id
  this.title = title
  this.author = author
  this.year = year
  this.amountOfPages = amountOfPages
  this.isRead = isRead
}

const bookCardsDiv = document.querySelector('.book-cards')

function addBookToLibrary(title, author, year, amountOfPages, isRead) {
  const booksId = crypto.randomUUID()
  const newBook = new Book(title, author, year, amountOfPages, isRead, booksId)
  library.push(newBook);

  displayBookInLibrary(title, author, year, amountOfPages)
}

function displayBookInLibrary(title, author, year, amountOfPages) {
  const bookCardDiv = document.createElement('div')
  bookCardDiv.classList.add('book-card')
  bookCardsDiv.appendChild(bookCardDiv)

  const authorPara = document.createElement('p')
  authorPara.classList.add('author')
  authorPara.innerHTML = author
  bookCardDiv.appendChild(authorPara)

  const titlePara = document.createElement('p')
  titlePara.classList.add('title')
  titlePara.innerHTML = title
  const breakString = document.createElement('br')
  titlePara.appendChild(breakString)
  const yearsSpan = document.createElement('span')
  yearsSpan.innerHTML = `(${year})`
  titlePara.appendChild(yearsSpan)
  bookCardDiv.appendChild(titlePara)

  const pagesPara = document.createElement('p')
  pagesPara.classList.add('pages')
  pagesPara.innerHTML = amountOfPages
  bookCardDiv.appendChild(pagesPara)
}
