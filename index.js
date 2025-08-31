const library = []

const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const yearInput = document.getElementById('year')
const pagesInput = document.getElementById('pages')

const newBookBtn = document.getElementById('new-book')
const dialog = document.querySelector('dialog')

newBookBtn.addEventListener('click', () => {
  dialog.showModal()
})

function resetInputs() {
  titleInput.value = ''
  authorInput.value = ''
  yearInput.value = ''
  pagesInput.value = ''
}

document.querySelector('form').addEventListener('submit', getFormData)

function getFormData(e) {
  e.preventDefault()
  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    yearInput.value,
    pagesInput.value,
    false
  )
  dialog.close()
  resetInputs()
}

const cancelBtn = document.getElementById('cancel')
cancelBtn.addEventListener('click', resetInputs)
cancelBtn.addEventListener('click', () => {
  dialog.close()
})

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
  library.push(newBook)

  displayBookInLibrary(title, author, year, amountOfPages, booksId)
}

function displayBookInLibrary(title, author, year, amountOfPages, id) {
  const bookCardDiv = document.createElement('div')
  bookCardDiv.classList.add('book-card')
  bookCardDiv.setAttribute('data-id', id)
  bookCardsDiv.appendChild(bookCardDiv)

  const bookDiv = document.createElement('div')
  bookDiv.classList.add('book')
  bookCardDiv.appendChild(bookDiv)

  const authorPara = document.createElement('p')
  authorPara.classList.add('author')
  authorPara.innerHTML = `Written by ${author}`
  bookDiv.appendChild(authorPara)

  const titlePara = document.createElement('p')
  titlePara.classList.add('title')
  titlePara.innerHTML = title
  const breakString = document.createElement('br')
  titlePara.appendChild(breakString)
  const yearsSpan = document.createElement('span')
  yearsSpan.innerHTML = `(${year})`
  titlePara.appendChild(yearsSpan)
  bookDiv.appendChild(titlePara)

  const pagesPara = document.createElement('p')
  pagesPara.classList.add('pages')
  pagesPara.innerHTML = amountOfPages
  bookDiv.appendChild(pagesPara)

  const deleteBookBtn = document.createElement('button')
  deleteBookBtn.classList.add('delete')
  deleteBookBtn.innerText = 'X'
  deleteBookBtn.setAttribute('type', 'button')
  bookCardDiv.appendChild(deleteBookBtn)
}

addBookToLibrary('Atomic Habbits', 'MACAN', 2004, 354)
