// console.log("hello world");
const myArray = [1121, 1453, 1071, 1203, 1195, 1556];
const myArraysum =
  myArray[0] + myArray[1] + myArray[2] + myArray[3] + myArray[4] + myArray[5];

console.log(myArraysum);

const myArrayarithmeticmean = myArraysum / myArray.length;
console.log(myArrayarithmeticmean);

// objects
const abMovie = {
  movieName: "MATRIX",
  genre: "fantasy",
  streamingPlatforms: [
    "ge.movies",
    "mykadri.com",
    "adjaranet.to",
    "hdtodayz.to",
  ],
};

const combinedtext =
  abMovie.movieName +
  " which is a " +
  abMovie.genre +
  " movie, is available on " +
  abMovie.streamingPlatforms[0] +
  ".";
//   abMovie.streamingPlatforms.join(" ");
console.log(combinedtext);

// array

const bestOfThree = [
  // test:{არ ვიცი რატომ მაგრამ ამ შემთხვევაში ფროფერთის მერე ორწერტილს რომ ვსვავ ფრითიერი მასწორებინებს
  // }
  {
    bestooFFantasy: {
      title: "the lord of the rings",
      author: "J.R.R Tolkien",
      yearPublished: 2000,
    },
    bestooFAction: {
      title: "the lord of the rings",
      author: "Probert Rodart",
      yearPublished: 1998,
    },
    bestooFDetective: {
      title: "True Detective",
      author: "Nic Pizzolatto",
      yearPublished: 2014,
    },
  },
];
console.log(bestOfThree);
