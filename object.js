//! THIS KEYWORD - A pointer that refer to an object
// console.log(this); //* Point to the window object

// const user = {
//     name: "Andre",
//     sayHi: function () { //* Method
//     }
// }

//* Shorter way to create methods
// const user = {
//     name: "Andre",
//     sayHi() { //* Method
//         console.log(this); //* Point to the user object
//         console.log(this.name);
//     }
// }
// user.sayHi();

// const user = {
//   name: "Andre",
// };

// const admin = {
//   name: "Admin",
// };

// function sayHi() {
//   console.log(this);
// }

// user.hi = sayHi; //* Add the function to the user object (method)
// admin.hi = sayHi; //* Add the function to the admin object (method)

// user.hi(); //* This refer to the user object
// admin.hi(); //* This refer to the admin object

//? ARROW FUNCTION don't get a THIS created

//! BIND Method - Copy the function and invoke it later
// const person = {
//   firstName: "André",
//   lastName: "Roy",
//   getName() {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// function registerUser(country, lang) {
//   console.log(this);
//   console.log(country, lang);
// }

// registerUser(); //* This == window

// const register = registerUser.bind(person); //* Bind the person object to the newly copied function
// register("Canada", "fr"); //* This == person

//! CALL Method - Invoke the function
// registerUser.call(person, "canada", "fr"); //* This == person and the parameters are passed at the same time - no copie of the function

//! APPLY - Invoke the function
// registerUser.apply(person, ["Canada", "fr"]); //* Same as CALL, but the params are pass in an array

//! OOP - CONSTRUCTOR (Convention: First letter capital)
// function Todo(name, completed) {
//   this.name = name;
//   this.completed = completed;
//   this.getTodoName = function () {
//     console.log(this.name);
//   };
// }

// const todo = new Todo("Buy Eggs", false);
// const todo2 = new Todo("Do HomeWork", false);

// todo.getTodoName();
// todo2.getTodoName();
// console.log(todo); //* Duplicate all methods
// console.log(todo2); //* Duplicate all methods

//! OOP - PROTOTYPE - The instances inherite the methods
//! (EX: an array is an instance of Array prototype)
// function Todo(name, completed) {
//   this.name = name;
//   this.completed = completed;
// }

// Todo.prototype.getTodoName = function () {
//     console.log(this.name);
// }

// const todo = new Todo("Buy Eggs", false);
// const todo2 = new Todo("Do HomeWork", false);

// todo.getTodoName();
// todo2.getTodoName();
// console.log(todo); //* Duplicate all methods
// console.log(todo2); //* Duplicate all methods

//!OOP - INHERITANCE
// function Enemy(life, name, level) {
//   this.life = life;
//   this.name = name;
//   this.level = level;
// }

// Enemy.prototype.getInfo = function () {
//   console.log(this.life, this.name, this.level);
// };
// Enemy.prototype.attack = function () {
//   console.log(`${this.name} has attacked`);
// };
// Enemy.prototype.block = function () {
//   console.log(`${this.name} has blocked`);
// };

// function Dragon(life, name, level, color, spell) {
//   //* The keyword THIS  reference the Dragon object
//   Enemy.call(this, life, name, level); //? Call the Enemy constructor
//   //* Define normaly
//   this.color = color;
//   this.spell = spell;
// }

// //* Inherit Prototype
// Dragon.prototype = Object.create(Enemy.prototype); //* Inherited from Enemy Prototype

// Dragon.prototype.fireBreath = function () {
//   console.log(`${this.name} breath fire!`);
// };

// const redDragon = new Dragon(100, "Drogon", 5, "Red", "Fire");
// console.log(redDragon);
// redDragon.block(); //* Inherited Prototype Method from Enemy
// redDragon.fireBreath(); //*Inherited Prototype Method from Dragon

//! OOP - CLASSES -  Chic Prototype!
// class Enemy {
//   constructor(life, name, level) {
//     this.life = life;
//     this.name = name;
//     this.level = level;
//   }
//   getInfo() {
//     console.log(this.life, this.name, this.level);
//   }
// }

// class Mage extends Enemy {
//   constructor(life, name, level, spell, mana) {
//     super(life, name, level);
//     this.spell = spell;
//     this.mana = mana;
//   }
// }

// const wereTurtle = new Enemy(25, 'Squidell', 5);
// const wereFlamingo = new Enemy(30, 'Flanagan', 6);
// wereTurtle.getInfo();
// wereFlamingo.getInfo();
// const blackMage = new Mage(100, "Morgraïd", 20, "Call Zombies", 100);
// blackMage.getInfo();