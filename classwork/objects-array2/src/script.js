// 1. Suppose we have an array of people.
// Using the splice() function, remove “Jane” from the array and add “Elizabeth” and “Artie”.
// Then the array should look like this [“Mary”, “Greg”, “Elizabeth”, “Artie”, “James”].

// let people = ["Mary", "Greg", "Jane", "James"];
// people.splice(people.indexOf("Jane"), 1, "Elizabeth", "Artie");
// console.log(people);

// _______________________________________________________________

// 2. Suppose we have an array of objects.
// Using forEach() function, print each element to the webpage in the following way:
// 1. Book ‘The Road Ahead’ is written by ‘Bill Gates’
// 2. Book ‘Walter Isaacson’ is written by ‘Steve Jobs’

// books = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//   },
// ];

// books.forEach(function (book, i) {
//   document.write(
//     `<p> ${i + 1} Book ${book.title} is written by ${book.author}</p>`
//   );
// });

// ___________________________________________________________________

// 3. Suppose we have an array of numbers.
// Using filter() function, create a new array consisting only positive numbers.

// let numbers = [112, -20, 52, 0, -1, 944];

// let numbers2 = numbers.filter(function (number) {
//   return number > 0;
// });

// console.log(numbers2);

// _______________________________________________________________________

// 4. Suppose we have an array of objects.
// Using map() function, create a new array consisting reformatted objects
// like this:

// [
//     {
//       name: 'James'
//     },
//     {
//       age: 27
//     },
//     {
//       surname: 'Doe'
//     }
//   ]

// let keyValueArray = [
//   {
//     key: "name",
//     value: "James",
//   },
//   {
//     key: "age",
//     value: 27,
//   },
//   {
//     key: "surname",
//     value: "Doe",
//   },
// ];

// let reformattedArray = keyValueArray.map(function (item) {
//   let newObject = {};
//   newObject[item.key] = item.value;
//   return newObject;
// });

// console.log(reformattedArray);
// __________________________________________________________________________
// __________________________________________________________________________

// 1 .Create a constructor function called Video. The function should accept arguments of title (a string), uploader (a string, the person who uploaded it), and seconds (a number, the duration), and it should save them as properties of the object.

// Create a method of the Video constructor called watch() which should log a string to the console like “You watched all 1800 seconds of Walking with Dinosaurs!” Create a new object using the Video constructor and call the watch() method of it.

function Video(title, uploader, seconds) {
  this.title = title;
  this.uploader = uploader;
  this.seconds = seconds;
  this.watch = function () {
    console.log(`You watched all ${this.seconds} seconds of ${this.title}!`);
  };
}

let movie = new Video("Bamse", "Nora", 3600);
let movie2 = new Video(3600, "Nora", "nalle puh"); //fel

movie.watch();
movie2.watch();

// __________________________________________________________________________
// __________________________________________________________________________

// 2. Suppose we have a student object:
// Write a function called displayStudentInfo which accepts an object and returns the string “Your full name is NAME LASTNAME”. Use object destructuring to create “name” and “lastname” variables.

// let student = {
//   name: "Alex",
//   lastname: "Wood",
// };

// function displayStudentInfo(student) {
//   let {name, lastname } = student;
//   let result = `Your full namne is ${name} ${lastname}`;
//   return result;
// }

// console.log(displayStudentInfo(student));

// ____________________________________________________________________
