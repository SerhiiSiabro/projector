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

// console.log(movies.sort(byProperty("releaseYear", ">")));
// // виведе масив фільмів посортованих по року випуску, від старішого до новішого
// console.log(movies.sort(byProperty("runningTimeInMinutes", "<")));
// // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
// console.log(movies.sort(byProperty("movieName", ">")));
// // виведе масив фільмів посортованих по назві, в алфавітному порядку

// function byProperty(property, direction) {
//   const initialMapData = movies.map((movies) => {
//     const uniqueKey = `${movie.property} ${movie.property}`;
//     return [];
//   });
// }
