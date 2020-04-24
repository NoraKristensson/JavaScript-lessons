/* 1. Create a “groceries list” array. Each element of the array is an object that contains the name of a product, an amount needed and a property saying whether it is bought or not. 

Write a few functions for working with this array: 
1) Function for displaying the entire list; 
2) Function for adding a purchase to the list. Note that if a product already exists in the array, the amount needs to be increased in the existing purchase, not in a new one; 
3) Function for purchasing a product. The function accepts the name of a product and marks it as bought.*/

let groceriesList = [
  {
    name: "banana",
    amount: 3,
    isbought: false,
  },
  {
    name: "tomato",
    amount: 5,
    isbought: false,
  },
  {
    name: "fish",
    amount: 1,
    isbought: false,
  },
  {
    name: "icecream",
    amount: 10,
    isbought: false,
  },
];
//1.1

// groceriesList.forEach(function (groceries) {
//   console.log(` ${groceries.amount} - ${groceries.name}`);
// });

const list = (arr) => {
  const theList = arr.map((i) => i.name);
  console.log(theList);
  return theList;
};

list(groceriesList);

//1.2
function addItemToTheList(item, amount, status) {
  groceriesList.push({
    name: item,
    amount: amount,
    isbought: status,
  });
}
addItemToTheList("egg", 10, false);
// 1. check if the item already exist
// 2. find the index of the item
// 3. update the by adding to existing item

const checkItem = (name) => {
  return list(groceriesList).includes(name);
};

console.log(checkItem("fish"));
console.log(list(groceriesList).findIndex(checkItem));
// ------------------
const add = (item, quant, status = false) => {
  if (list(groceriesList).includes(item)) {
    const idx = groceriesList.findIndex((el) => el.name === item);
    return (groceriesList[idx].amount = groceriesList[idx].amount + quant);
  } else {
    return groceriesList.push({ name: item, amount: quant, status });
  }
};

add("fish", 2);
console.log(groceriesList);

//   -----------------------------

// function addGroceries(name, amount, isbought) {
//   this.name = name;
//   this.amount = amount;
//   this.isbought = isbought;
//   this.displayFullList = function () {
//     console.log(`${this.amount} - ${this.name}`);
//   };
// }
// let milk = new addGroceries("milk", 2, true);
// let egg = new addGroceries("egg", 12, true);
// milk.displayFullList();
// egg.displayFullList();

// let newList = [];
// for (let i = 0; i > groceriesList.amount; i++) {
//   newList.push("milk", "2", true);
// }
// console.log(newList);

// for (let i = 0; i < 1; i++) {
//   groceriesList.push(new NewGroceries("bread", "2", true));
//   groceriesList.push(new NewGroceries("cheese", "12", true));
// }

//   document.write(`<p>${this.amount} - ${this.name}</p>`);

/*Create an array of classrooms. A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for. Write a few functions for working with it: 1) Display all the classrooms; 2) Display all the classrooms for a given faculty; 3) Display only the classrooms that would fit a given group. A group object contains a name, the number of students, and the faculty name. */

// let classrooms = [
//   {
//     name: "2B",
//     seats: 10,
//     faculty: "Social",
//   },
//   {
//     name: "5B",
//     seats: 15,
//     faculty: "Social",
//   },
//   {
//     name: "2A",
//     seats: 10,
//     faculty: "Health",
//   },
//   {
//     name: "5A",
//     seats: 15,
//     faculty: "Health",
//   },
// ];
// classrooms.forEach(function () {
//   console.log(` ${classrooms.name} - ${classroom.seats}`);
// });
