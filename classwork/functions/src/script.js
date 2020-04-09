// 1. Write a function which accepts an argument and returns
//  the type of the argument.

// function fruit() {
//   let fruit = 0;
//   return fruit;
// }
// console.log(typeof fruit);

// // function myFunction(p1, p2) {
// //   return p1 * p2; // The function returns the product of p1 and p2
// // }

// // myFunction(3, 5);
// // console.log(myFunction);

// // 2. Write a function that accept two integers and
// // returns the larger one.

// function largets(x, y) {
//   if (x > y) {
//     console.log(x);
//   } else y > x;
//   {
//     console.log(y);
//   }
// }

// largets(8, 4);

// 3. Write a function that show how old a dog in
// human years, it should take one argument - puppy’s
// age. 1 human year is 7 dog years. The function
// should return a string like “Your doggie is NN
// years old in dog years!”

// 4. Write a function that accepts a string as a
// parameter and counts the number of vowels within
// the string.
// Each function has to return a value, do not
// display a result inside a function.
// :+1:1

// ------------------Part2

// 1. Write a function that accepts a string as a parameter
//  and counts the number of vowels within the string.

// function countVowels(inputString) {
//   let sumVowels = 0;
//   for (let i = 0; i < inputString.length; i++) {
//     if (inputString[i] === "e") {
//       sumVowels += 1;
//     } else if (inputString[i] === "o") {
//       sumVowels += 1;
//     }
//   }
//   return sumVowels;
// }

// let sumVowels = countVowels("Hello World");
// console.log(sumVowels);

// 2. Write a function that accepts hours, minutes, and seconds
// and returns that time only in seconds. For example, 1 hour 25
// minutes 43 seconds returns 5145 seconds.

// function count(hours, minutes, seconds) {
//   //   let hour = 3600;
//   //   let minute = 60;
//   //   let second = 1;

//   let result = hours * 3600 + minutes * 60 + seconds;

//   return result;
// }

// let result = count(3, 40, 30);

// console.log(result);

// 3. Write a function that accepts two arguments: a string and a
// character. The function has to count the number of occurrences
// of the specified character within the string. For example, there
// are 2 occurrences of a character “o” in the string “Hello world”.

// function countOccurrences(inputString, inputCharacter) {
//   let sum = 0;
//   for (let i = 0; i < inputString.length; i++) {
//     if (inputString[i] === inputCharacter) {
//       sum += 1;
//     }
//   }
//   return sum;
// }

// let sum = countOccurrences("Occurrences", "c");
// console.log(sum);
