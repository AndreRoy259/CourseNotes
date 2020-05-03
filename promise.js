//! PROMISE

// //? Creation
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
// resolve({ user: "ed" });
//     reject(new Error("User not logged in"));
//   }, 2000);
// });

// //? Cossumation
// promise
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => console.log(err.message));

// //? Exemple
// console.log("Start");

// // Simulate an API
// function loginUser(email, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Now we have the data");
//       resolve({ userEmail: email });
//     }, 3000);
//   });
// }

// function getUserVideos(email) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(["video1", "video2", "video3"]);
//     }, 2000);
//   });
// }

// function getVideoDetails(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("title of the video");
//     }, 2000);
//   });
// }

// // Consumtion
// loginUser("ed", "bumba")
//   .then((user) => getUserVideos(user.email))
//   .then((videos) => getVideoDetails(videos[0]))
//   .then((detail) => console.log(detail));

// console.log("Finnish");
