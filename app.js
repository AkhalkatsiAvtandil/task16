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
