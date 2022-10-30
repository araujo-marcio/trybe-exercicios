const {books} = require('./libraryData');

const expectedResult = 43;

function averageAge() {
  const mediaBruta = books.reduce((acc, book) =>
  acc += (book.releaseYear - book.author.birthYear) / books.length, 0);
  const media = mediaBruta.toFixed();
  return media;
}
 
console.log(averageAge());