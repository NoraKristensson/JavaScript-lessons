//  Övninge1
// One task to do using switch:
// Request a number of a month from a user.
// Print the name of the month to the webpage
// as a paragraph using document.write().

// let month = prompt("Name the number of a month?");
// month = +month;

// switch (month) {
//   case 1:
//     document.write("January");
//     break;
//   case 2:
//     document.write("February");
//     break;
//   case 3:
//     document.write("Mars");
//     break;
//   case 4:
//     document.write("April");
//     break;
// }

// ---------------------------------------------------
// Övning2
// One task using while loop:
// Request a number and an extent. Raise the number to the given
// power and display the result. Do not use ** or Math.pow() here.

let number = +prompt("tell me a number?");
let extent = +prompt("give me an extent?");

answer = 1;
for (i = 1; i <= extent; i++) {
  answer = answer * number;
}

alert("The answer is " + answer);

//

// ---------------------------------------------------
// Övning3
// One task using do while loop:
// Suggest a user solve 2 + 2 * 2 until he/she does it right.

// let answer;
// do {
//   answer = prompt("Pleace do this math: 2 + 2 * 2 = ?");
// } while (answer != 6);
// alert("You answered correctly!");

// ---------------------------------------------------

// Övning4
// And one task using for loop:
// Count sheep. Request a non-negative integer, 3 for example,
// and print a string with a murmur: “1 sheep...2 sheep...3 sheep...”
// to the page using document.write(). If a user types a negative number in, alert an error.

// let sheep = +prompt("Type a number of sheeps");
// for (let i = 1; i <= sheep; i++) {
//   document.write(" " + i + "sheep...");
// }
// if (sheep < 1) {
//   alert("Error!");
//   document.write(" ");
// }
