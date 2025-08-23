const library = [
  {
    title: 'Atomic Habits',
    author: 'someone',
    year: 2007,
    amountOfPages: 567,
    isRead: false,
    id: 'sdvklsdnv-mcnoi3ovnid-cnvksdlnvkn',
  },
  {
    title: 'Mindfulness',
    author: 'someone',
    year: 2005,
    amountOfPages: 403,
    isRead: true,
    id: 'sdvklsdnv-mcnoi3ovnid-cnvksdlnvkn',
  },
  {
    title: 'Drei Kameraden',
    author: 'Remark',
    year: 2003,
    amountOfPages: 889,
    isRead: true,
    id: 'sdvklsdnv-mcnoi3ovnid-cnvksdlnvkn',
  },
]

function Book(title, author, year, amountOfPages, isRead, id) {
	this.id = id;
	this.title = title;
	this.author = author;
	this.year = year;
	this.amountOfPages = amountOfPages;
	this.isRead = isRead;
}


function addBookToLibrary(title, author, year, amountOfPages, isRead) {
	const booksId = crypto.randomUUID();
	const newBook = new Book(title, author, year, amountOfPages, isRead, booksId);
	library.push(newBook)
}

function logBooks() {
	for (let i = 0; i < library.length; i++) {
		console.log(library[i])
	}
}