

function myBookService() {
    this.rentBook = [];
    this.book = [{book: "happy frog", id: 1 }, { book: "destiny", id: 2 }];
}

myBookService.prototype = {
    //adds new books to the book array
    addNewBooks: function (book) {
        this.book.push(book)
        return this.book;
    },
    //rents out books from the book array and stores the value in a rentBook array
    rent: function (index) {
        let bookIndex;
        for (let i = 0; i < this.book.length; i++) {
            if (this.book[i].id === index) {
                bookIndex = i;
            }
        }
        this.rentBook.push(this.book[bookIndex]);
        this.book.splice(bookIndex, 1);
        return [this.rentBook, this.book]
    },
    //return books that has been rented out
    returnRentedBooks: function (index) {
        let bookIndex;
        for (let i = 0; i < this.rentBook.length; i++) {
            if (this.rentBook[i].id === index) {
                bookIndex = i;
                break;
            }
        }
        this.book.push(this.rentBook[bookIndex]);
        this.rentBook.splice(bookIndex, 1);
        return [this.rentBook, this.book];

    },
    //gets all the book in the book array
    getAllBooks: function () {
        return this.book;
    },
    //gets all the books in the rentBook array
    getRentedBooks: function () {
        return this.rentBook;
    },
    // delete a book from the book array
    deleteBook: function (bookid) {
        let bookIndex;
        //looping through the array 
        for (let i = 0; i < this.book.length; i++) {
            //check if the book id provided in the params can be found in the array
            if (this.book[i].id === bookid) {
                bookIndex = i;
            }
        }

        this.book.splice(bookIndex, 1);
        return this.book;

    }
}



module.exports = myBookService;