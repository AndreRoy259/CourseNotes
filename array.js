// const bank = 250;
// bank = 100
//? ERROR - cannot modify a const variable, use let
// let bank = 250;
// let newBank = bank;
// bank = 100
//? OK

//! OBJECTS AND ARRAY REFERENCE TYPES
// const names = ["Ed", "Bubzy", "Andre"];
// names[1] = "Mac";
// names.push("Mom");
//? OK - Can modify an array or object

// names = [""];
// const names = ["Mom", "Dad"];
//? ERROR - Cannot change the whole array (create new)

// newNames = names;
// newNames.push("Me");
//? Names will have Me in it, 'cause newNames is a reference to names

//! HIGH ORDER FUNCTION - A function that takes another function as a parameter
// const videos = [
//   "Pranking",
//   "How to JavaScript",
//   "HTML Tutorial",
//   "learning piano",
//   "HTML Basics",
//   "css",
//   "java",
//   "programming",
//   "ui/ux",
// ];

//* FOREACH - Loop through the array
// videos.forEach(function (video) {
//     console.log(video);
// });

//? Hand-made example
// function repeater(fn) {
//     fn();
//     fn();
//     fn();
// }

// function sayHello() {
//     console.log("Hello");
// }

// repeater(sayHello);

//? Or with anonymous function - Like in forEach
// repeater(function () {
//     console.log("Hello!");
// })

//* MAP - Loops through an array and apply a function (modify, add, ...)
//? Return an array with the new upperCase values
// const newVideos = videos.map(function (video) {
//   return video.toUpperCase();
// });

// newVideos.push("Happy")
// console.log(newVideos);
// console.log(videos);
//? Still intact

//* FIND - Return the first occurance it finds that match the condition
// const searchTutorial = videos.find(function (video) {
//   return video.includes("HTML");
// });
// console.log(searchTutorial);

//* FILTER - Same as Find but return multiple values
// const shortSearch = videos.filter(function (video) {
//     return video.length < 10;
// });
// console.log(shortSearch);

//? Object of games title and rating
// const games = [
//   { title: "Mass Effect", rating: 9.5 },
//   { title: "League of Legends", rating: 5 },
//   { title: "Last of Us", rating: 10 },
//   { title: "God of War", rating: 10 },
//   { title: "WWE 2K20", rating: 4 },
// ];

//? Filter just the goodGames
// const goodGames = games.filter(function (game) {
//   return (game.rating > 9);
// });
// console.log(goodGames);

//* SOME and EVERY - A check to verify, returns return true or false
// const checkRating = games.every(function (game) {
//   return game.rating > 8;
// });
// console.log(checkRating);
//? return false - 'Cause not all game have a rating > 8

// const checkRating2 = games.some(function (game) {
//   return game.rating > 8;
// });
// console.log(checkRating2);
//? return true - 'Cause at least one game have a rating > 8

//! CALLBACK FUNCTION - It is executed when called by (forEach, event, fetch, ...)
//? The above anonymous function is a callback function
//? And so the function() below
// button.addEventlistener('click', function(){
//     console.log("...");
// });

//! TERNARY OPERATOR - Simpler if statement
// //? condition ? true : false
// const newVideos1 = videos.map(function (video) {
//   if (video.length < 10) {
//     return video;
//   } else {
//     return "nope";
//   }
// });
// //? Same but shorter
// const newVideos2 = videos.map(function (video) {
//   return video.length < 10 ? video : "nope";
// });

//! ARROW FUNCTION
// //? Old way
// const newVideos3 = videos.map(function (video) {
//   return video.length < 10 ? video : "nope";
// });
// //? Arrow way
// const newVideos4 = videos.map((video) => {
//   return video.length < 10 ? video : "nope";
// });
// //? Arrow way v2 - If there is only one param
// //? we can get rid of the () - Prettier don't want!
// const newVideos5 = videos.map((video) => {
//   return video.length < 10 ? video : "nope";
// });
// //? Arrow way v3 - If there is only one line of code in the function
// //? we can get rid of the {} ans the return
// const newVideos6 = videos.map((video) => (video.length < 10 ? video : "nope"));

// //? One line in the function
// const upperVidoes = videos.map((video) => video.toUpperCase());
// //? Multiple lines in the function
// const upperVidoes2 = videos.map((video) => {
//   const i = 0;
//   video.toUpperCase();
// });

//! SORT FUNCTION - Will affect the original array
// const items = ["Banana", "Orange", "Apple", "Mango"];
// const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

// items.sort(); // Work great!
// console.log(items); // Array(4) [ "Apple", "Banana", "Mango", "Orange" ]

// ratings.sort(); // Transfer number to string so
// console.log(ratings); // Array(8)[(10, 2, 22, 4, 45.6, 56, 80, 92)];
// //? The way to do
// //? if positive (true) jump (sort) else don't => 92 > 56 = switch
// ratings.sort(function (a, b) {
//   return a - b;
// });
// console.log(ratings); // Array(8) [ 2, 4, 10, 22, 45.6, 56, 80, 92 ]
// //* In ARROW FUNCTION
// //* remove function, {}, return and add =>
// ratings.sort((a, b) => a - b);

// games.sort((a, b) => b.rating - a.rating);
// console.log(games);

//! SPREAD OPERATOR
// const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];
// const descRating = [...ratings]; //* Make a copy of the array
// descRating.sort((a, b) => b - a);
// console.log(descRating); // Array(8) [ 92, 80, 56, 45.6, 22, 10, 4, 2 ]
// console.log(ratings); // Array(8) [ 92, 56, 4, 2, 22, 45.6, 10, 80 ] //* As not been modified

// const name = "AndreRoy";
// const letters = [...name]; // Make an array with the string
// console.log(letters); // Array(8) [ "A", "n", "d", "r", "e", "R", "o", "y" ]

// const names = ["Ed", "Andre"];
// const otherNames = ["Jon", "Bon", "Jovi"];
// const allNames = [...names, ...otherNames];
// console.log(names); //* Didn't changed
// console.log(otherNames); //* Didn't changed
// console.log(allNames); // Array(5) [ "Ed", "Andre", "Jon", "Bon", "Jovi" ] //* Concat with spread operator
