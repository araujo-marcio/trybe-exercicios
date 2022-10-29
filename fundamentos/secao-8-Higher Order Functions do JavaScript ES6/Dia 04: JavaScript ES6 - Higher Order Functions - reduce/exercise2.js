const {books} = require('./libraryData');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.reduce((acc, curr) => acc += `${curr.author.name}, `, "");
}

console.log(reduceNames());
console.log(typeof reduceNames());
