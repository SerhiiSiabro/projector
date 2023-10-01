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
// console.log(movies.sort(byProperty("runningTimeInMinutes", "<")));
// // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log(movies.sort(byProperty("movieName", ">")));
// // виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
  if (property === "releaseYear" || property === "runningTimeInMinutes") {
    switch (direction) {
      case ">":
        return (a, b) => a[property] - b[property];
      case "<":
        return (a, b) => b[property] - a[property];
      default:
        break;
    }
  }
  if (property === "movieName") {
    // byString(property, direction);
    return (a, b) => {
      const firstValue = a[property].toUpperCase();
      const secondValue = b[property].toUpperCase();
      switch (direction) {
        case ">":
          if (firstValue < secondValue) {
            return -1;
          }
          if (firstValue > secondValue) {
            return 1;
          }
          return 0;
        case "<":
          if (firstValue > secondValue) {
            return -1;
          }
          if (firstValue < secondValue) {
            return 1;
          }
          return 0;
        default:
          break;
      }
    };
  }
}
// function byString(property, direction) {
//   return (a, b) => {
//     const firstValue = a[property].toUpperCase();
//     const secondValue = b[property].toUpperCase();
//     switch (direction) {
//       case ">":
//         if (firstValue < secondValue) {
//           return -1;
//         }
//         if (firstValue > secondValue) {
//           return 1;
//         }
//         return 0;
//       case "<":
//         if (firstValue > secondValue) {
//           return -1;
//         }
//         if (firstValue < secondValue) {
//           return 1;
//         }
//         return 0;
//       default:
//         break;
//     }
//   };
// }
