const movies = [
  {
    movieName: "The Thing",
    releaseYear: 1982,
    directedBy: "Carpenter",
    runningTimeInMinutes: 109,
  },
  {
    movieName: "Aliens",
    releaseYear: 1986,
    directedBy: "Cameron",
    runningTimeInMinutes: 137,
  },
  {
    movieName: "Men in Black",
    releaseYear: 1997,
    directedBy: "Sonnenfeld",
    runningTimeInMinutes: 98,
  },
  {
    movieName: "Predator",
    releaseYear: 1987,
    directedBy: "McTiernan",
    runningTimeInMinutes: 107,
  },
];
// debugger;
// console.log(movies.sort(byProperty("releaseYear", ">")));
// виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty("runningTimeInMinutes", "<")));
// // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
// console.log(movies.sort(byProperty("movieName", ">")));
// // виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
  switch (direction) {
    case ">":
      return (a, b) => (a[property] > b[property] ? 1 : -1);
    case "<":
      return (a, b) => (b[property] < a[property] ? -1 : 1);
    default:
      break;
  }
}

/////

function someFunction(x, y) {
  console.log(x + y);
}

function slower(func, seconds) {
  return function (...args) {
    console.log("Chill out, you will get your result in 5 seconds");
    let result = window.setTimeout(function () {
      func(...args);
    }, seconds * 1000);
    return result;
  };
}

let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор і задає значення вповільнення

slowedSomeFunction(4, 9); // викликаєте декоратор

// виведе в консоль "Chill out, you will get you result in 5 seconds
//...через 5 секунд виведе результат роботи 'someFunction'
