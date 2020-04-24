// let number = +prompt("add a number");
// let sum = 1;

// for (let i = 1; i <= 5; i++) {
//   sum = sum * 5;
// }
// console.log(sum);
// ____________________________________________________________

// 1.Write a program that lists the properties of an object. For example, for the object

// let student = {
//   name: "Jane Rayy",
//   class: "VI",
//   age: 12,
// };

// for (let key in student) {
//   console.log(key);
// }

// ___________________________________________________________________

// 2.  Create an object that holds information of your favorite recipe.
// It should have properties for title (a string), servings (a number), and
// ingredients (a string, each ingredient separated by a comma).

// Display the recipe information on the webpage. Use heading for the title.
// Use paragraphs for other info. For example:

// Mole;
// Servings: 2;
// Ingredients: cumin, cocoa, cinnamon;

// let recipe = {
//   title: "Mole",
//   servings: 2,
//   ingredients: "cumin, cocoa, cinnamon",
// };

// document.write(`<h1>${recipe.title}</h1>`);
// document.write(`<p> Servings: ${recipe.servings}</p>`);
// document.write(`<p> Ingredients: ${recipe.ingredients}</p>`);

// _________________________________________________________________

// 3. Write a function to get a copy of the object where the keys have become the
//  values and the values become the keys. For example, for the object

// let person = {
//   name: "Alex",
//   lastname: "Doe",
//   age: 25,
// };

// //   Result :

// //   {
// //     Alex: 'name',
// //     Doe: 'lastname',
// //     '25': 'age'
// //  };

// function replace(object) {
//   let newObject = {};
//   for (let key in object) {
//     //   object[key] will get us the value
//     //   newObject['alex'] = 'name'
//     newObject[object[key]] = key;
//   }
//   return newObject;
// }
// console.log(replace(person));
// _____________________________________________________________________

// 1 Suppose we have this array: people = ["Alex", "Mary", "Devon", "James"]; Do the following manipulations with the array: 1) Remove “James” from the array; 2) Remove “Alex” from the array; 3) Add your name to the beginning of the array; 4) Add “Jane” to the end of the array; 5) Using for-loop, write all names of the changed array to the webpage using document.write() .

// let people = ["Alex", "Mary", "Devon", "James"];
// people.pop();
// people.shift();
// people.unshift("Nora");
// people.push("Jane");

// for (let i = 0; i < people.length; i++) {
//   document.write(`<p>${people[i]}</p>`);
// }

// __________________________________________________________________________

// 2. Write a function that accepts an array and returns a reversed version of it.
// Do not use the reverse() function. For example: ['a', 'b', 3, 'c', [], 10]
// // will be [10, [], 'c', 3, 'b', 'a'] .

// let reverse = ["a", "b", 3, "c", [], 10];

// function changeOrder(arry) {
//   let newArry = [];
//   for (let i = arry.length - 1; i >= 0; i--) {
//     newArry.push(arry[i]);
//   }
//   return newArry;
// }
// console.log(changeOrder(reverse));

// _________________________________________________________________________________

// 3. Write a script that displays the reading status of the following books (either to the webpage or to the console).

// Example output:
// I already read ‘The Road Ahead’ by Bill Gates
// I already read ‘Walter Isaacson’ by Steve Jobs
// I still need to read ‘Mockingjay: The Final Book of The Hunger Games’ by Suzanne Collins

// let myLibrary = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     isRead: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     isRead: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     isRead: false,
//   },
// ];

// for (let key of myLibrary) {
//   if (key.isRead === true) {
//     document.write(`<p> I already read ${key.title} by ${key.author}</p>`);
//   } else {
//     document.write(
//       `<p> I still need to read ${key.title} by ${key.author}</p>`
//     );
//   }
// }
