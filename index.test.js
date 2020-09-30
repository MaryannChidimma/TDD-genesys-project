
const myBookService = require('./index');

const bookService = new myBookService();

test('Adds books to a book array', () => {
    expect(bookService.addNewBooks({ book: "Chike and the river", id: 3 })).toEqual([{ book: "happy frog", id: 1 }, { book: "destiny", id: 2 }, { book: "Chike and the river", id: 3 }]);
})

test('Rents books Out', () => {

    expect(bookService.rent(1)).toEqual([[{ book: "happy frog", id: 1 }], [{ book: "destiny", id: 2 }, { book: 'Chike and the river', id: 3 }]])
})

test('return books', () => {
    expect(bookService.returnRentedBooks(1)).toEqual([[], [{ book: "destiny", id: 2 }, { book: "Chike and the river", id: 3 }, { book: "happy frog", id: 1 }]])
})
test('delete books', () => {
    expect(bookService.deleteBook(1)).toEqual([{ book: "destiny", id: 2 }, { book: "Chike and the river", id: 3 }])
})


