// define books
let library = [];
function Book(title, author) {
    this.title = title;
    this.author = author;
    this.availability = true;
    this.holder = null;
}
//add new book
function addBook(title, author) {
    let newBook = new Book(title, author);
    library.push(newBook);
    console.log(`${title} by ${author} has been added to the library`);
}
addBook("system analysis and design","rubasha chrales");
addBook("fundamental programing language","nsabiyumva jmv");
addBook("fundamental algrothim"," uwiduhaye esther");
addBook('javascript fundamentay','shimirwa bernarad');
//dispalyed  book avaible in libray
function displayAvailableBooks() {
    console.log("Available Books:");
    for (let book of library) {
        if (book.availability) {
            console.log(`${book.title} by ${book.author} has been displayed`);
        }
    }
}
displayAvailableBooks();
//borrowed book in libray
function borrowBook(title, borrower) {
    for (let book of library) {
        if (book.title === title && book.availability) {
            book.availability = false;
            book.holder = borrower;
            console.log(`${borrower} has borrowed ${title}.`);
            return;
        }
    }
    console.log(`Sorry, ${borrower} this book ${title} is not available for borrowing.`);
}
borrowBook('system analysis and design','sylvie');
borrowBook('system','oliva');
borrowBook('system analys is and design','walter');
//return book
function returnBook(title) {
    for (let book of library) {
        if (book.title === title && !book.availability) {
            book.availability = true;
            book.holder = null;
            console.log(`${title} has been returned to the library.`);
            return;
        }
    }
    console.log(`Invalid return: ${title} was not borrowed.`);
}