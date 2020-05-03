//! DECONSTRUCT
// //? Arrays
// const items = ["banana", "chocolate noodle", "apple", "cheese"];

// Ugly way
// const apple = items[2];
// const cheese = items[3];
// console.log(apple, cheese);

// Deconstructing way
// const [banana, chocolate, ...rest] = items; // Rest operator
// console.log(chocolate);
// console.log(rest);

// const newItems = [...items, "more stuff"]; // Spread operator
// console.log(newItems);

// //? Objects
// const user = {
//   name: "Ed",
//   photos: [1, 2, 3, 4, 5, 6, 7],
//   age: 25,
//   analytics: {
//     suscribers: 25000,
//     videos: 250,
//   },
// };

// Ugly way
// const photos = user.photos;
// const videos = user.analytics.videos;
// console.log(photos);
// console.log(videos);

// Deconstructing way
// const { photos, age } = user;
// console.log(photos);
// const { videos } = user.analytics;
// console.log(videos);

//! IIFE - Immediately Invoked Function Expression
// Normal way
// function hello() {
//   console.log("How are you?");
// }

// hello();

//IIFE Way
// (function hello() {
//   console.log("How are you?");
// })();

// //? Usualy used in library to make sure that their variables don't affect the global scope
// const animation = "Let's anim!"; // Global scope

// (function library() {
//   const animation = "anim";
//   console.log(animation); // Function scope
// })();

// console.log(animation);
